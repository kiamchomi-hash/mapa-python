// Standalone only (build_app.py inlines this inside the page script, before the
// first render; the claude.ai artifact never gets it). Syncs progress through a
// secret GitHub gist reached with a classic token that has only the "gist" scope.
// Uses the page's done, LS, saveLocal, route, view and syncEl, plus SyncCore.
(function () {
  const V2 = LS + "-v2", TOKEN = "mapa-python-gh-token", GIST = "mapa-python-gist-id";
  const FILE = "mapa-python-progreso.json", API = "https://api.github.com";
  const MAX_PAGES = 5;
  const TOKEN_URL = "https://github.com/settings/tokens/new?scopes=gist&description=Mapa%20Python";

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function put(k, v) { try { if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }
  function token() { return get(TOKEN) || ""; }

  // Progress state with per-item timestamps; v1 (done map) is migrated once.
  let state = null;
  try { const raw = get(V2); if (raw) state = SyncCore.normalize(JSON.parse(raw)); } catch (e) { state = null; }
  if (!state) state = SyncCore.migrateV1(done);
  function saveState() { put(V2, JSON.stringify(state)); }
  saveState();
  done = SyncCore.doneMap(state);
  saveLocal();

  function applyState(next) {
    const before = JSON.stringify(SyncCore.doneMap(state));
    state = next;
    saveState();
    done = SyncCore.doneMap(state);
    saveLocal();
    if (JSON.stringify(done) !== before) route();
  }

  function setLabel(text) { syncEl.textContent = text; }
  function idleLabel() { setLabel(token() ? "sin sincronizar todavía" : "sin sincronizar"); }
  function hhmm(d) { return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0"); }

  async function api(tok, path, method, body) {
    const headers = { Authorization: "Bearer " + tok, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
    if (body !== undefined) headers["Content-Type"] = "application/json";
    const res = await fetch(path.indexOf("https://") === 0 ? path : API + path, {
      method: method || "GET", headers: headers, cache: "no-store",
      body: body === undefined ? undefined : JSON.stringify(body)
    });
    if (!res.ok) { const err = new Error("GitHub HTTP " + res.status); err.status = res.status; throw err; }
    return res;
  }

  function fileBody() { return { files: { [FILE]: { content: JSON.stringify(SyncCore.normalize(state)) } } }; }

  async function findGistId(tok) {
    let url = API + "/gists?per_page=100";
    for (let page = 0; url && page < MAX_PAGES; page++) {
      const res = await api(tok, url);
      const list = await res.json();
      const hit = Array.isArray(list) ? list.find(g => g && g.files && g.files[FILE]) : null;
      if (hit) return hit.id;
      url = SyncCore.nextLink(res.headers.get("Link"));
    }
    return null;
  }

  async function loadGist(tok) {
    const cached = get(GIST);
    if (cached) {
      try { return await (await api(tok, "/gists/" + encodeURIComponent(cached))).json(); }
      catch (e) { if (e.status !== 404) throw e; put(GIST, null); }
    }
    const id = await findGistId(tok);
    return id ? await (await api(tok, "/gists/" + encodeURIComponent(id))).json() : null;
  }

  async function readRemote(gist) {
    const f = gist.files && gist.files[FILE];
    if (!f) return { items: {} };
    let text = f.content;
    // raw_url of a secret gist needs no token; sending none avoids a CORS preflight.
    if (f.truncated && f.raw_url) text = await (await fetch(f.raw_url, { cache: "no-store" })).text();
    try { return SyncCore.normalize(JSON.parse(text || "{}")); } catch (e) { return { items: {} }; }
  }

  // One sync in flight at a time; a request made meanwhile reruns it once afterwards.
  let busy = false, again = false, timer = null;
  function schedule(ms) {
    if (!token()) return;
    clearTimeout(timer);
    timer = setTimeout(sync, ms);
  }

  async function sync() {
    const tok = token();
    if (!tok) { idleLabel(); return; }
    if (busy) { again = true; return; }
    if (navigator.onLine === false) { setLabel("sin conexión, guardado acá"); return; }
    busy = true;
    setLabel("sincronizando…");
    try {
      const gist = await loadGist(tok);
      if (!gist) {
        const created = await (await api(tok, "/gists", "POST", Object.assign({ description: "Mapa Python – progreso", public: false }, fileBody()))).json();
        put(GIST, created.id);
      } else {
        put(GIST, gist.id);
        const remote = await readRemote(gist);
        // No await between merging and applying: a click can't slip in and get lost.
        const merged = SyncCore.mergeProgress(state, remote);
        if (!SyncCore.sameProgress(merged, state)) applyState(merged);
        if (!SyncCore.sameProgress(merged, remote)) await api(tok, "/gists/" + encodeURIComponent(gist.id), "PATCH", fileBody());
      }
      setLabel("sincronizado " + hhmm(new Date()));
    } catch (e) {
      setLabel(e.status === 401 || e.status === 403 ? "token inválido" : "sin conexión, guardado acá");
    } finally {
      busy = false;
      if (again) { again = false; schedule(0); }
    }
  }

  view.addEventListener("change", e => {
    const cb = e.target;
    if (!(cb instanceof HTMLInputElement) || !cb.dataset.id) return;
    state.items[cb.dataset.id] = { v: cb.checked, t: Date.now() };
    saveState();
    schedule(1500);
  });
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") schedule(0); });
  window.addEventListener("online", () => schedule(0));

  // Settings: a button next to the status label opens an inline panel.
  const btn = el('<button type="button" class="syncbtn" aria-expanded="false" aria-controls="syncpanel">Sincronizar</button>').firstChild;
  syncEl.after(btn);
  const panel = el('<section class="syncpanel" id="syncpanel" hidden aria-labelledby="syncpanel-h">' +
    '<h2 id="syncpanel-h">Sincronizar el progreso</h2>' +
    '<p>Para ver el mismo progreso en el celular y en la compu, la app guarda una copia en un gist secreto de tu cuenta de GitHub ' +
    '(no aparece en tu perfil; solo dice qué casillas tildaste). Creá un token classic con únicamente el permiso <code>gist</code>, ' +
    'pegalo acá y hacé lo mismo en el otro dispositivo. Si una casilla cambió en los dos, gana el cambio más nuevo. ' +
    'Sin internet todo queda guardado acá y se sube cuando vuelve la conexión. El token se guarda solo en este dispositivo.</p>' +
    '<p><a href="' + TOKEN_URL + '" target="_blank" rel="noopener">Crear el token en GitHub</a></p>' +
    '<label for="gh-token">Token de GitHub</label>' +
    '<input id="gh-token" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="ghp_…">' +
    '<div class="syncactions"><button type="button" id="gh-save">Guardar y sincronizar</button>' +
    '<button type="button" id="gh-off">Desconectar</button></div>' +
    '<p class="syncmsg" id="gh-msg" role="status"></p></section>').firstChild;
  view.before(panel);
  const input = panel.querySelector("#gh-token"), msg = panel.querySelector("#gh-msg");

  function showConnected() { msg.textContent = token() ? "Hay un token guardado en este dispositivo." : "Todavía no hay token: el progreso se guarda solo acá."; }
  btn.addEventListener("click", () => {
    const open = panel.hidden;
    panel.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
    if (open) { showConnected(); input.focus(); }
  });

  panel.querySelector("#gh-save").addEventListener("click", async () => {
    const tok = input.value.trim();
    if (!tok) { msg.textContent = "Pegá el token primero."; return; }
    msg.textContent = "Probando el token…";
    try {
      const res = await api(tok, "/gists?per_page=1");
      const scopes = (res.headers.get("X-OAuth-Scopes") || "").split(",").map(s => s.trim());
      if (scopes.indexOf("gist") < 0) {
        msg.textContent = "Ese token no tiene el permiso gist. Creá uno classic con el permiso gist marcado.";
        return;
      }
    } catch (e) {
      msg.textContent = e.status === 401 || e.status === 403
        ? "GitHub rechazó el token: revisá que esté bien copiado y que no haya vencido."
        : "No hay conexión con GitHub. Probá de nuevo cuando tengas internet.";
      return;
    }
    if (tok !== token()) put(GIST, null);
    put(TOKEN, tok);
    input.value = "";
    msg.textContent = "Listo, conectado. Sincronizando…";
    await sync();
    msg.textContent = "Listo: " + syncEl.textContent + ".";
  });

  panel.querySelector("#gh-off").addEventListener("click", () => {
    clearTimeout(timer);
    put(TOKEN, null);
    put(GIST, null);
    input.value = "";
    idleLabel();
    msg.textContent = "Desconectado. El progreso sigue guardado en este dispositivo; el gist queda en tu cuenta.";
  });

  idleLabel();
  if (token()) setTimeout(sync, 0);
})();
