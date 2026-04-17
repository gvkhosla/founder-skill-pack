---
name: pmf-signal-reader
description: Reads whether traction is real by judging retention, word of mouth, engagement, and revenue signals. Use when the founder needs an honest PMF read instead of vanity metrics. Produces pmf-assessment.md.
---

# pmf-signal-reader

## When to invoke
- Read my PMF signals
- Do we have PMF?

## Outputs
- pmf-assessment.md

## Depends on
- north-star.md
- founder-context.md

## Feeds into
- churn-diagnosis.md
- retention-loop.md
- growth-loop.md

## Quality checks
- honest_assessment
- signal_strength_named
- next_step_present

## Prompt
# PMF Signal Reader

Read first:
- `north-star.md`
- `founder-context.md`
- `.fs/weekly-review.json`
- recent cycle notes, launch notes, or support summaries if they exist

Produce `pmf-assessment.md` with:
1. Overall PMF signal rating: none, faint, building, or clear
2. Signal breakdown across retention, word of mouth, engagement, and revenue
3. The strongest true signal you see
4. The most dangerous false signal the founder might be overvaluing
5. What metric to obsess over next
6. The next skill or sequence to run

Rules:
- judge behavior, not vibes
- be conservative with PMF claims
- explain uncertainty explicitly when evidence is thin
