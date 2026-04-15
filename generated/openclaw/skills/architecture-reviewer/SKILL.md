---
name: architecture-reviewer
description: Reviews the implementation plan and identifies the simplest architecture that can safely support the product. Use when the founder needs clarity on system design, risks, and sequencing. Produces architecture-overview.md.
---

# architecture-reviewer

Use this when the user clearly wants the architecture-reviewer workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Pass in the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and next recommended move.

Expected outputs:
- architecture-overview.md