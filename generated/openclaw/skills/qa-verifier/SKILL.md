---
name: qa-verifier
description: Checks whether the product actually works across critical flows before release. Use when features are implemented and confidence needs verification. Produces qa-report.md.
---

# qa-verifier

Use this when the user clearly wants the qa-verifier workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Run QA verification
- Check whether this actually works

## Expected outputs
- qa-report.md

## Read first when available
- implementation-plan.md
- architecture-overview.md

## Feeds into
- release-readiness.md

## Quality checks
- critical_flows_present
- blockers_present

## Workflow
# QA Verifier

Read available context:
- `implementation-plan.md`
- `architecture-overview.md`
- release notes or feature summary if present

Produce `qa-report.md` with:
1. Critical user flows to verify
2. What appears safe
3. What appears risky or untested
4. Bugs or blockers that would undermine launch confidence
5. Regression checks to run next
6. Recommendation: safe to continue, fix before ship, or pause

Rules:
- prioritize critical flows over exhaustive lists
- optimize for founder confidence and release safety
- be explicit about uncertainty and missing evidence
