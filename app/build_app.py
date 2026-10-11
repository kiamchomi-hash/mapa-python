"""Build the study app (Plan IA + Mapa completo) from the repository markdown.

Usage:
    python3 app/build_app.py --mode artifact|standalone --out <file>

The repository root is the parent of this script's folder. The generator reads
plan-ia/fases/fase-*/README.md, plan-ia/README.md and niveles/nivel-*/README.md,
renders their sections to HTML (relative links become GitHub URLs, checklist
items get stable checkbox ids) and embeds that JSON in app/template.html.

Modes:
    artifact    HTML fragment for a claude.ai artifact (the host adds the
                document skeleton; progress syncs through window.claude when
                available, localStorage otherwise).
    standalone  Complete HTML document for a browser or the Android WebView;
                progress lives only in localStorage.

Template placeholders: __DATA__ (the JSON) and __LOCAL_LABEL__ (the sync label
shown while progress is stored only on the device).

Output is deterministic: the same repository content produces the same bytes.
"""
import argparse
import html
import json
import posixpath
import re
from pathlib import Path

APP_DIR = Path(__file__).resolve().parent
REPO = APP_DIR.parent
TEMPLATE = APP_DIR / "template.html"
GH = "https://github.com/kiamchomi-hash/mapa-python/blob/main/"
SKIP = {"Navegación", "Qué va en cada carpeta"}
LOCAL_LABEL = {"artifact": "guardado en este dispositivo", "standalone": "guardado en este celular"}

# Minimal reset the claude.ai artifact host normally provides; standalone only.
STANDALONE_RESET = """<style>
body { margin: 0; }
:root { padding-top: env(safe-area-inset-top, 0px); padding-bottom: env(safe-area-inset-bottom, 0px); }
</style>
"""


def resolve(href, base):
    if re.match(r"^[a-z]+:", href):
        return href
    path, _, frag = href.partition("#")
    full = posixpath.normpath(posixpath.join(posixpath.dirname(base), path)) if path else base
    url = GH + full
    if path.endswith("/") or (path and "." not in posixpath.basename(path)):
        url = url.replace("/blob/", "/tree/")
    return url + (("#" + frag) if frag else "")


def inline(text, base):
    parts = re.split(r"(`[^`]+`)", text)
    out = []
    for p in parts:
        if p.startswith("`") and p.endswith("`") and len(p) > 1:
            out.append("<code>" + html.escape(p[1:-1]) + "</code>")
            continue
        s = html.escape(p, quote=False)
        s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
        s = re.sub(
            r"\[([^\]]+)\]\(([^)\s]+)\)",
            lambda m: f'<a href="{html.escape(resolve(html.unescape(m.group(2)), base))}" target="_blank" rel="noopener">{m.group(1)}</a>',
            s,
        )
        out.append(s)
    return "".join(out)


def link_fix(text, base):
    """Render inline markdown, including links whose label contains `code`.

    Such links would be split by the code-span pass in inline(), so they are
    swapped for a marker first and rendered back afterwards.
    """
    def rep(m):
        return "\0L" + json.dumps([m.group(1), m.group(2)]) + "\0"
    tmp = re.sub(r"\[([^\]]*`[^\]]*)\]\(([^)\s]+)\)", rep, text)
    rendered = inline(tmp.replace("\0L", "@@L@@"), base) if "\0L" in tmp else inline(text, base)
    if "@@L@@" not in rendered:
        return rendered

    def back(m):
        label, href = json.loads(html.unescape(m.group(1)))
        return f'<a href="{html.escape(resolve(href, base))}" target="_blank" rel="noopener">{inline(label, base)}</a>'
    return re.sub(r"@@L@@(.+?)\x00", back, rendered)


def render(lines, base, idp, counter):
    """Render a block of markdown lines; checklist items get ids idp-1, idp-2..."""
    out, para, i = [], [], 0
    lst = None

    def flush_para():
        if para:
            out.append("<p>" + link_fix(" ".join(para), base) + "</p>")
            para.clear()

    def close_list():
        nonlocal lst
        if lst:
            out.append(f"</{lst}>")
            lst = None

    while i < len(lines):
        ln = lines[i]
        if ln.startswith("```"):
            flush_para(); close_list()
            j = i + 1
            code = []
            while j < len(lines) and not lines[j].startswith("```"):
                code.append(lines[j]); j += 1
            out.append('<pre><code>' + html.escape("\n".join(code)) + "</code></pre>")
            i = j + 1
            continue
        m_chk = re.match(r"^\s*- \[[ xX]\] (.*)", ln)
        m_ul = re.match(r"^- (.*)", ln)
        m_ol = re.match(r"^\d+\. (.*)", ln)
        if m_chk:
            flush_para()
            # Each checklist item gets its own <ul class="check">; the page CSS
            # spacing was tuned for this output, so keep it as is.
            close_list(); out.append('<ul class="check">')
            lst = "ul"
            counter[0] += 1
            cid = f"{idp}-{counter[0]}"
            out.append(f'<li><label><input type="checkbox" data-id="{cid}"><span>{link_fix(m_chk.group(1), base)}</span></label></li>')
        elif m_ul or m_ol:
            flush_para()
            tag = "ul" if m_ul else "ol"
            if lst != tag:
                close_list(); out.append(f"<{tag}>"); lst = tag
            out.append("<li>" + link_fix((m_ul or m_ol).group(1), base) + "</li>")
        elif ln.startswith("|"):
            flush_para(); close_list()
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                rows.append([c.strip() for c in lines[i].strip().strip("|").split("|")]); i += 1
            hdr, body = rows[0], rows[2:]
            t = '<div class="tw"><table><thead><tr>' + "".join(f"<th>{link_fix(c, base)}</th>" for c in hdr) + "</tr></thead><tbody>"
            t += "".join("<tr>" + "".join(f"<td>{link_fix(c, base)}</td>" for c in r) + "</tr>" for r in body)
            out.append(t + "</tbody></table></div>")
            continue
        elif not ln.strip():
            flush_para(); close_list()
        else:
            close_list(); para.append(ln.strip())
        i += 1
    flush_para(); close_list()
    return "\n".join(out)


def parse_unit(path, kind, num):
    rel = path.relative_to(REPO).as_posix()
    text = path.read_text(encoding="utf-8").splitlines()
    title = text[0].lstrip("# ").strip()
    # Split the head (before the first "## ") from the sections.
    sections, cur, head = [], None, []
    for ln in text[1:]:
        if ln.startswith("## "):
            cur = [ln[3:].strip(), []]; sections.append(cur)
        elif cur is None:
            head.append(ln)
        else:
            cur[1].append(ln)
    goal = next((l.strip() for l in head if l.strip() and not l.startswith("- ")), "")
    meta = {}
    for l in head:
        m = re.match(r"^- \*\*(.+?):\*\* (.*)", l)
        if m:
            meta[m.group(1)] = m.group(2)
    hours = int(re.search(r"\d+", meta.get("Horas estimadas", "0")).group())
    counter = [0]
    idp = f"{kind}{num}"
    secs = [{"name": name, "html": render(lines, rel, idp, counter)} for name, lines in sections if name not in SKIP]
    return {
        "id": idp, "num": num, "title": title, "goal": link_fix(goal, rel), "hours": hours,
        "req": link_fix(meta.get("Requisitos", ""), rel),
        "group": re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", meta.get("Etapa", "")),
        "folder": GH.replace("/blob/", "/tree/") + path.parent.relative_to(REPO).as_posix(),
        "sections": secs, "items": counter[0],
    }


def section_of(md_path, heading):
    lines = md_path.read_text(encoding="utf-8").splitlines()
    start = next(i for i, l in enumerate(lines) if l.strip() == "## " + heading)
    end = next((i for i in range(start + 1, len(lines)) if lines[i].startswith("## ")), len(lines))
    return lines[start + 1:end]


def build_data():
    fases = sorted((REPO / "plan-ia/fases").glob("fase-*/README.md"))
    niveles = sorted((REPO / "niveles").glob("nivel-*/README.md"))
    ia_md = REPO / "plan-ia/README.md"
    return {
        "ia": {
            "units": [parse_unit(p, "f", int(re.search(r"fase-(\d+)", str(p)).group(1))) for p in fases],
            "rules": render(section_of(ia_md, "Cómo estudiar con IA"), "plan-ia/README.md", "r", [0]),
            "after": render(section_of(ia_md, "Después del hito"), "plan-ia/README.md", "x", [0]),
        },
        "mapa": {"units": [parse_unit(p, "n", int(re.search(r"nivel-(\d+)", str(p)).group(1))) for p in niveles]},
    }


def build_page(mode, data):
    # "</" is escaped so the JSON can never close its <script> element early.
    payload = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")
    page = TEMPLATE.read_text(encoding="utf-8")
    page = page.replace("__LOCAL_LABEL__", LOCAL_LABEL[mode]).replace("__DATA__", payload)
    if mode == "artifact":
        return page
    # Standalone: the template is head content (title, fonts, styles) followed by body content.
    head, sep, body = page.partition("</style>\n")
    if not sep:
        raise SystemExit("template.html: expected a </style> line ending the head content")
    return (
        '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
        + STANDALONE_RESET + head + sep + "</head>\n<body>\n" + body.lstrip("\n") + "</body>\n</html>\n"
    )


def main():
    ap = argparse.ArgumentParser(description="Build the Mapa Python study app HTML.")
    ap.add_argument("--mode", choices=sorted(LOCAL_LABEL), required=True)
    ap.add_argument("--out", type=Path, required=True)
    args = ap.parse_args()
    data = build_data()
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_bytes(build_page(args.mode, data).encode("utf-8"))
    ia, mapa = data["ia"]["units"], data["mapa"]["units"]
    print(f"{args.mode}: {len(ia)} fases, {sum(u['items'] for u in ia)} items; "
          f"{len(mapa)} niveles, {sum(u['items'] for u in mapa)} items; "
          f"{args.out.stat().st_size} bytes -> {args.out}")


if __name__ == "__main__":
    main()
