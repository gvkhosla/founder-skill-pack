---
name: pricing-model-framer
description: Defines your pricing model, tier structure, and price points based on your product type and target customer. Use before launch when you need to decide how to charge, or when you're unsure whether to use freemium, free trial, or paid-only. Produces a pricing-model.md with a recommended structure, specific price points, and the rationale for each decision.
phase: launch
version: 1.0.0
---

# Pricing Model Framer

## Quick Start

Say: **"Help me decide my pricing"** or **"How should I charge for this?"**

Describe your product and who it's for. Total time: 15 minutes.
Output: `pricing-model.md` — recommended model (freemium vs. trial vs. paid-only), tier structure, specific price points, and what to include in each tier.

## What You'll Get

A `pricing-model.md` with: recommended pricing model (and why), 2–3 tier structure with names, what's included at each tier, specific dollar amounts, and the key metric that gates the upgrade (users, usage, features, or seats).

> **Example output excerpt:**
> **Model: Free trial → Paid (14-day trial, no credit card required)**
> **Tier 1 — Solo ($29/month):** 1 booking page, unlimited classes, email confirmations, up to 100 students.
> **Tier 2 — Studio ($79/month):** Multiple instructors, custom branding, payment collection.
> **Don't offer a free tier:** You risk attracting hobbyists, not serious instructors. The problem is painful enough that they'll pay.
> **The upgrade trigger:** Hitting 100 students on Solo. At that point they've validated the product works and the pain of hitting the limit is real.

## The Expert Judgment Embedded

This skill applies **Value-Based Pricing** principles combined with **SaaS Pricing Patterns** from Patrick Campbell (ProfitWell) and the **Pricing Page Clarity** principle. Most first-time founders underprice because they're afraid nobody will pay. This produces three problems: you attract price-sensitive early adopters who churn quickly, you undermine your own perceived value, and you make it mathematically impossible to build a real business.

The rule of thumb: charge at least 10x what you think is "reasonable." Then reality and willingness-to-pay interviews will move it to the right number. Starting too low is almost always harder to fix than starting too high.

## The Process

### Step 1: Pricing Model Selection

The agent asks about your product type and recommends one of four models:

| Model | Best For | Avoid When |
|-------|---------|-----------|
| **Free trial → Paid** | SaaS with a learning curve; users need time to see value | The value is obvious in 5 minutes (use freemium) |
| **Freemium → Paid** | Products with network effects or habitual usage | Your free tier cannibalizes paid (users never upgrade) |
| **Paid-only (no free tier)** | B2B tools, high-value outcomes, buyers with budgets | Consumer products where free competition exists |
| **Usage-based** | Products where value scales with usage (API calls, seats, messages) | Products with fixed value regardless of usage |

### Step 2: The Value Metric

The most important pricing decision: what scales with value?

The **value metric** is the variable that should gate your tiers — because it correlates with how much value the customer is getting.

Examples:
- Booking tool: number of students/clients (more clients = more value from bookings)
- Email tool: number of emails sent (more sends = more value from deliverability)
- Team tool: number of seats (more people = more value from collaboration)
- Storage tool: GB stored (more storage = more value from data retention)

Wrong value metrics: time limits, features, arbitrary caps that don't relate to value.

### Step 3: Tier Structure

The agent recommends a 2–3 tier structure:

**2 tiers** (simplest, best for first products): Solo + Team
**3 tiers** (most common, good for diverse customers): Solo + Pro + Team/Enterprise

The **decoy effect** (behavioral economics): the middle tier should be priced to make it look like the obvious choice compared to the cheapest and most expensive options.

### Step 4: Price Point Calibration

The agent recommends price points based on:
- **Customer budget**: what category of expense is this for them? Impulse ($<10) → Tool budget ($10–$100) → Software line item ($100–$500) → Procurement ($500+)
- **Competitor anchoring**: what are adjacent tools charging?
- **Value delivered**: if your tool saves 3 hours/week at $50/hour for the user, $50/month = 10x ROI
- **Business math**: what MRR do you need to be default alive? Work backwards from that.

### Step 5: Freemium Decision

If considering a free tier, the agent applies the **Freemium Viability Test**:
- ✅ Add freemium if: product has network effects, acquisition cost would otherwise be high, value is obvious in the free tier
- ❌ Avoid freemium if: free users require significant support, free tier cannibalizes paid, you're B2B with budget buyers

### Step 6: Output

`pricing-model.md` — full recommendation with model, tiers, price points, value metric, and what to put on the pricing page.

## Worked Example

**Founder:** Booking tool for solo yoga/fitness instructors. Target customer charges $15–$25 per class, teaches 8–12 classes/week, ~50–120 regular students.

**Output:**
> **Pricing Model — FitBook**
>
> **Recommended model: 14-day free trial → Paid (no credit card at signup)**
> Rationale: The value (time saved, professional appearance, fewer no-shows) takes 1–2 weeks to feel. A free trial gives instructors time to set up their page, share the link with students, and experience a few actual bookings before committing. Freemium is rejected: a permanently-free tier will attract hobbyists with 5 students who never upgrade and require support.
>
> **Value metric: Number of active students**
> Instructors with more students get more value from automated bookings — it scales perfectly with their business size.
>
> **Tier Structure:**
>
> | | **Solo — $19/month** | **Pro — $39/month** |
> |--|---------------------|---------------------|
> | Active students | Up to 75 | Unlimited |
> | Booking pages | 1 | Multiple (for multiple studios/locations) |
> | Custom branding | ❌ | ✅ |
> | Payment collection | ❌ | ✅ (Stripe Connect) |
> | Analytics | Basic | Full retention + attendance |
>
> **Positioning:** Solo is the "I just want to stop managing DMs" plan. Pro is "I'm running a real fitness business."
>
> **The upgrade trigger:** Hitting 75 students. At that point the instructor is clearly established — they have the revenue to justify $39/month, and the limit is a real constraint.
>
> **Price point rationale:** At $19/month, a typical instructor saves 3+ hours/week × $30/hr opportunity cost = $90+/week in value. ROI is ~5x. Price feels appropriate — not so low it seems worthless, not so high it requires a decision.
>
> **What to show on the pricing page:**
> Lead with the outcome: "Save 3+ hours a week on booking admin." Then price. Use annual pricing as an option (2 months free = 17% discount) to improve cash flow.

## Related Skills

- Use **positioning-writer** before this — positioning shapes how pricing is perceived
- Use **landing-page-copywriter** after this — your landing page needs to reflect your pricing model
- Use **north-star-definer** (PMF phase) — revenue per user is often a key leading indicator once pricing is set
