---
name: customer-hypothesis
description: Defines the first customer with enough specificity to guide product and GTM choices. Use when the founder is still speaking in broad market categories. Produces customer-profile.md.
---

# customer-hypothesis

## When to invoke
- Define my customer
- Who is my first customer?

## Outputs
- customer-profile.md

## Feeds into
- mvp-brief.md
- positioning.md

## Quality checks
- specificity_present
- recommendation_present

## Prompt
# Customer Hypothesis

Produce `customer-profile.md` with:
1. Primary customer
2. Situation, not demographics
3. Existing behavior and workaround
4. Trigger that makes them care now
5. Why they are a better first customer than adjacent segments

Rules:
- choose one sharp starting customer
- optimize for founder focus, not TAM theater
- make the profile usable by product and GTM skills
