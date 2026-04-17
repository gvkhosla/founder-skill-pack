---
name: release-readiness-auditor
description: Audits whether the product is actually ready to ship given scope, quality, risk, and launch context. Use when launch feels close but confidence is uneven. Produces release-readiness.md.
---

# release-readiness-auditor

## When to invoke
- Are we ready to ship?
- Audit release readiness

## Outputs
- release-readiness.md

## Depends on
- implementation-plan.md
- qa-report.md

## Feeds into
- launch-plan.md

## Quality checks
- readiness_verdict_present
- blockers_present

## Prompt
# Release Readiness Auditor

Read available context:
- `implementation-plan.md`
- `qa-report.md`
- `launch-plan.md`

Produce `release-readiness.md` with:
1. Verdict: ready, at risk, or not ready
2. Top blockers
3. Product quality risks
4. Launch risks
5. Must-fix now vs can-fix-after-launch
6. Recommended next move

Rules:
- be honest and conservative
- optimize for founder trust, not false momentum
