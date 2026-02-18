---
name: build-cycle
description: The recurring founder ritual — run after every meaningful ship or weekly, whichever comes first. Guides you through honest reflection, user signal synthesis, MPP/PMF assessment, and one clear decision for the next cycle. Produces a dated cycle record that compounds over time. Use whenever you've shipped something and want to figure out what it taught you and what to do next.
phase: compound
version: 1.0.0
---

# Build Cycle

The ritual you run again and again — all the way to PMF and beyond.

## What This Is

Not a tool you pick up once. A rhythm.

Engineers document every solved problem so the next occurrence takes minutes, not hours. That's `/compound`. The Build Cycle is the founder equivalent: after every meaningful ship, you run this ritual. It asks the honest questions, synthesizes what you learned, and produces one record that compounds over time.

After 10 cycles, you have a complete record of your product's evolution — what you tried, what you learned, how you navigated each failure point, and exactly how you got to where you are.

**Cadence:** Run after each meaningful ship. Or weekly if you ship continuously. Never less than once a week. Never more than once a day — daily cycles are too granular to surface real signal.

## Quick Start

Say: **"Run build cycle"** or **"Let's do our cycle"** or **"What did we learn?"**

This takes 20–30 minutes. Do it with intention — not rushed. Total time invested compounds.

**What gets produced:**
- `cycles/YYYY-MM-DD.md` — the permanent cycle record
- Updated `founder-context.md` — your source of truth

## How It Opens

Before asking you anything, the skill reads two things:

1. **`founder-context.md`** — your product's current state, north star, stage
2. **The most recent `cycles/` document** — what happened last cycle, what you decided

If neither exists, the skill runs a one-time **First Cycle Setup** (see below).

After reading both, the skill opens with a single orienting statement — not a question:

> "Last cycle you decided to [X]. Before we reflect on how that went, I want to name one thing I noticed from your context: [observation]. Let's start there."

This is borrowed from the best therapy and coaching: name what you see before asking what they feel.

---

## The Six Phases

Run in order. Don't skip phases even when you're in a hurry — the order matters.

---

### Phase 1 — The Honest Open

**One question:** "What actually happened since last cycle — not what you hoped would happen, but what actually happened?"

This is not a status update. The agent is listening for:
- The gap between what was planned and what shipped
- What got avoided or deprioritized
- Tone: are you energized, exhausted, confused, or numb?

After you answer, the agent reflects back what it heard — including the things you said but might have glossed over. This is the "document-review" move: surface what's being minimized.

> **The uncomfortable question for this phase:** "What are you not saying?"

---

### Phase 2 — What Users Actually Did

**One question:** "What did your users do — not what you hoped they'd do, not what they said they'd do, but what they actually did?"

This phase separates signal from noise by distinguishing:

| Signal Type | Weight |
|------------|--------|
| **Behavior** (what they did without being asked) | High |
| **Unprompted feedback** (what they said without being asked) | High |
| **Prompted feedback** (what they said when you asked) | Medium |
| **What you want to believe** | Zero |

The agent asks follow-up questions here — one at a time, never more than three:
- "Did any users do something you didn't expect?"
- "Did any users NOT do something you expected?"
- "Has anyone told someone else about this without you asking them to?"

> **The uncomfortable question:** "Is there user behavior you've been avoiding looking at?"

---

### Phase 3 — The Honest Assessment

The agent runs two scored assessments and shares them, without softening:

**MPP Score (1–10):** How close are you to a product you're genuinely proud of?
See [mpp-criteria.md](../mpp-evaluator/mpp-criteria.md) for scoring guide.

**PMF Signal Strength (None / Faint / Building / Clear):**
- **None:** Users use it once and don't return. No one has told anyone else.
- **Faint:** Some users return. 1–2 unprompted mentions.
- **Building:** A core group returns consistently. Word of mouth starting.
- **Clear:** Users would be visibly upset if this disappeared. Usage grows without effort.

The agent names the score, explains why, and does NOT soften the assessment. If the score is 3/10, it says 3/10.

Then: **"What's the most honest reason we're at this score?"**

This is not rhetorical. It's the most important question in the cycle. Take time here.

> **The uncomfortable question:** "If this score doesn't improve next cycle, what does that mean?"

---

### Phase 4 — The Pattern Read

The agent reads across your last 3 cycles (or fewer if you haven't run 3 yet) and identifies patterns:

- **Momentum pattern:** Is the MPP score trending up, flat, or down?
- **Effort pattern:** Is there a type of work you keep doing that isn't producing signal?
- **Avoidance pattern:** Is there a conversation or experiment you've mentioned but never done?
- **User pattern:** Is there a user type showing stronger signal than others?

This is where compounding happens. A single cycle is anecdotal. Three cycles is a pattern. The agent names patterns — including uncomfortable ones.

> **If 3+ consecutive cycles show flat or declining signal**, the agent does not continue to Phase 5. Instead: "I need to flag something. We've had [N] cycles without improving signal. That's not a reason to panic, but it is a reason to diagnose before deciding. I want to run the Failure Navigator before we choose what to do next."

See [failure-modes.md](failure-modes.md) for what happens then.

---

### Phase 5 — One Decision

Not a list. One thing.

The agent synthesizes everything from Phases 1–4 and proposes a single decision for the next cycle. The format is always:

> "The most important thing you can do in the next [cycle period] is [specific action], because [reason grounded in the cycle's findings]. You'll know it worked if [specific observable signal]."

Then the agent asks: "Does this feel right — or is there something the data is pointing to that I'm missing?"

This is the co-founder moment. Not just presenting the analysis — checking it against your instinct, which sometimes sees things data doesn't.

The one decision becomes the `commitment` field in the cycle record.

---

### Phase 6 — The Record

The agent writes two things:

**1. `cycles/YYYY-MM-DD.md`** — the permanent record

Following the template in [cycle-template.md](cycle-template.md). This document is never edited after the cycle closes — it's a permanent record, like a ship's log. Future cycles can reference it, but not change it.

**2. Updated `founder-context.md`**

The source of truth is updated:
- Stage (has it changed?)
- North star metric and current value
- MPP score
- PMF signal strength
- Current focus (the one decision from Phase 5)
- Last cycle date and key learning

---

## First Cycle Setup

If no `founder-context.md` or `cycles/` exists, the agent runs a one-time setup:

It asks 6 questions — one at a time:
1. "What are you building, in one sentence?"
2. "Who specifically is your first customer — describe their situation, not their demographics."
3. "What stage are you at? (Pre-launch / Just launched / Have users / Revenue)"
4. "What's the one metric you're tracking right now?"
5. "What's the biggest thing you're unsure about?"
6. "What did you try most recently, and what happened?"

This creates `founder-context.md` and `cycles/[today].md` (the first cycle). Setup takes 10 minutes.

---

## The Cycle Record

Each cycle produces one document. The document structure is in [cycle-template.md](cycle-template.md).

The `cycles/` directory becomes your product's memory:

```
cycles/
├── 2026-02-01.md    # First ship — the baseline
├── 2026-02-08.md    # First users
├── 2026-02-15.md    # First feedback
├── 2026-02-22.md    # First sign something is working
└── ...              # The full story, in your own words
```

After 10 cycles, you'll have something most founders don't: a clear record of why you made every significant decision, what you learned from it, and how the product evolved. This is not just useful for you — it's the clearest possible input for a fundraising narrative, a co-founder conversation, or a moment of doubt where you need to remember why you started.

---

## What the Build Cycle Is Not

- **Not a retrospective format** borrowed from engineering sprints. Those are team-coordination tools. This is a founder-learning tool.
- **Not cheerleading.** If your signal is weak, the cycle says so. Honest over kind.
- **Not a feature planning session.** Features happen after the cycle. The cycle decides what problem to solve — not how to solve it.
- **Not skippable when things are going well.** The best cycles happen when things feel good. They find the fragility before it becomes a crisis.

---

## Related Skills

- Use **mpp-evaluator** for a deep-dive MPP scoring session between cycles
- Use **failure-navigator** when build-cycle detects stagnation (3+ flat cycles)
- Use **founder-partner** (Partner phase) for the broader PMF journey and beyond
- Use **pmf-signal-reader** (PMF phase) when build-cycle shows "Building" PMF signal and you want to understand it deeply
