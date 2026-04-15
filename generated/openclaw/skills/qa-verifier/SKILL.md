---
name: qa-verifier
description: Checks whether the product actually works across critical flows before release. Use when features are implemented and confidence needs verification. Produces qa-report.md.
---

# qa-verifier

Use this when the user clearly wants the qa-verifier workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Pass in the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and next recommended move.

Expected outputs:
- qa-report.md