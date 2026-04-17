---
name: experiment-planner
description: Turns a bottleneck or hypothesis into a concrete experiment for the next cycle. Use when the founder knows what to learn next but not how to structure the test. Produces experiment-plan.md.
---

# experiment-planner

Use this when the user clearly wants the experiment-planner workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Plan my next experiment
- Turn this into an experiment

## Expected outputs
- experiment-plan.md

## Quality checks
- experiment_present
- success_metric_present

## Workflow
# Experiment Planner

Produce `experiment-plan.md` with:
1. Hypothesis
2. Test design
3. Success metric
4. Time horizon
5. Decision rule if it works
6. Decision rule if it fails

Rules:
- keep the experiment cheap and fast
- optimize for learning, not theater
