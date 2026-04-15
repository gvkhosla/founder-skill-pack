---
name: problem-validator
description: Validates whether the problem is painful, frequent, and real enough to build around. Use when conviction is mostly intuitive and needs sharper evidence. Produces problem-validation-report.md.
---

# problem-validator

Use this when the user clearly wants the problem-validator workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Pass in the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and next recommended move.

Expected outputs:
- problem-validation-report.md