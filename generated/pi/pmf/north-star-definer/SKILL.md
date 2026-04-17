---
name: north-star-definer
description: Defines the one metric that best captures delivered value and future company health. Use when the founder is tracking too many metrics or lacks one leading signal. Produces north-star.md.
---

# north-star-definer

## When to invoke
- Define my north star
- What metric should we obsess over?

## Outputs
- north-star.md

## Depends on
- customer-profile.md
- mvp-brief.md

## Feeds into
- pmf-assessment.md
- weekly-review.md

## Quality checks
- specific_recommendation
- metric_definition_present
- next_step_present

## Prompt
# North Star Definer

Read first:
- `customer-profile.md`
- `mvp-brief.md`
- `positioning.md`
- `founder-context.md`

Produce `north-star.md` with:
1. The recommended north star metric
2. Why it best captures value delivered
3. What not to use as the north star
4. The exact definition and counting rule
5. Supporting diagnostic metrics to watch around it
6. The review cadence for this metric
7. The next artifact that should reference it

Rules:
- choose one leading metric, not a dashboard
- optimize for user value first and business health second
- keep the metric easy to explain and hard to game
