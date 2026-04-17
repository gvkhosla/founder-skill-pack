---
name: focus-planner
description: Locks the one focus that matters most for the next working cycle. Use when priorities are scattered or after a weekly review. Produces focus-plan.md.
---

# focus-planner

Use this when the user clearly wants the focus-planner workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Help me focus
- Plan next week's focus

## Expected outputs
- focus-plan.md

## Quality checks
- one_focus_present
- tradeoffs_present

## Workflow
# Focus Planner

Produce `focus-plan.md` with:
1. One primary focus
2. What gets deprioritized
3. Why this focus matters now
4. What success looks like in one week

Rules:
- choose one focus, not a bundle
- make tradeoffs explicit
