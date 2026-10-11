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

- [x] T1 `plan-ia/README.md`: how to study with AI, phases with tables (topics, source, exercises, hours), time estimate and employment milestone, post-milestone menu, sources and licenses. Commit `6294f29`. Route: delegated (writer).
- [x] T2 `plan-ia/TRACKER.md` mirroring the phases one to one. Commit `c960d6d`.
- [x] T3 `plan-ia/fases/` folders (teoria/ejercicios/proyecto + README each), first phase with a start guide reusing the main map's level 0. Commit `c5eab12`.
- [x] T4 Link from the main `README.md` to `plan-ia/` (one line, nothing else touched). Commit `3fd1f17`.

## Acceptance criteria

- Every relative link resolves; hours add up; every URL verified.

## Checks

- Passive documentation: structural readback, relative-link check, hours arithmetic, URL check.

## Progress

All four tasks done on branch `docs/plan-ia` (T1 `6294f29`, T2 `c960d6d`, T3 `c5eab12`, T4 `3fd1f17`).

Phases and hours: F1 Fundamentos de Python 100, F2 Programador práctico 160, F3 Datos y ML esencial 90, F4 Cómo funcionan los LLMs 75, F5 AI Engineering 240, F6 Portfolio y empleo 160. Employment milestone: 825 h (83 weeks at 10 h/week, 42 weeks at 20 h/week), inside the 700–850 h target.

Decisions:
- Anthropic docs live at `platform.claude.com/docs` (docs.claude.com redirects there); OpenAI docs at `developers.openai.com/api/docs` (platform.openai.com/docs redirects there).
- MCP linked to the dated 2026-07-28 specification and docs (newest dated version; `specification/latest` redirects to it).
- OpenTelemetry GenAI semantic conventions moved from opentelemetry.io to the `open-telemetry/semantic-conventions-genai` repository; linked the repository.
- Berkeley option: Agentic AI MOOC Fall 2025 (newest edition found; no 2026 edition announced), plus LLM Agents MOOC Fall 2024; optional, outside the total.
- Math source: Mathematics for Machine Learning (Cambridge University Press, free PDF), chapters 2, 3 and 6, first sections only.
- Stanford CS224N Winter 2026 used for slides/notes only (2026 videos are enrolled-only; Spring 2024 videos are public).
- Company materials labeled in the text: Google ML Crash Course, Anthropic Academy courses and engineering posts, Hugging Face courses and blog.
- Dropped: fast.ai Practical Deep Learning (latest published edition 2022), Stanford CS324 (latest public edition Winter 2022), Berkeley Data 100 (too heavy; stays in the main map), `scikit-learn.org/stable/tutorial/index.html` (404; used Getting Started + user guide pages instead).
- Commit messages use the `docs(plan-ia)` scope for all four tasks.

## Verification evidence

- Relative links and anchors (`check_links_ia.py`, GitHub slug algorithm, over `README.md` and `plan-ia/**/*.md`): `files=10 relative_links=122 broken=0`. Existing main-map checker: `files=18 relative_links=155 broken=0`.
- Hours (`check_hours_ia.py`): each phase table sums to its declared total (100, 160, 90, 75, 240, 160); Tiempo estimado cumulative 100/260/350/425/665/825 and week columns (ceil of hours/10 and hours/20) correct; TRACKER items per phase match. Result: `ALL OK`.
- URLs: 96 unique URLs in `plan-ia/`, `curl -L --max-time 15`: 95 return 200, 1 returns 403 (`learnenglish.britishcouncil.org`, bot block; loads normally through a browser-like fetch, same as in the main map).
- `platform.claude.com/docs` answers 200 for missing pages (soft 404), so every Anthropic docs and Academy URL was also checked by page title: all 16 match the intended page.
- The main map's pre-existing `check_hours.py` reports `FAIL` on the C y Rust section both before and after this feature (the script does not add the 40 h project row); unrelated to `plan-ia`.
- `git status --short`: clean except the pre-existing untracked `.atl/`.

Next step: user decides merge into main and push.
