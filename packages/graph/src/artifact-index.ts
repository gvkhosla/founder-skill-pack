import type { ArtifactIndex, ArtifactNode } from "../../core/src/types/artifact.js";

export function findArtifact(index: ArtifactIndex, path: string): ArtifactNode | undefined {
  return index.artifacts.find((artifact) => artifact.path === path);
}

export function staleArtifacts(index: ArtifactIndex): ArtifactNode[] {
  return index.artifacts.filter((artifact) => artifact.freshness === "stale");
}

export function nextRecommendedSkills(index: ArtifactIndex): string[] {
  return [...new Set(index.artifacts.flatMap((artifact) => artifact.recommendedNext))];
}
