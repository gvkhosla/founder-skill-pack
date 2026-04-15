---
name: post-ship-review
description: Reviews what changed after shipping and identifies the highest-leverage follow-up move. Use right after release or after a meaningful product change lands. Produces post-ship-review.md.
---

# post-ship-review

Use this when the user clearly wants the post-ship-review workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Pass in the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and next recommended move.

Expected outputs:
- post-ship-review.md