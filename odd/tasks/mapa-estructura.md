# Feature: mapa-estructura

## Objective

Raise the roadmap from the 7.5/10 review to 10/10: make the repository usable (level folders the README already promises), shorten the path to the junior-job milestone, and fix the remaining inconsistencies.

## Problem

The 2026-10-11 review found: the README promises one folder per level with `teoria/`, `ejercicios/` and `proyecto/`, but none exist (the repo feels empty and cannot be started); level 10 puts all of MIT 6.102 (150 h, TypeScript) before the job milestone; "Django o FastAPI: empezá por uno solo" contradicts a portfolio that requires both; the 48 KB README has no index; the 6345 h total reads as mandatory.

## Scope and constraints

- Files: `README.md`, `TRACKER.md`, new `niveles/` tree. Content in Spanish matching the existing README voice.
- Keep the source policy; every new or changed link must return HTTP 200 (or a documented bot block).
- Branch `docs/mapa-estructura`; Conventional Commits, no AI attribution; no push.
- Route: delegated direct (writer trigger: README + TRACKER + 15 level READMEs are non-trivial files).

## Tasks

- [x] T1 Shorter milestone: level 10 keeps MIT 6.102 classes 01–09 applied in Python (60 h); the full course (classes 10–19 + problem sets, 90 h) moves to Etapa 3. Recompute "Tiempo estimado" and every cumulative figure (milestone 1180 → 1090 h).
- [x] T2 Consistency: Django/FastAPI note aligned with the portfolio; post-milestone content framed as a menu, not a mandatory degree; table of contents at the top of the README.
- [x] T3 Level folders: `niveles/nivel-NN-<slug>/` for levels 0–14 with `teoria/`, `ejercicios/`, `proyecto/` and a README per level (goal, sources, exercises, done-when checklist, link back). Level 0 gets a step-by-step start guide.
- [x] T4 Wiring: README "Estructura de carpetas" and TRACKER link to the real folders.

## Acceptance criteria

- Every folder the README mentions exists; every relative link resolves.
- Hours add up in every table and in TRACKER.
- New/changed URLs return 200.

## Checks

- Passive documentation: no runnable RED/GREEN test; structural readback, relative-link check, hours arithmetic, URL check.

## Progress

Created. Route per task: delegated direct (one bounded writer for T1–T4).

- T1: level 10 = MIT 6.102 classes 01–09 in Python (60 h); classes 10–19 + psets moved to Etapa 3 row "Diseño de software a fondo" (90 h). Milestone 1090 h; Etapa 3 cumulative stays 1280, so later rows are unchanged. Commit ee8b5d3.
- T2: Django/FastAPI one at a time, aligned with the two-framework portfolio; post-milestone framed as a menu (bullet in "Cómo usar este mapa" and in "Tiempo estimado"); TOC as a bold "Contenido" list (not an H2, so it does not list itself) at the end of the intro. Commit f1413ce.
- T3: `niveles/` with 15 level folders (`teoria/`, `ejercicios/`, `proyecto/` + `.gitkeep`), one README each, and `niveles/README.md` index. Level 0 has the uv-based start guide (commands checked against docs.astral.sh and learn.microsoft.com WSL install page). Each README links to the next level in the recommended order (10 → 13 Web → 14 → 11 → 12 → 13). Commit fc12634.
- T4: README "Estructura de carpetas", "Para empezar" line and "Práctica continua" point to `niveles/`; TRACKER links every level item to its folder and starts with a pointer to `niveles/nivel-00-preparacion`.

## Verification evidence

- Relative links and anchors (`python3 -I check_links.py .`, GitHub slug algorithm, fenced code ignored; negative test caught a bad anchor and a missing file): `files=18 relative_links=154 broken=0`.
- Hours (`python3 -I check_hours.py README.md`): every stage table matches its declared total (C y Rust rows 580 + 40 h project = 620, as documented); "Tiempo estimado" running sum ends at 6345; milestone row 1090. TRACKER: Etapa 2 225, Etapa 3 190, Nivel 14 340, steps 1–2 600, milestone 1090.
- New URLs (`curl -L --max-time 15`): 200 for the four MIT 6.102 class pages (01, 09, 10, 19), uv installation and install-python guides, `astral.sh/uv/install.sh`, WSL install page and the GitHub repo; 404 only for the `TU-USUARIO` placeholder inside a code block (intentional).
- `rg -n '1180|315\b|690\b' README.md TRACKER.md niveles`: no matches.
- Native review: not run by the writer (parent decides).

Next step: user decides merge into main and push.
