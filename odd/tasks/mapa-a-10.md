# Feature: mapa-a-10

## Objective

Raise the Python roadmap (README.md + TRACKER.md) from the audited 7/10 to 10/10 by fixing every audit finding.

## Problem

The 2026-10-11 audit scored the map 7/10: excellent sources, but weak sequencing (4 → fix), no time estimates (realism 4), missing exercise sources (practice 6), content gaps, and internal inconsistencies.

## Scope and constraints

- Files: `README.md`, `TRACKER.md` only. Content stays in neutral Spanish (the existing project language).
- Keep the source policy: universities, foundations, standards bodies, official docs of each technology. Any exception must be labeled honestly.
- Every new link must be verified to respond (HTTP 200, or documented anti-bot block).
- Branch: `docs/mapa-a-10`. Work-unit commits per task, Conventional Commits, no AI attribution. No push.
- Route: delegated direct (writer trigger: 2 non-trivial files).

## Tasks

- [x] T1 Sequencing: job-ready level 14 depends only on stages 1–2 + Web specialization; CS61A moved early; Git moved to level 0; CS50W duplication removed. Commit c2e8924.
- [x] T2 Time estimates: hours per level/block/track, total, and calendar at 10 h and 20 h per week. Commit deae8a9.
- [x] T3 Exercises: an exercise/problem-set source for every level (fixes levels 8, 11, 12). Commit 9a0f0df.
- [x] T4 Content gaps: data structures, type checker (mypy/pyright), modern tooling (pyproject.toml, ruff, uv), interview prep. Commit 9a0f0df (combined with T3: same table rows).
- [x] T5 Consistency: intro matches the full content and the real source policy; tracker and license table updated. Commit d9a4691.

## Acceptance criteria

- Every audit finding has a concrete fix in README/TRACKER.
- All links respond; no broken anchors between README and TRACKER.
- TRACKER mirrors the README structure one to one, with no duplicates.

## Checks

- Structural readback of both files.
- Link check over all URLs (curl, parallel).
- Passive documentation: no runnable RED/GREEN test applies.

## Progress

All tasks done (route: delegated, writer trigger: 2 non-trivial files).

- T1: sections reordered to follow "Orden recomendado"; Web specialization moved before level 14; CS61A as parallel complement for levels 3–7; Git basics in level 0, Git in depth in level 9 (Pro Git); math, systems and C tracks start at stage 3.
- T2: "Tiempo estimado" section. Junior-job milestone ~1110 h (2.1 years at 10 h/week, 13 months at 20 h/week). Full map ~6225 h.
- T3 + T4: exercise column in every table; data structures (level 6); pyproject.toml, uv, ruff (levels 8–9); mypy/Pyright (level 12); interview prep with Stanford CS9 + MIT 6.006 (level 14).
- T5: intro describes the real structure and lists every source-policy exception; license table synced.

## Verification evidence

- Link check: 146 of 152 README URLs return 200; the other 6 are pre-existing links blocked to bots or unreachable from this host (docs.ansible.com 429, stat110.hsites.harvard.edu 403, learnenglish.britishcouncil.org and man7.org timeouts, two that returned 200 on retry). All new or changed URLs return 200.
- Structural readback: every README content section has a TRACKER section; every exercise cell is filled; CS50W appears once per file.
- Parent spot check: `git log main..HEAD` shows 4 commits with no AI attribution; working tree clean; README section order matches "Orden recomendado".

## Next step

User decides whether to merge `docs/mapa-a-10` into `main` and push.
