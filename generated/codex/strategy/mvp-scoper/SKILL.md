---
name: mvp-scoper
description: Defines exactly what is in and out of scope for the MVP. Use when the product idea is clear but scope keeps expanding. Produces mvp-brief.md.
---

# mvp-scoper

## When to invoke
- Help me scope my MVP
- What should I build first?

## Outputs
- mvp-brief.md

## Depends on
- customer-profile.md
- problem-validation-report.md

## Feeds into
- implementation-plan.md
- build-sequence.md

## Quality checks
- specific_recommendation
- concrete_output
- explicit_out_of_scope_list

## Prompt
# MVP Scoper

Read available context first:
- `problem-validation-report.md`
- `customer-profile.md`
- `assumptions-map.md`

Then produce `mvp-brief.md` with:
1. The one job this product does
2. The primary user
3. The 3 must-have features
4. Explicit not-in-scope list
5. Success signal for the MVP
6. Time-to-build estimate
7. Recommended next skill

Rules:
- force clear tradeoffs
- maximum 3 in-scope features
- optimize for validation speed, not completeness
- make the cut list explicit and visible
