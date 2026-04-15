---
name: post-ship-review
description: Reviews what changed after shipping and identifies the highest-leverage follow-up move. Use right after release or after a meaningful product change lands. Produces post-ship-review.md.
---

# post-ship-review

## Invocation
- Review what changed after shipping
- Run a post-ship review

## Outputs
- post-ship-review.md

## Prompt
# Post Ship Review

Read available context:
- `qa-report.md`
- `release-readiness.md`
- any launch notes, user feedback, or support notes if available

Produce `post-ship-review.md` with:
1. What shipped
2. What appears to have improved
3. What still feels fragile
4. Early quality or user-signal concerns
5. Highest-leverage follow-up action
6. Recommendation for the next sequence or skill

Rules:
- optimize for learning after shipping, not celebration
- distinguish signal from hope
- identify the clearest next move
