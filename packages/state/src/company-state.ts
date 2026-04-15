import type { CompanyState } from "../../core/src/types/state.js";

export const defaultCompanyState: CompanyState = {
  company: {
    name: "New Startup",
    stage: "idea",
    currentBottleneck: "problem-clarity",
  },
  metrics: {},
  execution: {
    implementationConfidence: "low",
    architectureConfidence: "low",
    qaConfidence: "low",
    releaseReadiness: "not-ready",
  },
  focus: {},
  stateMeta: {
    version: 1,
    lastUpdated: new Date().toISOString().slice(0, 10),
    confidence: "low",
  },
};

export function updateBottleneck(
  state: CompanyState,
  currentBottleneck: CompanyState["company"]["currentBottleneck"],
): CompanyState {
  return {
    ...state,
    company: {
      ...state.company,
      currentBottleneck,
    },
    stateMeta: {
      ...state.stateMeta,
      lastUpdated: new Date().toISOString().slice(0, 10),
    },
  };
}
