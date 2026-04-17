import type { CompanyState } from "../../core/src/types/state.js";

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export const defaultCompanyState: CompanyState = {
  company: {
    name: "New Startup",
    stage: "idea",
    businessModel: "unknown",
    founderType: "unknown",
    teamShape: "solo",
    currentBottleneck: "problem-clarity",
  },
  founders: {
    primaryFounderMode: "founder-led",
    riskTolerance: "medium",
    timeHorizon: "90-days",
    keyConstraints: [],
  },
  product: {
    coreJob: "",
    primaryUser: "",
    productScopeState: "undefined",
    buildState: "not-started",
    launchState: "not-ready",
    pmfState: "pre-pmf",
  },
  goToMarket: {
    positioningState: "not-started",
    salesMotion: "founder-led",
    marketingState: "light",
    seoGeoState: "not-started",
    adsState: "not-started",
  },
  metrics: {
    northStar: {
      name: "",
      trend: "unknown",
    },
    pmfSignal: "none",
    pipelineHealth: "unknown",
    activationHealth: "unknown",
    retentionHealth: "unknown",
    cacHealth: "unknown",
  },
  execution: {
    implementationConfidence: "low",
    architectureConfidence: "low",
    qaConfidence: "low",
    reviewState: "not-started",
    designToCodeReady: false,
    releaseReadiness: "not-ready",
  },
  support: {
    topTicketThemes: [],
    onboardingFrictionKnown: false,
    churnThemeKnown: false,
  },
  hiring: {
    nextHireNeeded: "unknown",
    capacityPressure: "low",
  },
  focus: {
    activeExperiments: [],
    openQuestions: [],
  },
  stateMeta: {
    version: 1,
    lastUpdated: today(),
    lastReviewed: today(),
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
      lastUpdated: today(),
    },
  };
}

export function setRecommendedNext(
  state: CompanyState,
  recommendation: NonNullable<CompanyState["focus"]["recommendedNext"]>,
): CompanyState {
  return {
    ...state,
    focus: {
      ...state.focus,
      recommendedNext: recommendation,
    },
    stateMeta: {
      ...state.stateMeta,
      lastUpdated: today(),
    },
  };
}
