---
name: churn-diagnostician
description: Diagnoses why users are leaving by translating timing, behavior, and feedback into one root-cause call. Use when churn is rising or retention feels mysterious. Produces churn-diagnosis.md.
---

# churn-diagnostician

Use this when the user clearly wants the churn-diagnostician workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Diagnose my churn
- Why are users leaving?

## Expected outputs
- churn-diagnosis.md

## Read first when available
- pmf-assessment.md
- support-insights.md
- founder-context.md

## Feeds into
- retention-loop.md
- experiment-plan.md

## Quality checks
- specific_recommendation
- root_cause_named
- next_step_present

## Workflow
# Churn Diagnostician

Read first:
- `pmf-assessment.md`
- `support-insights.md`
- `founder-context.md`
- recent review or usage notes if they exist

Produce `churn-diagnosis.md` with:
1. The primary churn root cause
2. Evidence from timing, behavior, and user feedback
3. The magic moment users are failing to reach or sustain
4. The experiment most likely to reduce churn fastest
5. What the founder should stop assuming about churn
6. The next skill or sequence to run after the experiment

Rules:
- make one main diagnosis even when evidence is imperfect
- translate polite user feedback into the underlying truth
- prefer behavioral explanations over survey clichés
