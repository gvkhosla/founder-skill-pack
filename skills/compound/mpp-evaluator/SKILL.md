---
name: mpp-evaluator
description: Gives an honest, scored assessment of whether your product has crossed the Minimum Proud Product threshold — and if not, exactly what's holding it back. Use every 3–4 build cycles for a deep MPP review, or anytime you want an honest read on whether you're proud of what you've built. Produces an mpp-scorecard.md with five criteria scored, a composite score, and the single most important gap to close.
phase: compound
version: 1.0.0
---

# MPP Evaluator

## What Is MPP?

**Minimum Proud Product** — the minimum version of your product you'd be genuinely proud to show to someone you deeply respect. Not just functional. Not just shipped. Something where a user would feel something.

The distance between MVP (viable) and MPP (proud) is where most products plateau. Viable means it works. Proud means someone's life is meaningfully better because of it.

You've hit MPP when:
- You'd be embarrassed *not* to show it to someone you admire
- At least one user has described it to someone else without being asked
- The product creates a feeling, not just a function
- There's evidence in the details that someone cared deeply

## Quick Start

Say: **"Evaluate my MPP"** or **"Am I proud of this?"** or **"Run the MPP scorecard"**

Best run: every 3–4 build cycles, or before a major share/launch moment.
Output: `mpp-scorecard.md` — five criteria scored, composite score, and the one gap that matters most.

## What You'll Get

`mpp-scorecard.md` — honest scores (not rounded up), the composite score, the specific gap holding you back, and a concrete description of what MPP looks like for *your specific product*.

> **Example output excerpt:**
> **Composite MPP Score: 5.2/10**
> **The gap that matters most:** Users complete the core flow but feel nothing afterward — task done, not problem solved. The confirmation screen is functional but doesn't make the user feel like they've accomplished something meaningful. That's the difference between 5 and 7.

## The Five Criteria

The agent scores each criterion 1–10 based on your answers to specific questions. Scores are honest — not encouraging. A 3 is a 3.

---

### Criterion 1 — The Pride Test (1–10)

**Question:** "If you bumped into the founder you most admire tomorrow, would you show them your product without apologizing or explaining its limitations first?"

| Score | Description |
|-------|-------------|
| 1–2 | You actively avoid showing it |
| 3–4 | You show it but immediately explain what it's missing |
| 5–6 | You show it and feel neutral — it does the job |
| 7–8 | You show it without apology |
| 9–10 | You're excited to show it — you'd send them the link unprompted |

**The agent also asks:** "What would you need to change to show it without apology?"
The answer to this question usually identifies the MPP gap more precisely than the score does.

---

### Criterion 2 — The Recommendation Test (1–10)

**Question:** "Has any user described your product to someone else without you asking them to — in a message, a conversation, a post, or a mention?"

| Score | Description |
|-------|-------------|
| 1–2 | No evidence of unprompted sharing |
| 3–4 | 1 instance you can recall — possibly prompted |
| 5–6 | 2–3 instances of genuine sharing |
| 7–8 | Regular unprompted mentions — a consistent pattern |
| 9–10 | Users actively recruit others; word-of-mouth is measurable |

**Why this matters:** No amount of polish you can see in the product compensates for the absence of this signal. Unprompted sharing is the user saying "this is worth someone else's time." That's a high bar — and a precise one.

---

### Criterion 3 — The Emotion Test (1–10)

**Question:** "When a user finishes a key task in your product, what do they feel? Function only, mild satisfaction, real positive emotion, or something close to delight?"

| Score | Description |
|-------|-------------|
| 1–2 | Users complete tasks; nothing else |
| 3–4 | Mild satisfaction — it worked |
| 5–6 | Clear positive feeling (relief, confidence, ease) |
| 7–8 | Strong positive feeling the user can articulate |
| 9–10 | Genuine delight, transformation, or joy |

**The follow-up question:** "Walk me through what a user does immediately after completing the core task. What's the last thing they see, and what do you think they feel in that moment?"

The "last thing they see" is almost always where emotional resonance is won or lost. Most products end the core flow with a generic confirmation screen. That moment is an opportunity that almost nobody takes.

---

### Criterion 4 — The Craft Test (1–10)

**Question:** "Is there evidence in the product that someone cared deeply about the details?"

This is subjective — but not arbitrary. Craft shows in:
- Copy that sounds like a person, not a product
- Error messages that are helpful instead of apologetic
- Edge cases that are handled gracefully
- Loading states that don't break the flow
- Empty states that tell you what to do next

| Score | Description |
|-------|-------------|
| 1–2 | Obvious gaps, placeholder copy, unhandled states |
| 3–4 | Mostly functional, some rough edges visible |
| 5–6 | Clean, but no evidence of caring about details |
| 7–8 | Details clearly considered — copy is good, states are handled |
| 9–10 | Every touchpoint feels intentional; you notice you didn't have to explain anything |

---

### Criterion 5 — The Grief Test (1–10)

**Question:** "If your product disappeared tomorrow, how would your best user react?"

| Score | Description |
|-------|-------------|
| 1–2 | They'd shrug — they'd find an alternative quickly |
| 3–4 | Mildly inconvenient — they'd miss it for a week |
| 5–6 | Frustrated — it would create real work for them |
| 7–8 | Genuinely upset — they'd reach out to ask what happened |
| 9–10 | Devastated — they'd feel it in their daily work immediately |

**The Sean Ellis connection:** This is the operational version of Sean Ellis's "how would you feel if you could no longer use this product?" survey. That survey asks for a response category (very disappointed, somewhat, not disappointed). The grief test surfaces the same signal through a scenario instead of a form — often more honestly.

---

## Composite Score and Interpretation

**Composite MPP Score = average of five criteria**

| Score | Interpretation | What It Means |
|-------|--------------|--------------|
| 1–3 | **Early MVP** | Viable but not yet delivering real value consistently. Focus on the core loop before anything else. |
| 4–5 | **Functional MVP** | The job gets done but nothing more. Users tolerate it more than they love it. This is where most products plateau. |
| 6–7 | **Approaching MPP** | Signs of something real. Some users show strong signal. Identify what makes them different and build for more of that. |
| 8–9 | **MPP Achieved** | You'd be proud to show this to anyone. Some users evangelize. Now focus on scale and PMF signals. |
| 10 | **Rare** | Reserved for products that create category-defining moments. Very few products ever score here. |

---

## Output

`mpp-scorecard.md`:

```markdown
# MPP Scorecard — [YYYY-MM-DD]

## Scores
| Criterion | Score | Key Evidence |
|-----------|-------|-------------|
| Pride Test | [X]/10 | [One sentence] |
| Recommendation Test | [X]/10 | [One sentence] |
| Emotion Test | [X]/10 | [One sentence] |
| Craft Test | [X]/10 | [One sentence] |
| Grief Test | [X]/10 | [One sentence] |

**Composite: [X.X]/10**

## What MPP Looks Like for [Your Product]
[2–3 sentences describing exactly what your product needs to be to earn MPP. Specific to your product — not generic.]

## The One Gap
[The single criterion holding back the score the most, and the specific thing to address.]

## What Changes If You Close This Gap
[One sentence — what happens to the product and to users if this specific gap is closed.]
```

## Related Skills

- Use **build-cycle** (the primary ritual) — MPP score is assessed every cycle
- Use **failure-navigator** if MPP score is flat or declining across 3+ cycles
- Use **founder-partner** (Partner phase) — the partner uses your MPP trajectory to guide overall strategy
