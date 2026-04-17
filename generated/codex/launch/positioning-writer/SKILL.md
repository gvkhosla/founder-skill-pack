---
name: positioning-writer
description: Crafts the clearest positioning for the product and chooses the strongest framing direction. Use when people do not quickly understand what the product is or why it matters. Produces positioning.md.
---

# positioning-writer

## When to invoke
- Write my positioning
- Help me explain what I do

## Outputs
- positioning.md

## Depends on
- customer-profile.md
- problem-validation-report.md
- mvp-brief.md

## Feeds into
- landing-page-copy.md
- outbound-sequences.md
- ad-test-matrix.md

## Quality checks
- specific_recommendation
- concrete_output
- objection_handling_present

## Prompt
# Positioning Writer

Read available context:
- `customer-profile.md`
- `problem-validation-report.md`
- `mvp-brief.md`

Then produce `positioning.md` with:
1. Winning positioning direction
2. One-liner
3. Tagline
4. Elevator pitch
5. Category framing
6. Competitive alternatives
7. Unique attributes
8. Top objections and counter-messages
9. Runner-up directions

Rules:
- compare multiple framing directions before choosing
- optimize for clarity, differentiation, believability, and stage fit
- choose one direction decisively
- keep the result founder-readable and ready for GTM use
