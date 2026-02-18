---
name: ux-heuristics-reviewer
description: Reviews your existing product UI against 10 proven UX principles and identifies the issues most likely to cause user confusion or drop-off. Use after building your first screens, when users report confusion, or before showing the product to anyone important. Produces a ux-review.md with prioritized issues and specific fixes.
phase: design
version: 1.0.0
---

# UX Heuristics Reviewer

## Quick Start

Say: **"Review my UI"** or **"Check my UX"** and describe your current screens or share screenshots.

You'll describe the key screens. Total time: 15 minutes.
Output: `ux-review.md` — a prioritized list of UX issues with the specific fix for each one.

## What You'll Get

A `ux-review.md` containing: a score for each of the 10 heuristics (1–5), the top 3–5 issues most likely to cause real user problems, a specific fix for each issue, and a prioritized fix order.

> **Example output excerpt:**
> **Issue #1 (Critical) — Visibility of System Status**
> Users submit the booking form and see a blank screen for 2 seconds with no feedback.
> **Why it matters:** Users assume the form didn't submit and click again — causing duplicate bookings.
> **Fix:** Add a loading state immediately on submit: spinner + "Booking your session…" text. Takes 30 minutes to implement. Fixes immediately.

## The Expert Judgment Embedded

This skill applies **Nielsen's 10 Usability Heuristics** — the most validated framework in UX, developed by Jakob Nielsen in 1994 and still the gold standard for identifying usability problems. They don't go out of date because they describe how human attention and cognition work, which doesn't change.

Most non-technical founders' UX issues fall into three heuristics almost every time: visibility of system status (users don't know what's happening), error prevention (the UI lets users make mistakes that could be avoided), and help and documentation (users get stuck and don't know what to do). This skill finds which ones apply to your specific product and gives you the fix.

## The Process

### Step 1: Screen Inventory

The agent asks you to describe or list your current screens — what's on each one, what the user can do, and what happens when they take key actions.

If you have screenshots, describe them in detail. The agent works from your description.

### Step 2: Score Against 10 Heuristics

Each heuristic is scored 1–5 (5 = no issues, 1 = serious problems):

| # | Heuristic | What It Checks |
|---|-----------|----------------|
| 1 | **Visibility of system status** | Does the UI always show users what's happening? |
| 2 | **Match with real world** | Does the language and flow match how users think — not how you built it? |
| 3 | **User control and freedom** | Can users undo mistakes and exit unwanted states easily? |
| 4 | **Consistency and standards** | Do similar things look and work the same way throughout? |
| 5 | **Error prevention** | Does the design prevent problems before they happen? |
| 6 | **Recognition over recall** | Do users recognize options rather than having to remember them? |
| 7 | **Flexibility and efficiency** | Can experienced users take shortcuts? (Usually not critical for MVPs) |
| 8 | **Aesthetic and minimalist design** | Does every element earn its place, or is there visual noise? |
| 9 | **Help users recognize/recover from errors** | Are error messages clear and actionable? |
| 10 | **Help and documentation** | When users get stuck, can they figure out what to do? |

### Step 3: Triage by Impact

The agent scores each issue by:
- **Severity:** Will this cause user failure (Critical), confusion (Major), or mild annoyance (Minor)?
- **Frequency:** Will this affect every user, most users, or edge cases?
- **Fix effort:** 30 minutes, half a day, or a significant redesign?

**Priority = (Severity × Frequency) ÷ Fix Effort**

### Step 4: Specific Fixes

For each Critical and Major issue, the agent gives the specific fix — not "improve the onboarding" but "Add a 3-step progress indicator to the setup flow, using text labels not icons, positioned at the top of each screen."

### Step 5: Output

`ux-review.md` — heuristic scores, issue list by priority, and specific fixes with effort estimates.

## Worked Example

**Founder:** Built a food waste logging tool for restaurant managers. Has 3 screens: login, daily log entry, and weekly summary.

**Output (top issues):**
> **Issue #1 — Critical | Visibility of System Status (Score: 1/5)**
> After a manager submits the daily waste log, the form just clears. No confirmation, no total, nothing.
> **Impact:** Managers don't know if their entry was saved. In testing, 3 out of 5 managers re-entered data "just in case."
> **Fix:** After submit, replace the form with a confirmation card: "✓ Today's log saved — $142 in waste recorded." Include an "Edit" link. 45-minute fix.
>
> **Issue #2 — Critical | Error Prevention (Score: 2/5)**
> The waste quantity field accepts any number. A manager accidentally entered 500 lbs of butter (meant 5). No validation or warning.
> **Fix:** Add a soft warning when an entry is >3× the category average: "That's unusually high — did you mean [X]?" Don't block submission, just confirm. 1-hour fix.
>
> **Issue #3 — Major | Match with Real World (Score: 2/5)**
> The category labels use inventory management terms ("SKU category," "unit measure") that kitchen staff don't use. They use "proteins," "produce," "dairy."
> **Fix:** Rename all categories to kitchen language. Takes 20 minutes. Do this immediately.
>
> **Issue #4 — Major | Aesthetic and Minimalist Design (Score: 2/5)**
> The weekly summary shows 12 data points per row. Managers can't read it during a busy service.
> **Fix:** Default view shows only total waste + top 3 waste categories. Add "See full breakdown" link. Redesign effort: 2 hours.
>
> **Priority fix order:** #3 (20 min, high impact) → #1 (45 min, critical) → #2 (1 hr) → #4 (2 hr)

## Related Skills

- Use **ux-flow-designer** before building — maps the flows this skill later reviews
- Use **design-direction-setter** before building — sets the visual standard this skill evaluates against
- Use **build-cycle** (Compound phase) after testing with users — combines UX review with real usage learnings
- Use **mpp-evaluator** (Compound phase) — UX quality is one of the MPP criteria
