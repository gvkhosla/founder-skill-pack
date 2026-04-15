---
name: implementation-planner
description: Turns a scoped MVP into a concrete, founder-readable implementation plan. Use when scope is defined but build confidence is low. Produces implementation-plan.md.
---

# implementation-planner

Use this when the user clearly wants the implementation-planner workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Pass in the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and next recommended move.

Expected outputs:
- implementation-plan.md