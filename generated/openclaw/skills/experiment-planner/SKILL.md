---
name: experiment-planner
description: Turns a bottleneck or hypothesis into a concrete experiment for the next cycle. Use when the founder knows what to learn next but not how to structure the test. Produces experiment-plan.md.
---

# experiment-planner

Use this when the user clearly wants the experiment-planner workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Pass in the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and next recommended move.

Expected outputs:
- experiment-plan.md