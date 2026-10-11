// Pure progress-state helpers shared by the page and the node tests.
// State v2: {items: {id: {v: boolean, t: epochMs}}}. A checklist id is done
// when items[id].v is true; t is the time of the last change on any device.
var SyncCore = (function () {
  function isEntry(e) {
    return !!e && typeof e === "object" && typeof e.v === "boolean" && typeof e.t === "number" && isFinite(e.t);
  }

  // Keeps only well-formed entries, so bad remote JSON can never break the page.
  function normalize(state) {
    var out = { items: {} };
    var items = state && typeof state === "object" ? state.items : null;
    if (!items || typeof items !== "object") return out;
    Object.keys(items).sort().forEach(function (id) {
      if (isEntry(items[id])) out.items[id] = { v: items[id].v, t: items[id].t };
    });
    return out;
  }

  // v1 was {id: true}. Migrated entries get t = 0 so any real edit elsewhere wins.
  function migrateV1(v1) {
    var out = { items: {} };
    if (!v1 || typeof v1 !== "object") return out;
    Object.keys(v1).sort().forEach(function (id) {
      if (v1[id] === true) out.items[id] = { v: true, t: 0 };
    });
    return out;
  }

  // Per id the newer change wins; on a tie, checked wins.
  function mergeProgress(a, b) {
    var x = normalize(a).items, y = normalize(b).items, out = { items: {} };
    var ids = Object.keys(x).concat(Object.keys(y).filter(function (id) { return !(id in x); })).sort();
    ids.forEach(function (id) {
      var p = x[id], q = y[id], w;
      if (!p) w = q;
      else if (!q) w = p;
      else if (p.t !== q.t) w = p.t > q.t ? p : q;
      else w = p.v ? p : q;
      out.items[id] = { v: w.v, t: w.t };
    });
    return out;
  }

  function doneMap(state) {
    var items = normalize(state).items, done = {};
    Object.keys(items).forEach(function (id) { if (items[id].v) done[id] = true; });
    return done;
  }

  function sameProgress(a, b) {
    return JSON.stringify(normalize(a)) === JSON.stringify(normalize(b));
  }

  // Next page URL from a GitHub "Link" response header, or null.
  function nextLink(header) {
    var m = /<([^>]+)>;\s*rel="next"/.exec(header || "");
    return m ? m[1] : null;
  }

  return { normalize: normalize, migrateV1: migrateV1, mergeProgress: mergeProgress, doneMap: doneMap, sameProgress: sameProgress, nextLink: nextLink };
})();
if (typeof module !== "undefined" && module.exports) module.exports = SyncCore;
