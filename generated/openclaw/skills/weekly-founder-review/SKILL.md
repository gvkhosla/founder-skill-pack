---
name: weekly-founder-review
description: Runs a weekly founder operating review across wins, misses, bottlenecks, and next focus. Use at the end of each week or when momentum feels messy. Produces weekly-review.md.
---

# weekly-founder-review

Use this when the user clearly wants the weekly-founder-review workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Run my weekly review
- Review this week

## Expected outputs
- weekly-review.md

## Feeds into
- focus-plan.md
- experiment-plan.md

## Quality checks
- bottleneck_identified
- focus_locked

## Workflow
# Weekly Founder Review

Read available state and recent artifacts.

Produce `weekly-review.md` with:
1. Top win
2. Top miss
3. What changed this week
4. Current bottleneck
5. What to stop doing
6. The one focus for next week
7. Recommended next skill or sequence

Rules:
- optimize for honesty and leverage
- one focus only
- connect observations to artifacts and bottlenecks
