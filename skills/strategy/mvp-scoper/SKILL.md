---
name: mvp-scoper
description: Defines exactly what's in and out of scope for your MVP. Use when you have a product idea and need to decide what to build first, when your scope keeps growing, or when you're not sure where to start. Produces a one-page MVP brief you can build from immediately.
phase: strategy
version: 1.0.0
---

# MVP Scoper

## Quick Start

Say: **"Help me scope my MVP"** or **"What should I build first?"**

You'll answer 6 questions. Total time: 10–15 minutes.
Output: `mvp-brief.md` — a one-page brief that tells you (and your agent) exactly what to build.

## What You'll Get

A `mvp-brief.md` containing: the one sentence your product does, who it's for (specifically), the 3 features that make or break the MVP, the explicit list of what's NOT in scope, and the one signal that tells you the MVP worked.

> **Example output excerpt:**
> **The MVP:** A scheduling tool that lets independent therapists send booking links to clients — no back-and-forth email.
> **For:** Solo therapists who manage their own schedule and lose 30+ minutes per client to booking coordination.
> **In scope (build these, nothing else):** (1) Shareable booking link with available slots, (2) Email confirmation to both parties, (3) Simple admin view of upcoming appointments.
> **Not in scope:** Payment processing, cancellation policies, recurring appointments, reminders, team features, calendar sync.
> **Success signal:** A therapist sends their link to 3 clients and at least 2 book without asking follow-up questions.

## The Expert Judgment Embedded

This skill applies the **Jobs To Be Done** framework combined with **ruthless scope elimination**. Most founders scope their MVP by listing features they want to build. This produces MVPs that are too large, take too long, and validate too many hypotheses at once.

The right approach: identify the ONE job the user is hiring the product to do, build only what's required to let them do that job, and define success as a specific user behavior — not revenue, not signups, not feedback.

What founders almost always get wrong: they include "nice to have" features because they're worried the MVP will look unprofessional. It won't. Users forgive missing features. They don't forgive core flows that don't work.

For deeper framework reference, see [reference.md](reference.md).

## The Process

### Step 1: The Core Job

The agent asks: "In one sentence, what job does your product do for its user? Start with: '[User type] can finally...'"

This forces specificity. "Finally" forces you to name what was previously frustrating or impossible.

If you can't complete this sentence, scope isn't your problem — clarity is. Use `problem-validator` first.

### Step 2: The Primary User

The agent asks: "Who specifically is the first person who would pay for this — not a category, but a person. Describe their situation, not their demographics."

Wrong: "Small business owners aged 25-45"
Right: "A solo marketing consultant who manages 3-5 clients and builds their own reporting manually every Friday"

Specificity here determines everything. The more specific, the better the scoping.

### Step 3: The Must-Have Features

The agent applies the **Kano Model** heuristic to the feature list you provide:

- **Must-haves:** If missing, the product fundamentally doesn't work. Include these.
- **Performance features:** More = better. Include the minimum version only.
- **Delighters:** Unexpected extras. Cut all of these from the MVP.

The output is maximum 3 must-have features. If you have more than 3, the agent helps you eliminate until you're at 3 or fewer.

### Step 4: The Explicit Cut List

The agent asks what you were considering building but haven't mentioned. These become the explicit "not in scope" list.

This step is as important as the in-scope list. Without it, cut features silently creep back in during building. Making the cuts explicit and visible prevents scope creep.

### Step 5: The Success Signal

The agent asks: "What would a user have to *do* — not say, but do — for you to know the MVP worked?"

The success signal must be:
- A behavior (not a sentiment)
- Observable (you can verify it happened)
- Achievable in 2 weeks of having real users

Wrong: "Users say they love it"
Right: "3 users complete the core flow start to finish without asking me for help"

### Step 6: Output

The agent produces `mvp-brief.md` with all five elements. This file is also saved to `founder-context.md` if it exists.

## Worked Example

**Founder:** Building a tool for restaurant managers to track their weekly food waste and see where they're losing money. Has a list of 12 features they want to build.

**They said:** "Help me scope my MVP. I want to build a food waste tracker for restaurants."

**Output:**
> **MVP Brief — Food Waste Tracker**
>
> **The One Job:** Restaurant managers can finally see exactly where their food budget is disappearing each week — without building a spreadsheet from scratch.
>
> **Primary User:** A manager at a single-location independent restaurant (not a chain) who suspects food waste is a problem but has no data to prove it or fix it.
>
> **In Scope — Build These 3 Things:**
> 1. Daily waste log: staff enter what was wasted, in what quantity, at what cost
> 2. Weekly summary: total waste cost by category (produce, proteins, prepared food)
> 3. Simple trend line: is waste going up or down week-over-week?
>
> **Not In Scope (save for later):**
> Supplier integrations, inventory tracking, staff accountability features, automated ordering, mobile app, multi-location support, recipe cost analysis, alerts, payroll integration.
>
> **Success Signal:** A manager enters waste data for 5 consecutive days and uses the weekly summary to identify one category to reduce — without asking for help or training.
>
> **Time to build this MVP:** 1–2 weeks of focused agent-assisted building.

## Related Skills

- Use **problem-validator** before this if you're not sure the problem is real
- Use **customer-hypothesis** before this to sharpen who you're building for
- Use **assumption-mapper** after this to identify which parts of this brief are assumptions vs. facts
- Use **feature-sequencer** (Build phase) when you're ready to plan the build order
- Use **founder-partner** anytime to check in on where to focus
