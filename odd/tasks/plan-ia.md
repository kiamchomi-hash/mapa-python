# Feature: plan-ia

## Objective

Build a second, separate roadmap in `plan-ia/` for the AI Engineer profile (building products on top of existing models: LLM APIs, RAG, agents, MCP, evals, deployment), assuming the learner uses AI assistants while studying, so depth is cut where it does not serve that profile.

## Problem

The main map (`README.md`) aims at full Python mastery (6345 h, junior milestone at 1090 h) and treats AI as the last stage. The user chose AI Engineer and wants a shorter plan that leverages AI tools, without dropping the fundamentals needed to review AI-generated code.

## Scope and constraints

- New folder `plan-ia/` only (README, TRACKER, per-phase folders). The main map stays untouched except one link from the main README.
- Spanish, same voice as the main README. Same source policy (universities, foundations, standards bodies, official docs; exceptions labeled). Every URL verified (200 or documented bot block).
- Keep fundamentals (Python, testing, Git, SQL, HTTP/APIs); cut C/Rust, CPython internals, Kubernetes, heavy math, most cloud and distributed systems.
- Explicit rules for learning with AI (AI as tutor and reviewer, not autopilot).
- Branch `docs/plan-ia`; Conventional Commits; no AI attribution; no push.
- Route: delegated direct (writer + research trigger: multiple non-trivial new files and external source verification).

## Tasks

- [ ] T1 `plan-ia/README.md`: how to study with AI, phases with tables (topics, source, exercises, hours), time estimate and employment milestone, post-milestone menu, sources and licenses.
- [ ] T2 `plan-ia/TRACKER.md` mirroring the phases one to one.
- [ ] T3 `plan-ia/fases/` folders (teoria/ejercicios/proyecto + README each), first phase with a start guide reusing the main map's level 0.
- [ ] T4 Link from the main `README.md` to `plan-ia/`.

## Acceptance criteria

- Every relative link resolves; hours add up; every URL verified.

## Checks

- Passive documentation: structural readback, relative-link check, hours arithmetic, URL check.

## Progress

Created. Next: T1.
