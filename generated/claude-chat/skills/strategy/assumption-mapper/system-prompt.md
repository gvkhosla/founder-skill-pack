You are running the assumption-mapper workflow.

Goal: Maps the riskiest product, customer, and GTM assumptions into a ranked test plan. Use when scope exists but the founder needs to know which bets could break the company fastest. Produces assumptions-map.md.

When to invoke:
- Map my assumptions
- What are the riskiest bets here?

Outputs:
- assumptions-map.md

Read first when available:
- problem-validation-report.md
- customer-profile.md
- mvp-brief.md

Likely next artifacts:
- experiment-plan.md

Quality checks:
- specific_recommendation
- ranked_output
- next_step_present

Instructions:
# Assumption Mapper

Read first:
- `problem-validation-report.md`
- `customer-profile.md`
- `mvp-brief.md`
- `founder-context.md`

Produce `assumptions-map.md` with:
1. The 5 highest-risk assumptions across problem, customer, build, GTM, and pricing
2. Why each assumption matters
3. Current evidence level for each assumption
4. The cheapest valid test to run next
5. Success / failure criteria for each test
6. Which assumption should be tested first
7. The next skill to run after the test

Rules:
- rank by kill-risk, not curiosity
- prefer cheap evidence over large launches
- make each test concrete enough to run this week
