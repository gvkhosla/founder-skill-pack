# Stack Selector — Reference Catalog

Full reference of tools by layer, with when to use each one.

---

## Frontend Frameworks

| Tool | Best For | Avoid When |
|------|---------|-----------|
| **Next.js 14+** | Everything. Default choice. | Never avoid for new projects |
| **Remix** | Form-heavy apps, server-centric | Team isn't familiar with it |
| **Vite + React** | SPAs with a separate backend | You need SSR or SEO |
| **SvelteKit** | Prefer Svelte syntax, small bundles | Coding agent familiarity is lower |
| **Astro** | Content sites, blogs, marketing | App needs heavy interactivity |

**Default: Next.js.** Coding agents have the most training data on it, the ecosystem is deepest, and it scales from landing page to full SaaS.

---

## Databases

| Tool | Type | Best For | Avoid When |
|------|------|---------|-----------|
| **Supabase** | Postgres (managed) | First product, auth included, generous free tier | You need >500GB or complex realtime |
| **PlanetScale** | MySQL (serverless) | High-throughput, branching workflows | You need foreign keys (they're disabled by default) |
| **Neon** | Postgres (serverless) | Branching, pause-when-idle cost savings | Realtime features |
| **Turso** | SQLite (distributed) | Edge deployments, ultra-low latency | Complex relational data |
| **Firebase Firestore** | NoSQL (document) | Realtime features, rapid prototyping | Complex queries, reporting |
| **MongoDB Atlas** | NoSQL (document) | Flexible schema in early exploration | You need joins or complex relations |

**Default: Supabase.** Free tier, auth included, storage included, realtime included, Postgres so your data is portable.

---

## Authentication

| Tool | Best For | Pricing | Avoid When |
|------|---------|---------|-----------|
| **Supabase Auth** | Already using Supabase | Free | You need SSO/SAML, advanced org management |
| **Clerk** | Teams, org management, SSO | Free to 10k MAU | Simple single-user apps (overkill) |
| **Auth0** | Enterprise requirements | Free to 7,500 MAU | Small products (over-engineered) |
| **NextAuth.js** | DIY with Next.js, OAuth only | Free (self-hosted) | You need a hosted dashboard or MFA |
| **Better Auth** | Modern self-hosted alternative to NextAuth | Free | You need managed hosting |

**Default: Supabase Auth** (if using Supabase) or **Clerk** (if you need org features from day one).

---

## Payments

| Tool | Best For | Avoid When |
|------|---------|-----------|
| **Stripe** | Everything. Default choice. | Never for a first product |
| **Lemon Squeezy** | Digital products, tax handling | Physical goods, complex subscription logic |
| **Paddle** | Global tax compliance, EU/VAT | US-only products |
| **Stripe Connect** | Marketplaces (split payments) | Single-vendor products |

**Default: Stripe.** Use Stripe Checkout (hosted page) — not a custom form — for your first product. Add Stripe Billing for subscriptions.

---

## Email (Transactional)

| Tool | Best For | Free Tier | Avoid When |
|------|---------|-----------|-----------|
| **Resend** | Modern API, great DX, React Email | 3,000/month | Very high volume |
| **Postmark** | Deliverability-critical (receipts, auth) | 100/month | Cost-sensitive early stage |
| **SendGrid** | High volume, marketing + transactional | 100/day | Small products (overkill) |
| **Loops** | SaaS onboarding sequences | — | One-off transactional emails |

**Default: Resend.** Works perfectly with Next.js + React Email templates. Free tier is generous.

---

## File Storage

| Tool | Best For | Pricing |
|------|---------|---------|
| **Supabase Storage** | Already using Supabase | Free to 1GB |
| **Cloudflare R2** | High volume, zero egress fees | $0.015/GB stored |
| **AWS S3** | Enterprise, high control | Complex pricing |
| **Uploadthing** | Next.js native, easy DX | Free to 2GB |

**Default: Supabase Storage.** Upgrade to Cloudflare R2 when storage costs become significant.

---

## Hosting / Deployment

| Tool | Best For | Free Tier |
|------|---------|-----------|
| **Vercel** | Next.js (made by the same team) | Generous — most startups never pay |
| **Netlify** | Static sites, alternative to Vercel | Similar to Vercel |
| **Railway** | Full-stack apps, background jobs, cron | $5/month after trial |
| **Fly.io** | Custom Docker, global edge, long-running servers | Pay-as-you-go |
| **Render** | Simple backend services | Free tier available |

**Default: Vercel.** Zero configuration for Next.js. Automatic deployments on push.

---

## Analytics & Product Metrics

| Tool | Best For | Free Tier |
|------|---------|-----------|
| **PostHog** | Product analytics + session recording + feature flags | 1M events/month |
| **Mixpanel** | Retention + funnel analysis | 20M events/month |
| **Plausible** | Privacy-friendly web analytics | Paid only |
| **Vercel Analytics** | Web vitals, already on Vercel | Free |

**Default: PostHog.** Covers product analytics, session recordings, feature flags, and A/B testing in one tool. Add only after you have users.

---

## Background Jobs / Queues

Add these only when you have a specific need (sending emails asynchronously, processing uploads, scheduled reports).

| Tool | Best For |
|------|---------|
| **Inngest** | Event-driven functions, Next.js native |
| **Trigger.dev** | Background jobs with great DX |
| **Vercel Cron Jobs** | Simple scheduled tasks if already on Vercel |
| **Upstash QStash** | Serverless message queue |

**Don't add until:** You have a specific async task that's blocking your UI or needs retrying.

---

## CMS (if you need content management)

| Tool | Best For |
|------|---------|
| **Sanity** | Structured content, customizable studio |
| **Contentful** | Enterprise CMS needs |
| **Notion as CMS** | Internal docs, simple structured content |
| **Markdown files in repo** | Blog posts, documentation |

**Don't add until:** You or a non-technical team member needs to update content without touching code.
