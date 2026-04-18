# MVP Scoper — Reference

Deeper frameworks and heuristics used by this skill.

---

## The Jobs To Be Done Framework

Popularized by Clayton Christensen. The core insight: customers don't buy products — they "hire" them to get a job done in their life.

**The job has three components:**
1. **Functional:** What does it literally do? ("Send a booking link")
2. **Emotional:** How does it make them feel? ("Confident I won't miss appointments")
3. **Social:** How does it affect their social context? ("Look professional to clients")

A great MVP nails the functional job completely. Emotional and social jobs become important as the product matures.

**The "Finally" Test:**
Ask the user to complete: "[User] can finally [job]." The word "finally" forces you to name the prior frustration. If you can't complete the sentence, the job isn't clear enough.

---

## The Kano Model — Feature Prioritization

Noriaki Kano's model categorizes features by how they affect user satisfaction:

| Category | If Missing | If Present | MVP Decision |
|----------|-----------|-----------|-------------|
| **Must-haves** (Basic needs) | Extreme dissatisfaction | Taken for granted | Include always |
| **Performance** (Linear) | Dissatisfaction proportional | Satisfaction proportional | Include minimum version |
| **Delighters** (Excitement) | No dissatisfaction | Delight | Cut from MVP |
| **Indifferent** | No impact | No impact | Cut always |
| **Reverse** | No dissatisfaction | Dissatisfaction | Never build |

**For MVP scoping:** Include must-haves + minimum viable version of one performance feature. Cut all delighters.

**The hard truth:** Most features founders want to build are delighters. They imagine users discovering them and being impressed. In reality, users need the must-haves to work perfectly before they care about delighters.

---

## Scope Creep Prevention — The Explicit Cut List

The most powerful tool in MVP scoping is making the cut list explicit.

**Why it works:**
- Unspoken cuts are forgotten cuts. Teams silently add them back.
- Written cuts create accountability. You have to consciously decide to un-cut something.
- The cut list becomes a roadmap for what comes *after* the MVP.

**Template for the cut list section:**
```
## Not in Scope for MVP

The following are valuable features we've consciously decided NOT to build yet.
Adding any of these before the success signal is achieved is a scope violation.

- [Feature A] — reason for cutting
- [Feature B] — reason for cutting
- [Feature C] — reason for cutting

These will be considered for the next phase after [success signal] is confirmed.
```

---

## Defining the Success Signal — The Behavioral Test

The success signal is the most commonly botched part of MVP scoping. Founders pick signals that are:
- Too easy (any signup counts)
- Too late (revenue, after months of usage)
- Unobservable (users "understand the value")
- Sentiment-based (users say they like it)

**The Behavioral Test:**
A good success signal describes an action you can *observe* a user taking without being told to. Not what they say. What they do.

**The 2-Week Achievability Test:**
Can you realistically see this signal within 2 weeks of having 5 users? If not, it's too ambitious or too late.

**Examples:**

| Bad Signal | Good Signal |
|-----------|------------|
| "Users say they'd recommend it" | "2 users share the product link with someone else unprompted" |
| "We get our first paying customer" | "A user exports their weekly report and brings it to a staff meeting" |
| "Good feedback from users" | "Users complete the core flow 3 days in a row without asking for help" |
| "Retention over 30%" | "At least half of week-1 users log in again in week 2" |

---

## Common MVP Scoping Mistakes

**1. The "While We're At It" Trap**
"We're already building the booking flow, so we might as well add recurring appointments."
*Fix:* Explicit cut list makes this a conscious violation, not a casual add.

**2. The Polish Trap**
"We need the design to be perfect before we show anyone."
*Fix:* Design only what's needed for the success signal. Founders confuse polish with MPP. MPP is about getting the core job right, not visual perfection.

**3. The Hedging Trap**
"We'll build both the individual and team versions so we can appeal to more users."
*Fix:* Pick one. The narrower the user, the sharper the scoping.

**4. The Infrastructure Trap**
"We need to build a scalable architecture before we can build the features."
*Fix:* Build for 100 users, not 100,000. You don't have 100 users yet.

**5. The Validation Trap**
"We need to validate before we build."
*Fix:* The MVP IS the validation. Build the minimum, then validate with real usage.
