// Run: node --test app/sync-core.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import SyncCore from "./sync-core.js";

const { mergeProgress, migrateV1, doneMap, sameProgress, normalize, nextLink } = SyncCore;
const st = (items) => ({ items });

test("the newer change wins", () => {
  const local = st({ "f1-1": { v: true, t: 200 } });
  const remote = st({ "f1-1": { v: false, t: 100 } });
  assert.deepEqual(mergeProgress(local, remote), local);
  assert.deepEqual(mergeProgress(remote, local), local);
});

test("an uncheck made after a check propagates", () => {
  const phone = st({ "n3-2": { v: true, t: 1000 } });
  const desktop = st({ "n3-2": { v: false, t: 2000 } });
  assert.deepEqual(mergeProgress(phone, desktop).items["n3-2"], { v: false, t: 2000 });
  assert.deepEqual(doneMap(mergeProgress(phone, desktop)), {});
});

test("on a tie, checked wins regardless of argument order", () => {
  const a = st({ x: { v: true, t: 5 } });
  const b = st({ x: { v: false, t: 5 } });
  assert.deepEqual(mergeProgress(a, b).items.x, { v: true, t: 5 });
  assert.deepEqual(mergeProgress(b, a).items.x, { v: true, t: 5 });
});

test("disjoint ids are unioned", () => {
  const merged = mergeProgress(st({ a: { v: true, t: 1 } }), st({ b: { v: false, t: 2 } }));
  assert.deepEqual(merged, st({ a: { v: true, t: 1 }, b: { v: false, t: 2 } }));
});

test("empty and missing inputs", () => {
  assert.deepEqual(mergeProgress(st({}), st({})), st({}));
  assert.deepEqual(mergeProgress(null, undefined), st({}));
  const only = st({ a: { v: true, t: 3 } });
  assert.deepEqual(mergeProgress(only, {}), only);
  assert.deepEqual(mergeProgress("garbage", only), only);
});

test("malformed entries are dropped", () => {
  const dirty = { items: { a: { v: "yes", t: 1 }, b: { v: true }, c: null, d: { v: false, t: 4 } } };
  assert.deepEqual(normalize(dirty), st({ d: { v: false, t: 4 } }));
});

test("migration from v1 keeps checked items with t = 0", () => {
  const v2 = migrateV1({ "f1-1": true, "f1-2": true, "f1-3": false });
  assert.deepEqual(v2, st({ "f1-1": { v: true, t: 0 }, "f1-2": { v: true, t: 0 } }));
  assert.deepEqual(doneMap(v2), { "f1-1": true, "f1-2": true });
  assert.deepEqual(migrateV1(null), st({}));
});

test("a migrated item loses to any real remote edit", () => {
  const merged = mergeProgress(migrateV1({ "f1-1": true }), st({ "f1-1": { v: false, t: 1 } }));
  assert.deepEqual(doneMap(merged), {});
});

test("sameProgress ignores key order", () => {
  const a = st({ a: { v: true, t: 1 }, b: { v: false, t: 2 } });
  const b = st({ b: { v: false, t: 2 }, a: { v: true, t: 1 } });
  assert.equal(sameProgress(a, b), true);
  assert.equal(sameProgress(a, st({ a: { v: true, t: 1 } })), false);
});

test("nextLink reads the next page from a Link header", () => {
  const h = '<https://api.github.com/gists?per_page=100&page=2>; rel="next", <https://api.github.com/gists?per_page=100&page=5>; rel="last"';
  assert.equal(nextLink(h), "https://api.github.com/gists?per_page=100&page=2");
  assert.equal(nextLink('<https://x/?page=1>; rel="prev"'), null);
  assert.equal(nextLink(null), null);
});
