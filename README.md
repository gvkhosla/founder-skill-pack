# Founder Skills OS

**Founder Skills is evolving from a 27-skill founder pack into an agent-agnostic company operating system for coding agents.**

Site: **https://fskills.xyz**

Today this repo has two layers:

- **Legacy pack:** 27 published founder skills for pi, Claude, and Codex
- **Founder Skills OS beta:** a TypeScript rebuild with canonical source, sequences, host adapters, generated outputs, and install/export flows for coding hosts

## Founder Skills OS beta

Current coding-host scope:

- **6 coding hosts:** pi, Claude Code, Codex, OpenCode, OpenClaw, Hermes
- **17 canonical skills** in the new source-driven system
- **3 canonical sequences:** `validate-to-build`, `build-to-release`, `weekly-operating-rhythm`
- **coding-host-first install/export flows** that move generated bundles into real host locations

### OS quickstart

```bash
npm install
npm run os:doctor
npm run os:gen

npm run os:install -- --host pi
npm run os:install -- --host claude-code --scope project
npm run os:install -- --host codex
npm run os:install -- --host opencode
npm run os:install -- --host openclaw
npm run os:install -- --host hermes
```

Useful docs:

- [Founder Skills OS install/export flows](docs/founder-skills-os-install-export-flows.md)
- [Founder Skills OS repo architecture](docs/founder-skills-os-repo-architecture.md)
- [Founder Skills OS host adapter contract](docs/founder-skills-os-host-adapter-contract.md)
- [Founder Skills OS coding-host priority](docs/founder-skills-os-coding-host-priority.md)

---

## Legacy skill pack

The original 27-skill pack remains in the repo and published package.
Every skill produces a concrete `.md` artifact — not option lists, not framework overviews. Opinionated decisions, worked examples, and a clear next step.

## The Journey

The skills map to seven phases of building a product:

```
Strategy → Design → Build → Launch → Compound → PMF → Scale
```

You don't need all 27. Start where you are.

---

## Skills

### Strategy — Validate before you build

| Skill | What it produces | Invoke with |
|-------|-----------------|-------------|
| `mvp-scoper` | `mvp-brief.md` — scoped MVP with 3 must-have features | "Scope my MVP" |
| `problem-validator` | `problem-validation-report.md` — evidence the problem is real | "Validate my problem" |
| `customer-hypothesis` | `customer-profile.md` — specific customer portrait | "Define my customer" |
| `assumption-mapper` | `assumptions-map.md` — ranked risky bets with cheap tests | "Map my assumptions" |
| `user-interview-guide` | `research-report.md` — validated insights from 5 user interviews | "Run user interviews" |
| `competitor-mapper` | `competitor-map.md` — competitive landscape + positioning gap | "Map my competition" |

### Design — UX before UI

| Skill | What it produces | Invoke with |
|-------|-----------------|-------------|
| `ux-flow-designer` | `user-flows.md` — 3 core flows mapped step by step | "Design my user flows" |
| `design-direction-setter` | `design-brief.md` — visual vocabulary and moodboard brief | "Set my design direction" |
| `ux-heuristics-reviewer` | `ux-review.md` — 10 heuristics scored with fixes | "Review my UX" |

### Build — Decisions, not debates

| Skill | What it produces | Invoke with |
|-------|-----------------|-------------|
| `stack-selector` | `stack-decision.md` — specific tech stack with rationale | "Pick my stack" |
| `feature-sequencer` | `build-sequence.md` — ordered build sequence | "Sequence my features" |
| `integration-picker` | `integrations-plan.md` — specific tools per job-to-be-done | "Pick my integrations" |
| `architecture-explainer` | `architecture-overview.md` — system explained in plain English | "Explain my architecture" |

### Launch — Ship with confidence

| Skill | What it produces | Invoke with |
|-------|-----------------|-------------|
| `positioning-writer` | `positioning.md` — one-liner, elevator pitch, tagline | "Write my positioning" |
| `landing-page-copywriter` | `landing-page-copy.md` — full landing page copy | "Write my landing page" |
| `launch-plan-builder` | `launch-plan.md` — week-by-week plan across 3 channels | "Build my launch plan" |
| `pricing-model-framer` | `pricing-model.md` — pricing model with rationale | "Frame my pricing" |

### Compound — The recurring ritual

| Skill | What it produces | Invoke with |
|-------|-----------------|-------------|
| `build-cycle` | `cycles/YYYY-MM-DD.md` — cycle record with MPP + PMF signal | "Start a build cycle" |
| `mpp-evaluator` | `mpp-scorecard.md` — Minimum Proud Product score across 5 criteria | "Evaluate my MPP" |
| `failure-navigator` | `diagnosis.md` — root cause of stagnation + pivot prescription | "Help me through a failure" |

### PMF — Find and amplify what's working

| Skill | What it produces | Invoke with |
|-------|-----------------|-------------|
| `pmf-signal-reader` | `pmf-assessment.md` — signal strength across retention/WoM/engagement/revenue | "Read my PMF signals" |
| `north-star-definer` | `north-star.md` — the one metric to obsess over | "Define my north star" |
| `retention-loop-designer` | `retention-loop.md` — complete Hook Canvas design | "Design my retention loop" |
| `growth-loop-builder` | `growth-loop.md` — self-reinforcing growth mechanism | "Build my growth loop" |
| `churn-diagnostician` | `churn-diagnosis.md` — root cause + specific experiment | "Diagnose my churn" |

### Partner — Your co-founder in a skill

| Skill | What it produces | Invoke with |
|-------|-----------------|-------------|
| `founder-partner` | Updated `founder-context.md` + direction for the session | "Partner" or "Check in with my partner" |

### Scale — Your first hires (human and AI)

| Skill | What it produces | Invoke with |
|-------|-----------------|-------------|
| `first-hire-brief` | `human-hire-brief.md` or `agent-hire-brief.md` — who or what to hire first | "Help me make my first hire" |

---

## Founder Skills OS install and export

Generate the latest coding-host bundles, then install them into the harness you want:

```bash
npm run os:gen
npm run os:install -- --host pi
npm run os:install -- --host claude-code --scope project
npm run os:install -- --host codex
npm run os:install -- --host opencode
npm run os:install -- --host openclaw
npm run os:install -- --host hermes
```

Default export targets:

- `pi` → `~/.pi/agent/skills/founder-skills-os/`
- `Claude Code` → `.claude/skills/founder-skills-os/` or `~/.claude/skills/founder-skills-os/`
- `Codex` → `.codex/founder-skills-os/` + managed `AGENTS.md` section
- `OpenCode` → `.opencode/founder-skills-os/` + managed `AGENTS.md` section
- `OpenClaw` → `.openclaw/founder-skills-os/` + managed `AGENTS.md` section
- `Hermes` → `~/.hermes/skills/founder-skills-os/`

See [docs/founder-skills-os-install-export-flows.md](docs/founder-skills-os-install-export-flows.md) for the full matrix.

## Legacy pack install

**No clone required (recommended):**

```bash
# Install all skills for pi
npx founder-skills install --agent pi

# Install all skills for Claude globally
npx founder-skills install --agent claude

# Install Claude skills in current project only
npx founder-skills install --agent claude --scope project

# Generate Codex AGENTS file in current directory
npx founder-skills install --agent codex --out ./AGENTS.founder-skills.md
```

**Install a single phase:**

```bash
npx founder-skills install --agent pi --phase strategy
npx founder-skills install --agent claude --phase pmf
```

**Optional: clone + bash installer (legacy path):**

```bash
git clone https://github.com/gvkhosla/founder-skills.git
cd founder-skills
bash scripts/install.sh pi
```

---

## How Skills Work

Every skill is a `SKILL.md` file. Each file contains:

1. **What you'll get** — the exact output artifact
2. **How it works** — step-by-step process the agent follows
3. **Parallel execution** (where applicable) — independent workstreams run simultaneously
4. **Worked example** — a real scenario showing inputs and outputs
5. **Related skills** — what to use before and after

Skills are self-contained. No internet required. No API keys. No setup beyond installing the files.

---

## Multi-Agent

Skills with independent workstreams spawn parallel subagents. pi and Claude execute this natively. Codex runs the same steps sequentially (every parallelized skill includes a Sequential Fallback section).

**Skills with parallel execution:**
- `assumption-mapper` — N agents, one per assumption
- `mpp-evaluator` — 5 agents, one per MPP criterion
- `failure-navigator` — 5 agents, one per failure hypothesis
- `build-cycle` (Phase 3) — 3 agents for scoring and pattern reading
- `launch-plan-builder` — 3 agents for Owned/Rented/Borrowed channels
- `pmf-signal-reader` — 4 agents for retention/WoM/engagement/revenue
- `north-star-definer` — N agents, one per candidate metric
- `retention-loop-designer` — 4 agents for Trigger/Action/Reward/Investment
- `growth-loop-builder` — 4 agents for viral/content/product/sales loops
- `churn-diagnostician` — 3 agents for timing/behavior/feedback

---

## The `founder-context.md` Convention

The `founder-partner` skill keeps a persistent memory of your product's story in `founder-context.md` at your project root.

Every skill that benefits from context will read this file if it exists. Create yours from the template:

```bash
cp skills/partner/founder-partner/context-template.md [your-project-root]/founder-context.md
```

Then run a `founder-partner` session to fill it in.

---

## Philosophy

**Opinionated, not comprehensive.** Every skill makes a recommendation — not a menu of options. You can disagree. But you'll have to think to disagree.

**Artifacts, not advice.** Every skill produces a `.md` file. You can read it, share it, argue with it, update it, and use it with the next skill.

**The MPP, not the MVP.** Minimum Proud Product: the version you'd show without apologizing. The bar is pride, not mere functionality.

**Compounding, not linear.** The Compound phase is a recurring ritual, not a one-time step. Each cycle builds on the last. The journal of cycle records is the product's memory.

**The partner over tools.** The `founder-partner` skill is the most important skill in the pack. Not because it does the most, but because it holds the context across all the others.

Full philosophy: [docs/PHILOSOPHY.md](docs/PHILOSOPHY.md)

---

## Documentation

- [PHILOSOPHY.md](docs/PHILOSOPHY.md) — The principles behind every decision
- [AUTHORING.md](docs/AUTHORING.md) — How to write a skill for this pack
- [COMPATIBILITY.md](docs/COMPATIBILITY.md) — Agent-specific install and behavior details
- [MULTI-AGENT.md](docs/MULTI-AGENT.md) — How parallel execution works per agent
- [founder-skills-os-install-export-flows.md](docs/founder-skills-os-install-export-flows.md) — Coding-host install/export commands and target paths
- [founder-skills-os-repo-architecture.md](docs/founder-skills-os-repo-architecture.md) — The new OS repo shape and architecture
- [founder-skills-os-host-adapter-contract.md](docs/founder-skills-os-host-adapter-contract.md) — Host-neutral core, host-specific delivery contract

---

## Contributing

Read [docs/AUTHORING.md](docs/AUTHORING.md) first. Every skill must follow the 7 laws and the canonical template. Skills that produce option lists instead of recommendations won't be accepted. Skills that don't produce a concrete artifact won't be accepted.

Run validation before opening a PR:

```bash
npm run check
```

Open an issue before writing a new skill — check the existing ones for overlap first.

---

## License

MIT — use freely, commercially included. Attribution appreciated, not required.
