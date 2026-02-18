---
name: problem-validator
description: Stress-tests whether your problem is real, painful, and worth solving before you build anything. Use when you have a product idea and want to validate it's solving a genuine problem, or when you're unsure if people actually care. Produces a problem-validation-report.md with a confidence score and clear go/no-go signal.
phase: strategy
version: 1.0.0
---

# Problem Validator

## Quick Start

Say: **"Validate my problem"** or **"Is this problem worth solving?"**

You'll answer 5 questions. Total time: 10 minutes.
Output: `problem-validation-report.md` — a structured assessment with a confidence score and an honest go/no-go recommendation.

## What You'll Get

A `problem-validation-report.md` containing: your problem restated precisely, evidence for and against it being real, the five validation tests scored, a confidence level (Low / Medium / High), and a clear recommendation — build, validate more, or pivot.

> **Example output excerpt:**
> **Problem:** Independent yoga instructors lose 3–5 hours per week manually following up with students who haven't rebooked.
> **Confidence: Medium**
> ✅ Frequency: Problem occurs weekly for the target user
> ✅ Active workaround exists (spreadsheets + manual DMs) — strong signal
> ⚠️ Intensity: Pain is real but not acute — instructors tolerate it
> ❌ Willingness to pay: Unclear — no evidence yet of spending on this category
> **Recommendation:** Validate willingness to pay before building. Talk to 5 instructors. Ask if they've ever paid for anything to reduce admin time.

## The Expert Judgment Embedded

This skill applies **The Mom Test** (Rob Fitzpatrick) combined with **Problem-Solution Fit** criteria from Steve Blank's customer development methodology. Most founders validate problems by asking "Would you use this?" — which is useless because people are polite. This skill validates against observable signals: active workarounds, money already being spent, frequency, and intensity of the pain.

The uncomfortable truth: most product ideas fail the problem validation test not because the problem is fake, but because it's a *vitamin* (nice to have) rather than a *painkiller* (urgent to fix). This skill distinguishes between the two.

## The Process

### Step 1: Restate the Problem Precisely

The agent asks you to complete: "Right now, [specific user] has to [painful thing] every [frequency], which causes [consequence]."

Vague problems fail validation. Precise problems succeed or fail clearly.

### Step 2: The Five Validation Tests

The agent scores your problem against five criteria (each 0–2 points, max score 10):

| Test | Signal | Score |
|------|--------|-------|
| **Frequency** | Does this happen daily/weekly, or once a year? | 0–2 |
| **Active workaround** | Are people already solving it with a hack? | 0–2 |
| **Money being spent** | Is anyone paying (time or cash) to address this? | 0–2 |
| **Intensity** | If the problem disappeared tomorrow, would people notice immediately? | 0–2 |
| **Narrow target** | Do you know *exactly* who has this problem — by job title, situation, and context? | 0–2 |

**Confidence levels:**
- 8–10: High — strong signal, safe to scope and build
- 5–7: Medium — real problem, but validate before building
- 0–4: Low — rethink the problem or the user before proceeding

### Step 3: Evidence Gathering

The agent asks what evidence you already have:
- Have you talked to anyone who has this problem?
- Have you found Reddit threads, forum posts, or reviews complaining about it?
- Have you found existing (even bad) solutions people are paying for?

Evidence you don't have becomes the validation to-do list.

### Step 4: Output

`problem-validation-report.md` with all tests scored, evidence logged, confidence level, and recommendation.

## Worked Example

**Founder:** Building an AI tool to help HR managers write job descriptions faster.

**Output:**
> **Problem:** HR managers at companies with 20–200 employees spend 45–90 minutes writing each job description from scratch, often producing inconsistent quality across roles.
>
> **Validation Scores:**
> ✅ Frequency (2/2): Writing JDs is recurring — every new hire triggers this
> ✅ Active workaround (2/2): HR managers copy old JDs, use Google templates, or ask ChatGPT — strong signal the problem is real
> ✅ Money being spent (2/2): Tools like Workable and Greenhouse exist and are paid for — adjacent spend confirmed
> ⚠️ Intensity (1/2): JD writing is annoying, not critical — HR managers tolerate it, rarely call it their biggest problem
> ✅ Narrow target (2/2): You've identified the exact user (HR managers, 20–200 person companies, no dedicated recruiting team)
>
> **Score: 9/10 — High Confidence**
>
> **Recommendation:** Build. The active workaround signal (people using ChatGPT already) is the strongest possible validation. You're not creating demand — you're serving it better. Start with `mvp-scoper` to define exactly what to build first.

## Related Skills

- Use **mvp-scoper** after this — once the problem is validated, scope what to build
- Use **customer-hypothesis** in parallel — sharpens who exactly has this problem
- Use **assumption-mapper** after this — maps your remaining unknowns to validation methods
- Use **founder-partner** if your score is Medium and you're not sure whether to build or validate more
