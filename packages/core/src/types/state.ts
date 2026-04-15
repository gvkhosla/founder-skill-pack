export type CompanyStage =
  | "idea"
  | "validating"
  | "building"
  | "launched"
  | "revenue"
  | "growing";

export type ConfidenceLevel = "low" | "medium" | "high";
export type FreshnessLevel = "fresh" | "aging" | "stale";

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
  metrics: {
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
    releaseReadiness?: "not-ready" | "at-risk" | "ready";
  };
  focus: {
    thisWeek?: string;
    activeSequence?: string;
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
    confidence?: ConfidenceLevel;
  };
}
