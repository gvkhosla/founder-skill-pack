import type { Bottleneck, CompanyState } from "../../core/src/types/state.js";

export function detectPrimaryBottleneck(state: CompanyState): Bottleneck {
  if (state.company.stage === "idea") return "problem-clarity";

  if (
    state.company.stage === "validating" &&
    (!state.focus.recommendedNext || state.company.currentBottleneck === "customer-clarity")
  ) {
    return "customer-clarity";
  }

  if (
    state.company.stage === "building" &&
    (state.execution.implementationConfidence === "low" ||
      state.company.currentBottleneck === "build-confidence")
  ) {
    return "build-confidence";
  }

  if (state.execution.releaseReadiness === "not-ready") {
    return "release-risk";
  }

  if (state.metrics.pmfSignal === "faint" && state.company.stage === "launched") {
    return "pmf-uncertainty";
  }

  if (state.metrics.pipelineHealth === "weak") {
    return "sales-motion-weakness";
  }

  return state.company.currentBottleneck;
}
