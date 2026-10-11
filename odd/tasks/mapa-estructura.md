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

- [ ] T1 Shorter milestone: level 10 keeps MIT 6.102 classes 01–09 applied in Python (60 h); the full course (classes 10–19 + problem sets, 90 h) moves to Etapa 3. Recompute "Tiempo estimado" and every cumulative figure (milestone 1180 → 1090 h).
- [ ] T2 Consistency: Django/FastAPI note aligned with the portfolio; post-milestone content framed as a menu, not a mandatory degree; table of contents at the top of the README.
- [ ] T3 Level folders: `niveles/nivel-NN-<slug>/` for levels 0–14 with `teoria/`, `ejercicios/`, `proyecto/` and a README per level (goal, sources, exercises, done-when checklist, link back). Level 0 gets a step-by-step start guide.
- [ ] T4 Wiring: README "Estructura de carpetas" and TRACKER link to the real folders.

## Acceptance criteria

- Every folder the README mentions exists; every relative link resolves.
- Hours add up in every table and in TRACKER.
- New/changed URLs return 200.

## Checks

- Passive documentation: no runnable RED/GREEN test; structural readback, relative-link check, hours arithmetic, URL check.

## Progress

Created. Next: T1.
