# Founder Skill Pack

A curated collection of agent skills for non-technical founders who want to build world-class products.

Works with **pi**, **Claude Code**, **Codex**, and **OpenCode**.

---

## The Problem

Coding agents are extraordinary at generating code. They're mediocre at answering the questions that actually determine whether a product succeeds:

- What should I build first?
- Who is this really for?
- How do I know if users actually want this?
- Have I built something people genuinely love — or just something that works?

These are product questions, not code questions. This skill pack answers them.

---

## The Journey

```
Strategy → Design → Build → Launch → Compound → PMF & Beyond
```

**27 skills** across 6 phases. The first four phases help you build and ship. The last two are what separate founders who build something users love from those who build something users tolerate.

Read [docs/PHILOSOPHY.md](docs/PHILOSOPHY.md) to understand the MPP concept, the Compounding Loop, and what a True Partner means.

---

## Install a Skill

### pi

```bash
mkdir -p ~/.pi/agent/skills/mvp-scoper
curl -fsSL https://raw.githubusercontent.com/[org]/founder-skill-pack/main/skills/strategy/mvp-scoper/SKILL.md \
  -o ~/.pi/agent/skills/mvp-scoper/SKILL.md
```

### Claude Code

```bash
mkdir -p .claude/skills/mvp-scoper
curl -fsSL https://raw.githubusercontent.com/[org]/founder-skill-pack/main/skills/strategy/mvp-scoper/SKILL.md \
  -o .claude/skills/mvp-scoper/SKILL.md
```

### Manual (any agent)

Copy the contents of any `SKILL.md` file and paste it into your agent's context or system prompt.

---

## The Skills

### Phase 1 — Strategy & Validation

| Skill | What It Does |
|-------|-------------|
| `mvp-scoper` | Defines exactly what to build first — and what NOT to build |
| `problem-validator` | Stress-tests whether the problem is real and worth solving |
| `customer-hypothesis` | Builds a sharp, specific customer profile you can build for |
| `assumption-mapper` | Maps your key assumptions to how you'll validate them |

### Phase 2 — Design & UX

| Skill | What It Does |
|-------|-------------|
| `ux-flow-designer` | Maps user journeys and identifies the key screens to build |
| `design-direction-setter` | Establishes visual tone, typography, and color direction |
| `ux-heuristics-reviewer` | Reviews your existing UI against proven UX principles |

### Phase 3 — Build

| Skill | What It Does |
|-------|-------------|
| `stack-selector` | Recommends the right tech stack for your product type |
| `feature-sequencer` | Prioritizes what to build in what order |
| `integration-picker` | Recommends auth, payments, storage, and email providers |
| `architecture-explainer` | Explains architecture decisions in plain English |

### Phase 4 — Launch & GTM

| Skill | What It Does |
|-------|-------------|
| `positioning-writer` | Crafts your positioning, tagline, and messaging hierarchy |
| `landing-page-copywriter` | Writes headline-to-CTA landing page copy |
| `launch-plan-builder` | Creates a phased, week-by-week launch plan |
| `pricing-model-framer` | Defines your pricing model and tiers |

### Phase 5 — The Compounding Stage ✦

The skills that close the gap between MVP and MPP.

| Skill | What It Does |
|-------|-------------|
| `cycle-reflector` | Structured post-ship retrospective — surfaces what you're avoiding |
| `feedback-gatherer` | Guides exactly how to get real feedback (not polite feedback) |
| `signal-synthesizer` | Separates signal from noise in raw user feedback |
| `mpp-evaluator` | Honest assessment of whether you've crossed the MPP threshold |
| `iteration-prioritizer` | Picks the ONE highest-leverage improvement for the next cycle |

### Phase 6 — PMF Partner ✦

| Skill | What It Does |
|-------|-------------|
| `pmf-signal-reader` | Teaches you to detect (and not fake) PMF signals |
| `north-star-definer` | Identifies the ONE metric that best reflects whether you're winning |
| `retention-loop-designer` | Builds habit-forming mechanisms that bring users back |
| `growth-loop-builder` | Designs self-reinforcing growth loops |
| `churn-diagnostician` | Investigates why users leave and what to do about it |

### The True Partner ✦

| Skill | What It Does |
|-------|-------------|
| `founder-partner` | Your co-founder in a skill — reads your product context, tells you what to focus on, asks the hard questions |

---

## The Founder Partner Setup

The `founder-partner` skill becomes genuinely useful when you give it context. Create a `founder-context.md` file in your project root:

```bash
curl -fsSL https://raw.githubusercontent.com/[org]/founder-skill-pack/main/skills/partner/founder-partner/context-template.md \
  -o founder-context.md
```

Fill it in. The partner skill reads it at the start of every session and gives you contextual, proactive guidance instead of generic advice.

---

## Contributing

Read [docs/AUTHORING.md](docs/AUTHORING.md) to learn how to write a skill. PRs welcome.

Skills must:
- Be opinionated (make recommendations, not option lists)
- Produce a concrete artifact (a file, not a conversation)
- Include a worked example
- Pass the authoring checklist in AUTHORING.md

---

## License

MIT. Use freely, contribute generously.
