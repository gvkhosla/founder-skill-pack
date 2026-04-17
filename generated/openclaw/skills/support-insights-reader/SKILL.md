---
name: support-insights-reader
description: Turns support conversations and tickets into product and retention insights. Use when support volume is growing or repeating patterns are hard to see. Produces support-insights.md.
---

# support-insights-reader

Use this when the user clearly wants the support-insights-reader workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Read our support insights
- What are support tickets telling us?

## Expected outputs
- support-insights.md

## Feeds into
- onboarding-friction.md
- retention-loop.md

## Quality checks
- themes_present
- recommendations_present

## Workflow
# Support Insights Reader

Produce `support-insights.md` with:
1. Top ticket themes
2. Most repeated user confusion points
3. Signals of onboarding friction
4. Signals of churn or disappointment
5. Product or support fixes to prioritize next

Rules:
- cluster by repeated patterns, not isolated anecdotes
- separate severity from frequency
- make recommendations actionable within a week
