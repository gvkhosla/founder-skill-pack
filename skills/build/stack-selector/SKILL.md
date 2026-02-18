---
name: stack-selector
description: Recommends the right technology stack for your product, tailored to non-technical founders using coding agents. Use before starting to build, when you're unsure what tools to use, or when an agent has suggested a stack that feels overwhelming. Produces a stack-decision.md with specific tool recommendations and setup order.
phase: build
version: 1.0.0
---

# Stack Selector

## Quick Start

Say: **"Help me choose my tech stack"** or **"What tools should I build with?"**

You'll answer 4 questions. Total time: 10 minutes.
Output: `stack-decision.md` — specific tools named, with rationale and setup order.

## What You'll Get

A `stack-decision.md` naming every layer of your stack (frontend, backend, database, auth, hosting, payments if needed), why each was chosen, what to set up first, and what to add only when you need it.

> **Example output excerpt:**
> **Your Stack — B2B SaaS with user accounts and payments:**
> Frontend: Next.js (React) — one framework handles both marketing site and app
> Database: Supabase — Postgres + auth + file storage in one dashboard, free tier generous
> Auth: Supabase Auth (built in) — don't add Clerk until you need SSO or teams
> Payments: Stripe — the only choice for a first product. Set up Checkout, not a custom form.
> Hosting: Vercel — deploys automatically on every git push, zero config
> **Setup order:** Vercel → Supabase → Next.js → Stripe (add when you're ready to charge)

## The Expert Judgment Embedded

This skill applies the **Boring Technology** principle (Dan McKinley) combined with **Time-to-First-User** optimization. The right stack for a non-technical founder using a coding agent is not the most powerful, the most scalable, or the most popular among engineers — it's the one that lets you get a working product in front of real users fastest, with the least operational complexity.

Every tool in your stack has a learning curve, a failure mode, and a maintenance burden. The goal is minimum viable stack: the fewest tools that give you everything you need to launch, with room to swap components later.

The most common mistake: building for imagined scale. Founders choose Kubernetes, microservices, and Redis caches before they have 10 users. This skill prevents that.

For the full stack reference catalog, see [stacks-reference.md](stacks-reference.md).

## The Process

### Step 1: Product Type Classification

The agent classifies your product into one of four types — each has a recommended baseline stack:

| Type | Description | Baseline Stack |
|------|-------------|----------------|
| **Content + Waitlist** | Marketing site + email capture, no user accounts yet | Next.js + Resend + Vercel |
| **SaaS with Accounts** | Users log in, have data, use the product repeatedly | Next.js + Supabase + Vercel |
| **Marketplace / Multi-sided** | Two user types (buyers + sellers, hosts + guests) | Next.js + Supabase + Stripe Connect + Vercel |
| **Internal Tool / Dashboard** | Data entry + display for a single organization | Next.js + Supabase + Vercel (+ Retool if speed is critical) |

### Step 2: Four Clarifying Questions

1. **Payments:** Will users pay you directly, or is this free for now?
2. **Data complexity:** Is your data mostly rows of records, or does it involve files, media, or real-time updates?
3. **Users:** Single user type or multiple (admin + customer, host + guest)?
4. **Timeline:** Are you building to validate (ship in 2 weeks) or building to scale (3+ months)?

Answers can upgrade or simplify the baseline recommendation.

### Step 3: Layer-by-Layer Recommendation

Each stack layer is named explicitly:

| Layer | Recommended Tool | When to Upgrade |
|-------|-----------------|-----------------|
| **Frontend framework** | Next.js 14+ (App Router) | Never — scales to millions |
| **Database** | Supabase (Postgres) | Switch to PlanetScale or Neon only at 10M+ rows |
| **Auth** | Supabase Auth | Upgrade to Clerk when you need SSO, SAML, or org management |
| **Payments** | Stripe Checkout | Add Stripe Billing (subscriptions) when you have recurring revenue |
| **Email (transactional)** | Resend | Switch to Postmark only if deliverability issues arise |
| **File storage** | Supabase Storage | Switch to Cloudflare R2 at high volume |
| **Hosting** | Vercel | Switch to Fly.io or Railway when you need custom server logic |
| **Analytics** | Posthog (free tier) | Only add Amplitude or Mixpanel after PMF |

### Step 4: Output

`stack-decision.md` — full stack with rationale, setup order (start with hosting + database, not auth), and a "don't add yet" list.

## Worked Example

**Founder:** Building a client portal for boutique agencies. Users log in, see project status, and approve deliverables. Wants to charge $49/month. No technical background.

**Output:**
> **Stack Decision — Agency Client Portal**
>
> **Frontend:** Next.js 14 (App Router)
> One framework covers your marketing site, login flow, and the app itself. Coding agents know it extremely well — you'll get better output than with any other choice.
>
> **Database + Auth:** Supabase
> Postgres database + authentication in one dashboard. You get row-level security (clients only see their own data) without writing custom authorization logic. Free tier handles your first 500 users comfortably.
>
> **Payments:** Stripe + Stripe Billing
> You're charging recurring subscriptions, so set up Stripe Billing from day one. Use Stripe's hosted Checkout page — don't build a custom payment form.
>
> **Email:** Resend
> Send confirmation emails, invite emails, and notification emails. $0 until 3,000 emails/month.
>
> **Hosting:** Vercel
> Push to GitHub, it's live. Zero configuration. Free tier is more than sufficient for launch.
>
> **Setup order:**
> 1. Vercel account + GitHub repo connected (20 minutes)
> 2. Supabase project + schema (30 minutes)
> 3. Next.js project with Supabase auth wired up (agent handles this)
> 4. Stripe account + Billing product configured (30 minutes)
> 5. Resend account + first email template (15 minutes)
>
> **Don't add yet:** Redis, background jobs, CDN configuration, multiple environments, Docker, TypeScript strict mode. Add these only when a specific problem demands them.

## Related Skills

- Use **mvp-scoper** before this — the MVP brief tells you what features the stack must support
- Use **integration-picker** after this — fills in the specific third-party services (payments, storage, email)
- Use **feature-sequencer** after this — now that you know the stack, sequence what to build first
- Use **architecture-explainer** after this — explains the stack decision to yourself and stakeholders
