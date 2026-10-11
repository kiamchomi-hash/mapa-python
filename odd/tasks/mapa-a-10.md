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

- [x] T1 Sequencing: job-ready level 14 depends only on stages 1–2 + Web specialization; CS61A moved early; Git moved to level 0; CS50W duplication removed.
- [x] T2 Time estimates: hours per level/block/track, total, and calendar at 10 h and 20 h per week.
- [x] T3 Exercises: an exercise/problem-set source for every level (fixes levels 8, 11, 12).
- [x] T4 Content gaps: data structures, type checker (mypy/pyright), modern tooling (pyproject.toml, ruff, uv), interview prep.
- [x] T5 Consistency: intro matches the full content and the real source policy; tracker and license table updated. Commit 9a0f0df.
- T2 done (route: delegated). New "Tiempo estimado" section with method, cumulative table and calendar at 10 h and 20 h per week; hours column in every table and per-section subtotals; hours in TRACKER items. Junior-job milestone: 1110 h (2.1 years at 10 h/week, 13 months at 20 h/week). Total: 6225 h (12 years at 10 h/week, 6 years at 20 h/week). Commit deae8a9.
- T5 done (route: delegated). Intro rewritten to describe the real structure (junior milestone, C/Rust track, AI path) and an honest source policy listing every exception (paid books, Coursera course, cloud-vendor material, paid certifications, British Council, Exercism); license table synced. Commit hash recorded in the final report (this commit).

## Verification evidence

- Link check over README URLs: 146 of 152 return 200; the 6 others are pre-existing links blocked to bots or unreachable from this host (docs.ansible.com 429, stat110.hsites.harvard.edu 403, learnenglish.britishcouncil.org and man7.org timeouts); all new or changed URLs return 200.
- Structural readback: every README content section has a TRACKER section; all 14 tables with an exercise column have a non-empty exercise cell in every row; CS50W appears once in TRACKER.

## Acceptance criteria

- Every audit finding has a concrete fix in README/TRACKER.
- All links respond; no broken anchors between README and TRACKER.
- TRACKER mirrors the README structure one to one, with no duplicates.

## Checks

- Structural readback of both files.
- Link check over all URLs (curl, parallel).
- Passive documentation: no runnable RED/GREEN test applies.

## Progress

- Branch created.
- T1 done (route: delegated, writer trigger: 2 non-trivial files). Sections reordered to follow the recommended order; Web specialization moved before level 14; level 14 decoupled from stage 3, math and AI; CS61A as parallel CS complement for levels 3–7; Git basics in level 0 (Missing Semester 2026), Git in depth in level 9 (Pro Git); CS50W kept in one place; math, systems and C tracks start at stage 3. Commit c2e8924.
- T3 + T4 done together (route: delegated; combined because the new topics and their exercise sources land in the same table rows). Exercise column added to every level/block/track table; data structures in level 6; pyproject.toml, uv and ruff in levels 8–9; mypy/Pyright in level 12; interview prep (Stanford CS9 + MIT 6.006 problem sets) in level 14; license table updated. Commit 9a0f0df.
- T2 done (route: delegated). New "Tiempo estimado" section with method, cumulative table and calendar at 10 h and 20 h per week; hours column in every table and per-section subtotals; hours in TRACKER items. Junior-job milestone: 1110 h (2.1 years at 10 h/week, 13 months at 20 h/week). Total: 6225 h (12 years at 10 h/week, 6 years at 20 h/week). Commit deae8a9.
- T5 done (route: delegated). Intro rewritten to describe the real structure (junior milestone, C/Rust track, AI path) and an honest source policy listing every exception (paid books, Coursera course, cloud-vendor material, paid certifications, British Council, Exercism); license table synced. Commit hash recorded in the final report (this commit).

## Verification evidence

- Link check over README URLs: 146 of 152 return 200; the 6 others are pre-existing links blocked to bots or unreachable from this host (docs.ansible.com 429, stat110.hsites.harvard.edu 403, learnenglish.britishcouncil.org and man7.org timeouts); all new or changed URLs return 200.
- Structural readback: every README content section has a TRACKER section; all 14 tables with an exercise column have a non-empty exercise cell in every row; CS50W appears once in TRACKER.
