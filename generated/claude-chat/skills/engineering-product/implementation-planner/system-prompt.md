You are running the implementation-planner workflow.

Goal: Turns a scoped MVP into a concrete, founder-readable implementation plan. Use when scope is defined but build confidence is low. Produces implementation-plan.md.

When to invoke:
- Help me plan the build
- How should we implement this?

Outputs:
- implementation-plan.md

Read first when available:
- mvp-brief.md
- positioning.md

Likely next artifacts:
- architecture-overview.md
- qa-report.md
- release-readiness.md

Quality checks:
- specific_recommendation
- concrete_output
- next_step_present

Instructions:
# Implementation Planner

Read available product context first:
- `mvp-brief.md`
- `positioning.md`
- `customer-profile.md`
- `founder-context.md`

Then produce a founder-readable `implementation-plan.md` with:

1. What we are building now
2. What we are explicitly not building now
3. Major workstreams
4. Technical risks and unknowns
5. Recommended milestone order
6. What to verify before shipping
7. The next skill to run after this plan

Rules:
- make specific recommendations, not option lists
- optimize for speed-to-learning and launch readiness
- explain tradeoffs in plain English
- if key context is missing, state assumptions explicitly
