import type { CompanyState, Bottleneck } from "../../core/src/types/state.js";

const bottleneckToRecommendation: Record<
  Bottleneck,
  { type: "skill" | "sequence"; name: string; reason: string }
> = {
  "problem-clarity": {
    type: "skill",
    name: "problem-validator",
    reason: "The company still needs sharper evidence that the problem is real.",
  },
  "customer-clarity": {
    type: "skill",
    name: "customer-hypothesis",
    reason: "Customer definition is the main blocker to everything downstream.",
  },
  "scope-clarity": {
    type: "skill",
    name: "mvp-scoper",
    reason: "The founder needs a clearer build boundary before moving forward.",
  },
  "assumption-risk": {
    type: "skill",
    name: "assumption-mapper",
    reason: "The riskiest assumptions should be surfaced before deeper execution.",
  },
  "build-confidence": {
    type: "skill",
    name: "implementation-planner",
    reason: "The founder knows what to build, but not yet how to build it confidently.",
  },
  "architecture-risk": {
    type: "skill",
    name: "architecture-reviewer",
    reason: "Architecture risk is the main build blocker right now.",
  },
  "design-implementation-gap": {
    type: "skill",
    name: "design-to-code-brief",
    reason: "The product vision needs a stronger build-ready handoff.",
  },
  "qa-risk": {
    type: "skill",
    name: "qa-verifier",
    reason: "Quality confidence is too low for safe forward motion.",
  },
  "release-risk": {
    type: "skill",
    name: "release-readiness-auditor",
    reason: "Launch timing is constrained by release confidence.",
  },
  "positioning-weakness": {
    type: "skill",
    name: "positioning-writer",
    reason: "Message clarity is the biggest bottleneck right now.",
  },
  "launch-readiness": {
    type: "skill",
    name: "launch-plan-builder",
    reason: "The next leverage point is preparing a concrete launch motion.",
  },
  "activation-weakness": {
    type: "sequence",
    name: "pmf-recovery",
    reason: "Activation issues should be handled as a coordinated PMF sequence.",
  },
  "retention-weakness": {
    type: "skill",
    name: "retention-loop-designer",
    reason: "The company needs to strengthen repeat usage before adding more growth.",
  },
  "pmf-uncertainty": {
    type: "skill",
    name: "pmf-signal-reader",
    reason: "PMF signal quality should be clarified before compounding effort elsewhere.",
  },
  "sales-motion-weakness": {
    type: "skill",
    name: "pipeline-reviewer",
    reason: "There is not yet a strong or repeatable sales motion.",
  },
  "pipeline-weakness": {
    type: "skill",
    name: "pipeline-reviewer",
    reason: "Pipeline quality is the clearest commercial bottleneck.",
  },
  "marketing-clarity": {
    type: "skill",
    name: "messaging-architect",
    reason: "Marketing cannot compound without a clearer message architecture.",
  },
  "seo-geo-gap": {
    type: "skill",
    name: "seo-geo-strategist",
    reason: "Search visibility is an obvious strategic gap right now.",
  },
  "ads-efficiency": {
    type: "skill",
    name: "cac-diagnostician",
    reason: "Paid acquisition efficiency needs diagnosis before more spend.",
  },
  "support-friction": {
    type: "skill",
    name: "support-insights-reader",
    reason: "Support signals are not yet being translated into product decisions.",
  },
  "hiring-capacity": {
    type: "skill",
    name: "first-hire-brief",
    reason: "Team capacity is the main limiter to execution speed.",
  },
  "ops-drift": {
    type: "skill",
    name: "weekly-founder-review",
    reason: "The system needs a tighter operating rhythm and decision cadence.",
  },
  "founder-focus": {
    type: "skill",
    name: "founder-partner",
    reason: "The founder needs focus and prioritization more than another isolated artifact.",
  },
};

export function recommendNextMove(state: CompanyState) {
  return bottleneckToRecommendation[state.company.currentBottleneck];
}
