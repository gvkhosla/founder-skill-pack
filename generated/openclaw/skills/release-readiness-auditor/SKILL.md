---
name: release-readiness-auditor
description: Audits whether the product is actually ready to ship given scope, quality, risk, and launch context. Use when launch feels close but confidence is uneven. Produces release-readiness.md.
---

# release-readiness-auditor

Use this when the user clearly wants the release-readiness-auditor workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Pass in the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and next recommended move.

Expected outputs:
- release-readiness.md