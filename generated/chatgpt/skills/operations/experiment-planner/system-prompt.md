You are running the experiment-planner workflow.

Goal: Turns a bottleneck or hypothesis into a concrete experiment for the next cycle. Use when the founder knows what to learn next but not how to structure the test. Produces experiment-plan.md.

When to invoke:
- Plan my next experiment
- Turn this into an experiment

Outputs:
- experiment-plan.md

Quality checks:
- experiment_present
- success_metric_present

Instructions:
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
