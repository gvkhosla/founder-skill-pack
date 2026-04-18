import type { Bottleneck, CompanyState } from "../../core/src/types/state.js";

export function detectPrimaryBottleneck(state: CompanyState): Bottleneck {
  if (state.execution.releaseReadiness === "at-risk") return "release-risk";
  if (state.company.currentBottleneck === "qa-risk") return "qa-risk";
  if (state.execution.implementationConfidence === "low" && state.company.stage === "building") return "build-confidence";
  if (state.execution.architectureConfidence === "low" && state.execution.implementationConfidence !== "low") {
    return "architecture-risk";
  }
  if (state.metrics.retentionHealth === "weak") return "retention-weakness";
  if (state.metrics.activationHealth === "weak") return "activation-weakness";
  if (state.metrics.pipelineHealth === "weak") return "pipeline-weakness";
  if (state.metrics.cacHealth === "weak") return "ads-efficiency";
  if ((state.focus.openQuestions?.length ?? 0) >= 5 && !state.focus.thisWeek) return "founder-focus";
  return state.company.currentBottleneck;
}
