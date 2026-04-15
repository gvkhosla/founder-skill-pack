import type { ConfidenceLevel, FreshnessLevel } from "./state.js";

export interface ArtifactNode {
  path: string;
  createdBy: string;
  createdAt: string;
  dependsOn: string[];
  feedsInto: string[];
  confidence: ConfidenceLevel;
  freshness: FreshnessLevel;
  supersededBy?: string | null;
  recommendedNext: string[];
}

export interface ArtifactIndex {
  artifacts: ArtifactNode[];
}
