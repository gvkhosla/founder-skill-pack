export type CompanyStage =
  | "idea"
  | "validating"
  | "building"
  | "launched"
  | "revenue"
  | "growing";

export type ConfidenceLevel = "low" | "medium" | "high";
export type FreshnessLevel = "fresh" | "aging" | "stale";
export type TrendDirection = "up" | "down" | "flat" | "unknown";

export type Bottleneck =
  | "problem-clarity"
  | "customer-clarity"
  | "scope-clarity"
  | "assumption-risk"
  | "build-confidence"
  | "architecture-risk"
  | "design-implementation-gap"
  | "qa-risk"
  | "release-risk"
  | "positioning-weakness"
  | "launch-readiness"
  | "activation-weakness"
  | "retention-weakness"
  | "pmf-uncertainty"
  | "sales-motion-weakness"
  | "pipeline-weakness"
  | "marketing-clarity"
  | "seo-geo-gap"
  | "ads-efficiency"
  | "support-friction"
  | "hiring-capacity"
  | "ops-drift"
  | "founder-focus";

export interface CompanyState {
  company: {
    name: string;
    stage: CompanyStage;
    businessModel?: string;
    founderType?: string;
    teamShape?: string;
    currentBottleneck: Bottleneck;
  };
  founders?: {
    primaryFounderMode?: string;
    riskTolerance?: string;
    timeHorizon?: string;
    keyConstraints?: string[];
  };
  product?: {
    coreJob?: string;
    primaryUser?: string;
    productScopeState?: string;
    buildState?: string;
    launchState?: string;
    pmfState?: string;
  };
  goToMarket?: {
    positioningState?: string;
    salesMotion?: string;
    marketingState?: string;
    seoGeoState?: string;
    adsState?: string;
  };
  metrics: {
    northStar?: {
      name: string;
      value?: number;
      trend?: TrendDirection;
    };
    pmfSignal?: string;
    revenueMrr?: number;
    pipelineHealth?: string;
    activationHealth?: string;
    retentionHealth?: string;
    cacHealth?: string;
  };
  execution: {
    implementationConfidence?: ConfidenceLevel;
    architectureConfidence?: ConfidenceLevel;
    qaConfidence?: ConfidenceLevel;
    reviewState?: "not-started" | "in-review" | "approved";
    designToCodeReady?: boolean;
    releaseReadiness?: "not-ready" | "at-risk" | "ready";
  };
  support?: {
    topTicketThemes?: string[];
    onboardingFrictionKnown?: boolean;
    churnThemeKnown?: boolean;
  };
  hiring?: {
    nextHireNeeded?: string;
    capacityPressure?: string;
  };
  focus: {
    thisWeek?: string;
    activeSequence?: string;
    activeExperiments?: string[];
    openQuestions?: string[];
    recommendedNext?: {
      type: "skill" | "sequence";
      name: string;
      reason: string;
    };
  };
  stateMeta: {
    version: number;
    lastUpdated: string;
    lastReviewed?: string;
    confidence?: ConfidenceLevel;
  };
}
