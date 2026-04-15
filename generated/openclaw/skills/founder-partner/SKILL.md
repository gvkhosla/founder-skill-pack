---
name: founder-partner
description: Acts as the founder’s operating partner by reading company state, recent history, and active bottlenecks before recommending the next move. Use at the start of any session, when priorities feel unclear, or when the founder needs company-level guidance. Produces updated founder-context.md and recommended-next-step.md.
---

# founder-partner

Use this when the user clearly wants the founder-partner workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Pass in the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and next recommended move.

Expected outputs:
- founder-context.md
- recommended-next-step.md