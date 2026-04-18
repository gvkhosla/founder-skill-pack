# Build Cycle — Deep Phase Guide

Detailed guidance for each of the six phases. Read this when a phase feels stuck or unclear.

---

## Phase 1 — The Honest Open

**Purpose:** Establish what actually happened, not what was hoped for.

**The core technique:** Listen for the gap between plan and reality. The gap is where learning lives.

**What to listen for:**
- Past tense minimization: "We sort of shipped X" vs. "We shipped X" — the qualifier is data
- Energy in the voice/words: exhaustion, excitement, confusion, numbness — all informative
- What's mentioned first vs. last — people bury the important things at the end
- What's conspicuously absent — what was planned but not mentioned at all?

**The reflection move:**
After the founder answers, the agent reflects back — including what was minimized:
> "You mentioned [X] almost in passing — it sounds like that was harder than you expected. Is that right?"

**The uncomfortable question:** "What are you not saying?"

This is not accusatory. It's an invitation. The best co-founders ask this.

**Common traps:**
- Founder reports activity (shipped X, talked to Y users) but not outcomes — probe for outcomes
- Founder is upbeat about a weak cycle — probe gently for the part that's harder
- Founder is catastrophizing about a normal setback — contextualize without dismissing

---

## Phase 2 — What Users Actually Did

**Purpose:** Separate signal from wishful thinking.

**The hierarchy of evidence:**

| Type | Reliability | Why |
|------|------------|-----|
| Repeated behavior without prompting | Highest | Users vote with time, not words |
| Behavior change over time | High | Shows the product is becoming a habit |
| Unprompted sharing/referral | High | The best PMF signal short of retention |
| Prompted feedback ("what do you think?") | Medium | People are polite; answers are often kind lies |
| Speculation ("I think users would like...") | Zero | This is founder projection, not signal |

**The Mom Test applied to your own data:**
Rob Fitzpatrick's insight: don't ask "do you like it?" Ask "what did you do with it last week?" The same principle applies to reading your own usage data.

**Key questions (ask maximum 3, one at a time):**
1. "Did any users do something you didn't design for — a use case you didn't anticipate?"
2. "Did any users NOT do something you expected them to do?"
3. "Has anyone told someone else about this without you asking them to?"

**The uncomfortable question:** "Is there user behavior you've been avoiding looking at?"

Common examples of avoided data:
- A cohort of users who signed up and never came back (churn you're not looking at)
- A feature you built that nobody uses (you're not checking)
- Users using a workaround instead of your intended flow (you know but you're not addressing it)

**What this phase produces:**
The "Signal" field in the cycle record — the single most meaningful user behavior from this cycle.

---

## Phase 3 — The Honest Assessment

**Purpose:** Know exactly where you stand, without softening.

### MPP Scoring Guide

Score 1–10 against these five criteria. The overall MPP score is the average.

| Criterion | 1–2 | 3–5 | 6–8 | 9–10 |
|-----------|-----|-----|-----|------|
| **Pride Test** | You apologize when showing it | You explain its limitations | You show it without apology | You're excited to show it to someone you admire |
| **Recommendation Test** | No one has told anyone | 1–2 people mentioned it when asked | Users describe it to others unprompted occasionally | Users regularly evangelize it |
| **Emotion Test** | Users complete tasks, feel nothing | Mild satisfaction | Clear positive feeling (relief, confidence) | Genuine delight or transformation |
| **Craft Test** | Obvious gaps and rough edges | Mostly functional, some polish | Clearly someone cared | Every detail considered |
| **Grief Test** | Users would shrug if it disappeared | Some would be mildly inconvenienced | Core users would be frustrated | Best users would be genuinely upset |

**How to deliver an honest score:**
Don't average and present without context. Say:
> "Your MPP score is 4/10. Here's where the points are: Pride Test: 3 (you still apologize for the onboarding). Recommendation Test: 2 (no evidence of unprompted sharing). Emotion Test: 5 (users feel relief when it works but confusion when it doesn't). Craft Test: 4. Grief Test: 3. The biggest single gap is [specific thing]."

### PMF Signal Assessment

**None:** Every cohort churns to zero. No organic sharing. Core users couldn't name a specific thing they'd lose if it disappeared. Action: the product isn't delivering its core value consistently yet.

**Faint:** Retention is declining but not to zero. 1–2 users have mentioned it to someone. At least one user can articulate what they'd lose. Action: the signal is there — find it and amplify it.

**Building:** A core group retains (D30 > 20%). Word of mouth happening without incentive. Users can articulate specific value. Action: understand what the retaining cohort has in common. Build more of what they love.

**Clear:** Retention curve has flattened (some cohort stabilizes). Net revenue retention > 100%. Users proactively share. Would-be churned users request to stay. Action: scale what's working.

**The honest question for this phase:**
"If this score doesn't improve next cycle, what does that mean for the product?" Don't answer for them — let the founder sit with it for a moment.

---

## Phase 4 — The Pattern Read

**Purpose:** Find what individual cycles can't show.

**Why this phase exists:**
Single data points are noise. Patterns are signal. The build-cycle rhythm is designed so that Phase 4 becomes more valuable with every cycle you complete.

**When you have < 3 cycles:** Skip this phase. Say: "We don't have enough cycles yet to read patterns — that starts next cycle."

**When you have 3+ cycles:**

**Momentum pattern:**
Plot the MPP score across cycles. Is it trending up, flat, or down?
- Trending up (even slowly): keep going, you're learning
- Flat for 2+ cycles: something is stuck — what experiment have you NOT tried?
- Declining: something is getting worse — find it before continuing

**Effort pattern:**
What type of work has consumed the most time across cycles? Is it producing signal?

Common misaligned effort patterns:
- "We keep improving the UI but retention isn't moving" → UI isn't the constraint
- "We keep talking to the same 3 users" → selection bias in feedback
- "We keep building features but haven't done a single sales conversation" → avoiding the harder thing

**Avoidance pattern:**
Is there something the founder has mentioned in multiple cycles but never done?

Examples:
- "We keep saying we should talk to churned users" (3 cycles, hasn't happened)
- "We keep planning to run the Facebook ads" (4 cycles, budget unspent)

Name it. Don't lecture — just surface it: "I've noticed you've mentioned [X] in the last [N] cycles but it hasn't happened. What's getting in the way?"

**The stagnation trigger:**
3+ consecutive cycles with:
- Flat or declining MPP score AND
- PMF signal not improving

→ Don't continue to Phase 5. Run `failure-navigator` first. See [failure-modes.md](failure-modes.md).

---

## Phase 5 — One Decision

**Purpose:** Clarity. Every cycle ends with one commitment.

**Why only one:**
The compounding effect of consistent, focused effort on one thing is greater than scattered effort across five things. This is the Essentialism principle applied to product iteration.

**The format (always the same):**
> "The most important thing you can do in the next [cycle period] is [specific action], because [reason grounded in this cycle's findings]. You'll know it worked if [specific observable signal]."

**What makes a good commitment:**
- **Specific enough to start tomorrow morning** — "talk to users" is not a commitment; "call 3 churned users this week and ask them what they tried before giving up" is
- **Connected to the cycle's signal** — it flows from what was learned, not from what feels comfortable
- **Has a clear success signal** — you know if it worked or not by the next cycle

**What makes a bad commitment:**
- It's what the founder would have done anyway (not a decision, a habit)
- It's a list ("improve onboarding AND add the export feature AND do outreach")
- It's a hope ("get more users") rather than an action ("post in [specific community] with [specific message] and track signups from that post")

**The co-founder check:**
After presenting the commitment: "Does this feel right — or is there something the data is pointing to that I'm missing?"

This is the most important question in Phase 5. Sometimes the founder's instinct sees something the analysis doesn't. Honor it.

---

## Phase 6 — The Record

**Purpose:** The work of the cycle becomes an asset. The asset compounds.

**What gets written:** `cycles/YYYY-MM-DD.md` using [cycle-template.md](cycle-template.md).

**What gets updated:** `founder-context.md` — specifically:
- Stage (if it changed)
- North star metric current value
- MPP score
- PMF signal
- Current focus (the commitment from Phase 5)
- Last cycle date and key learning

**The ship's log principle:**
The cycle record is never edited after it's written. It's a permanent record — what you knew and decided at this point in time. Future cycles can reference it, but they don't change it.

This is uncomfortable when you look back and see a decision that was wrong. That's the point. The record of wrong decisions, honestly kept, is the most valuable learning artifact a founder can have.

**Reading back:**
Every 5 cycles, the agent reads the last 5 records before opening the current cycle. It looks for:
- A prediction that proved wrong (what did that reveal about your assumptions?)
- A pattern you can now see that you couldn't at the time
- Something you learned that contradicts something you believed earlier

This is where compounding fully kicks in. The founder who has 20 cycle records has a compounding intellectual advantage over the founder with none.
