---
name: failure-navigator
description: Diagnoses why your product isn't gaining traction after multiple cycles — and tells you specifically what to try next. Triggered automatically by build-cycle after 3+ flat cycles, or invoked directly when you feel stuck and don't know why. Produces a diagnosis.md naming the failure mode and the specific prescription to try next.
phase: compound
version: 1.0.0
---

# Failure Navigator

## What This Is

Most founders who quit do so not because the problem was insurmountable, but because they couldn't tell the difference between "keep going" and "change direction." They either kept going when they should have changed, or changed when they should have kept going.

This skill is for the stuck moment — when cycles are running, effort is real, and signal isn't improving. It doesn't decide whether to pivot. It identifies *why* you're stuck so the next decision is informed rather than panic-driven.

## Quick Start

Say: **"Help me figure out why I'm stuck"** or **"Run failure navigator"** or **"Why isn't this working?"**

The build-cycle skill triggers this automatically when 3+ consecutive cycles show flat or declining signal.

Output: `diagnosis.md` — failure mode named, evidence cited, prescription for the next 2 cycles.

## What You'll Get

A `diagnosis.md` naming the failure mode (one of five), the specific evidence that led to that diagnosis, and a concrete 2-cycle prescription — what to try, how to know if it's working, and when to consider a pivot.

> **Example output excerpt:**
> **Failure Mode: Wrong Solution**
> **Evidence:** 3 users named the same friction point in their feedback. Onboarding completion rate is 40%. The 3 users who completed onboarding all show meaningful retention.
> **Diagnosis:** The product works — but 60% of users never reach the working version. The solution itself is right; the path to it is broken.
> **Prescription:** Spend 2 cycles exclusively on reducing time-to-value. Not new features. Not marketing. Get the onboarding completion rate above 70% and re-evaluate.

## When This Is Not the Right Skill

- If you've had fewer than 3 cycles: too early to diagnose. More data needed.
- If cycles haven't been run consistently: the problem is execution, not product. Run cycles first.
- If the founder hasn't actually done the previous cycle's commitment: not a product problem.

## The Five Failure Modes

See [build-cycle/failure-modes.md](../build-cycle/failure-modes.md) for the full diagnostic guide.

| Mode | Core Question | Key Signal |
|------|--------------|-----------|
| **Wrong Customer** | Are you reaching the person who has this problem most acutely? | Users engage once but don't return; feedback is positive but non-specific |
| **Wrong Problem** | Is the problem you're solving actually urgent for users? | Users understand product but don't use it; workarounds are preferred |
| **Wrong Solution** | Is the path to value clear and accessible? | Problem is real but users don't reach value; specific friction points named repeatedly |
| **Wrong Timing** | Is the market ready? Is the trigger moment right? | Intellectual interest without urgency; innovators love it, no early majority |
| **Wrong Distribution** | Are you reaching the right person through the right channel? | Some cohorts are excellent; channel performance varies dramatically |

## The Diagnosis Process

### Step 1: Rule Out Execution

Before diagnosing product, rule out execution issues:

- "Was the previous cycle's commitment actually completed?" If no: execution problem, not product.
- "Are you consistently talking to users?" If no: insufficient data to diagnose.
- "Have you run at least 3 complete build cycles?" If no: too early to diagnose.

### Step 2: Evidence Inventory

The agent asks for — or reads from cycle records — specific data points:

- Current retention rate (D1, D7, D30 if available)
- Last 5 user behaviors (what users did, not what they said)
- Most recent 5 pieces of feedback (exact quotes, not summaries)
- The onboarding completion rate (% who reach the core value moment)
- The referral rate (how many users have told someone else)

### Step 3: Hypothesis Generation

Based on the evidence, the agent generates hypotheses for each failure mode — then scores each by the evidence:

| Mode | Evidence For | Evidence Against | Likelihood |
|------|-------------|-----------------|-----------|
| Wrong Customer | ... | ... | High / Medium / Low |
| Wrong Problem | ... | ... | High / Medium / Low |
| Wrong Solution | ... | ... | High / Medium / Low |
| Wrong Timing | ... | ... | High / Medium / Low |
| Wrong Distribution | ... | ... | High / Medium / Low |

### Step 4: Primary Diagnosis

The highest-likelihood mode becomes the diagnosis. If two modes are equally likely, the agent names both and recommends testing the cheaper hypothesis first.

### Step 5: The Prescription

Each failure mode has a specific prescription — not "do more research" but a concrete experiment with a clear success signal.

**Prescription format:**
> "For the next 2 cycles, do [specific action]. Don't do [other tempting thing] — that addresses a different failure mode. You'll know the diagnosis was right if [specific observable change]. You'll know it was wrong if [signal that points to a different mode]."

**Prescription examples by mode:**

*Wrong Customer:* "Find 5 people who exactly match your most-engaged user (same job, same company size, same specific situation). Don't recruit from your existing channels — go find them where your best user hangs out. Show them the product cold. If engagement is dramatically different, the customer was too broad."

*Wrong Problem:* "Ask 5 current users to walk you through the last 7 days of their life around this problem — before they open your product. You're looking for how often the problem actually occurs and how much it costs them when it does. If they struggle to name a recent specific instance, the problem isn't frequent or painful enough."

*Wrong Solution:* "Watch 5 users try to complete the core flow without helping them. Record exactly where they slow down. Fix only those 3 friction points in the next cycle — nothing else. Re-measure onboarding completion."

*Wrong Timing:* "Find the moment right before a user feels the pain most acutely. Build a way to reach people at exactly that moment — a trigger-based outreach, a community post, a partnership with whoever encounters the trigger first. Test whether timing-matched users behave differently than your current users."

*Wrong Distribution:* "Interview your 3 best users about exactly how they found you. Trace the path. Then spend one cycle exclusively putting yourself in more of those situations — nothing else."

### Step 6: The Pivot Threshold

If a prescription is attempted for 2 full cycles with no change in signal, the agent surfaces the pivot conversation:

> "We've now tested the [X] hypothesis with real effort across 2 cycles and the signal hasn't changed. That's meaningful evidence. It doesn't mean start over — it means [specific assumption] appears to be wrong.
>
> There are three ways to respond to this:
> 1. **Customer pivot** — Keep the solution; find who it's actually for
> 2. **Problem pivot** — Keep the customer; find what they actually need most
> 3. **Solution pivot** — Keep the customer and problem; try a different approach
>
> Which of these feels most true based on what you know?"

The pivot conversation is not a verdict — it's an invitation to use the evidence. The founder decides. The navigator provides the frame.

## Output

`diagnosis.md`:

```markdown
# Failure Diagnosis — [YYYY-MM-DD]

## Evidence Summary
[What data was used — specific, not summarized]

## Hypothesis Scores
| Mode | Likelihood | Key Evidence |
|------|-----------|-------------|
| Wrong Customer | [High/Med/Low] | [One sentence] |
| Wrong Problem | [High/Med/Low] | [One sentence] |
| Wrong Solution | [High/Med/Low] | [One sentence] |
| Wrong Timing | [High/Med/Low] | [One sentence] |
| Wrong Distribution | [High/Med/Low] | [One sentence] |

## Primary Diagnosis
**Mode:** [Name]
**Confidence:** [High/Medium]
**Why:** [2–3 sentences of reasoning]

## The Prescription
**For the next 2 cycles:**
[Specific action — what to do, what NOT to do]

**You'll know the diagnosis was right if:**
[Observable signal within 2 cycles]

**You'll know it was wrong if:**
[Signal that points to a different mode]

## Pivot Threshold
If the prescription produces no change by [date + 2 cycles]:
→ Return to failure-navigator and run the pivot conversation
```

## Related Skills

- Triggered by **build-cycle** — runs automatically at 3+ flat cycles
- Use **mpp-evaluator** alongside this — MPP trajectory is key diagnostic evidence
- Use **founder-partner** (Partner phase) — for the broader strategic context when pivoting
