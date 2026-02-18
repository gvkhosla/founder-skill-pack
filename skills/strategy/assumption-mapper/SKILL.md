---
name: assumption-mapper
description: Maps every key assumption in your product plan to a validation method and priority level. Use after scoping your MVP or defining your customer, when you want to know which assumptions could kill the product if wrong, and how to test them cheaply before building. Produces an assumptions-map.md with a ranked list of risky bets and how to test each one.
phase: strategy
version: 1.0.0
---

# Assumption Mapper

## Quick Start

Say: **"Map my assumptions"** or **"What am I assuming that could be wrong?"**

You'll share your current plan. Total time: 10–15 minutes.
Output: `assumptions-map.md` — a ranked list of your assumptions by risk, with a cheap test for each one.

## What You'll Get

An `assumptions-map.md` containing: every major assumption in your plan, categorized by type, ranked by risk (kill risk × ease of testing), and matched to the cheapest way to validate each one before building.

> **Example output excerpt:**
> **Assumption #1 (Critical):** Freelance designers will pay $29/month for proposal software.
> **Risk:** High — no evidence of willingness to pay at this price point
> **Test:** Run a fake door test. Build a landing page with a "Start free trial" button that collects emails. Run $50 of Twitter ads targeting freelance designers. Measure conversion rate. Target: 5%+ email capture.
> **Time to validate:** 3 days. Cost: $50.

## The Expert Judgment Embedded

This skill applies the **Assumption Mapping** technique from David Bland and Alex Osterwalder's *Testing Business Ideas*, combined with the **Leap-of-Faith Assumption** concept from Eric Ries. Every product plan is a stack of assumptions — about who has the problem, how much it hurts, how they'd pay for a solution, and whether your solution is the right one. Failing fast means testing the most dangerous assumptions first, not the most comfortable ones.

The insight most founders miss: the cheapest time to discover an assumption is wrong is before you've written any code. This skill forces you to surface the assumptions you're hoping are true and design tests that could prove you wrong.

## The Process

### Step 1: Extract Assumptions

The agent reads your MVP brief, customer profile, or product description and extracts every assumption embedded in it. Assumptions fall into four categories:

| Category | Question | Example |
|----------|----------|---------|
| **Desirability** | Do people want this? | "Yoga instructors want automated rebooking" |
| **Feasibility** | Can we build it? | "We can build a working sync in 2 weeks" |
| **Viability** | Can we make money from it? | "Users will pay $49/month" |
| **Adaptability** | Will users change behavior? | "Managers will actually log waste daily" |

### Step 2: Score Each Assumption

Each assumption is scored on two axes:

**Kill Risk (1–5):** If this assumption is wrong, how badly does it damage the product?
- 5: Wrong = product has no market
- 3: Wrong = significant pivot needed
- 1: Wrong = minor adjustment needed

**Evidence Level (1–5):** How much evidence do you currently have that this is true?
- 5: Strong evidence (multiple customer conversations, observed behavior)
- 3: Indirect evidence (similar products exist, forum complaints)
- 1: Hope and intuition only

**Priority score = Kill Risk × (6 − Evidence Level)**
Higher score = test this first.

### Step 3: Design Cheap Tests

For each high-priority assumption, the agent recommends the cheapest test that could produce clear evidence:

| Test Type | When to Use | Cost | Time |
|-----------|------------|------|------|
| **Customer interview** | Desirability + behavior assumptions | $0 | 1–2 days to book 5 calls |
| **Fake door test** | Willingness to pay, demand assumptions | $50–$200 in ads | 3–5 days |
| **Landing page + waitlist** | General demand, messaging | $0 | 1 day to build |
| **Concierge MVP** | Feasibility of core value delivery | $0 | Do it manually first |
| **Smoke test / pre-sell** | Willingness to pay (strong form) | $0 | Ask for money before building |
| **Existing data research** | Market size, competitor behavior | $0 | 2–4 hours |

### Step 4: Output

`assumptions-map.md` — all assumptions ranked, scored, with test designs for the top 5.

## Worked Example

**Founder:** Building a tool for Airbnb hosts to automate their guest communication.

**Output:**
> **Assumptions Map — Airbnb Host Messaging Tool**
>
> **#1 Priority — Kill Risk: 5, Evidence: 1 → Score: 25**
> **Assumption:** Airbnb hosts spend significant time on repetitive guest messages and find it frustrating.
> **Test:** Join 3 Airbnb host Facebook groups. Search for "guest messages" + "repetitive" + "time." Count complaints. Target: find 20+ organic complaints in 30 minutes of searching. Also: post "What's your most time-consuming hosting task?" and observe responses.
> **Time: 2 hours. Cost: $0.**
>
> **#2 Priority — Kill Risk: 5, Evidence: 2 → Score: 20**
> **Assumption:** Hosts will pay $29/month for this tool.
> **Test:** Fake door. Build a 3-page landing page: problem → solution → pricing page with "Start free trial" button. Drive 200 visitors via Airbnb host subreddit posts + one boosted Facebook post. Target: 8%+ click-through to pricing page, 3%+ email signups.
> **Time: 3 days. Cost: $100.**
>
> **#3 Priority — Kill Risk: 4, Evidence: 2 → Score: 16**
> **Assumption:** Hosts will trust an AI to respond to guests on their behalf without reviewing each message.
> **Test:** Customer interview. Ask 5 hosts: "Would you ever send an automated response to a guest without reading it first?" Watch body language / listen for hesitation. This is a behavior change assumption — interviews will reveal resistance faster than any other test.
> **Time: 3 days (to book and run 5 calls). Cost: $0.**
>
> **Recommendation:** Run tests #1 and #2 this week before writing a single line of code. They'll take 4 days and cost under $150. If both pass, you have strong grounds to build.

## Related Skills

- Use **problem-validator** before this — validates the core problem, then this maps remaining assumptions
- Use **customer-hypothesis** before this — the customer profile is a key source of assumptions
- Use **mvp-scoper** in parallel — the MVP brief is another rich source of assumptions
- Use **founder-partner** after building and running tests — to synthesize what you learned
