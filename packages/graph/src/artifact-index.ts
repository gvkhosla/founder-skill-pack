import fs from "node:fs";
import path from "node:path";
import type { ArtifactIndex, ArtifactNode } from "../../core/src/types/artifact.js";
import type { ConfidenceLevel, FreshnessLevel } from "../../core/src/types/state.js";
import type { CanonicalSkill } from "../../core/src/types/skill.js";

function toDateString(value: Date): string {
  return value.toISOString().slice(0, 10);
}

function normalizeArtifactPath(value: string): string {
  return value.split(path.sep).join(path.posix.sep);
}

export function defaultArtifactIndex(): ArtifactIndex {
  return { artifacts: [] };
}

export function findArtifact(index: ArtifactIndex, targetPath: string): ArtifactNode | undefined {
  const normalizedTarget = normalizeArtifactPath(targetPath);
  const targetBase = path.posix.basename(normalizedTarget);

  return index.artifacts.find((artifact) => {
    const artifactPath = normalizeArtifactPath(artifact.path);
    return artifactPath === normalizedTarget || path.posix.basename(artifactPath) === targetBase;
  });
}

export function hasArtifact(index: ArtifactIndex, targetPath: string): boolean {
  return Boolean(findArtifact(index, targetPath));
}

export function artifactFreshnessFromDate(createdAt: string, now: Date = new Date()): FreshnessLevel {
  const created = new Date(createdAt);
  const ageMs = now.getTime() - created.getTime();
  const ageDays = Number.isFinite(ageMs) ? ageMs / (1000 * 60 * 60 * 24) : 999;

  if (ageDays <= 14) return "fresh";
  if (ageDays <= 45) return "aging";
  return "stale";
}

export function buildArtifactNode(skill: CanonicalSkill, artifactPath: string, createdAt: string): ArtifactNode {
  return {
    path: normalizeArtifactPath(artifactPath),
    createdBy: skill.name,
    createdAt,
    dependsOn: skill.dependsOn,
    feedsInto: skill.feedsInto,
    confidence: "medium",
    freshness: artifactFreshnessFromDate(createdAt),
    supersededBy: null,
    recommendedNext: skill.feedsInto.map((output) => outputToSkillHint(output)),
  };
}

export function upsertArtifact(index: ArtifactIndex, artifact: ArtifactNode): ArtifactIndex {
  const artifacts = index.artifacts.filter((existing) => normalizeArtifactPath(existing.path) !== normalizeArtifactPath(artifact.path));
  artifacts.push(artifact);
  artifacts.sort((a, b) => a.path.localeCompare(b.path));
  return { artifacts };
}

export function mergeArtifactIndexes(...indexes: ArtifactIndex[]): ArtifactIndex {
  return indexes.reduce((merged, index) => {
    let next = merged;
    for (const artifact of index.artifacts) {
      next = upsertArtifact(next, artifact);
    }
    return next;
  }, defaultArtifactIndex());
}

export function buildArtifactIndexFromProject(projectDir: string, skills: CanonicalSkill[]): ArtifactIndex {
  let index = defaultArtifactIndex();

  for (const skill of skills) {
    for (const output of skill.outputs) {
      const absPath = path.join(projectDir, output);
      if (!fs.existsSync(absPath)) continue;
      const createdAt = toDateString(fs.statSync(absPath).mtime);
      index = upsertArtifact(index, buildArtifactNode(skill, output, createdAt));
    }
  }

  return index;
}

export function staleArtifacts(index: ArtifactIndex): ArtifactNode[] {
  return index.artifacts.filter((artifact) => artifact.freshness === "stale");
}

export function staleDependencyWarnings(index: ArtifactIndex): Array<{ artifact: ArtifactNode; missingOrStale: string[] }> {
  return index.artifacts
    .map((artifact) => ({
      artifact,
      missingOrStale: artifact.dependsOn.filter((dependency) => {
        const dependencyNode = findArtifact(index, dependency);
        return !dependencyNode || dependencyNode.freshness === "stale";
      }),
    }))
    .filter((entry) => entry.missingOrStale.length > 0);
}

export function nextRecommendedSkills(index: ArtifactIndex): string[] {
  return [...new Set(index.artifacts.flatMap((artifact) => artifact.recommendedNext).filter(Boolean))];
}

export function artifactConfidenceSummary(index: ArtifactIndex): Record<ConfidenceLevel, number> {
  return index.artifacts.reduce(
    (summary, artifact) => {
      summary[artifact.confidence] += 1;
      return summary;
    },
    { low: 0, medium: 0, high: 0 } as Record<ConfidenceLevel, number>,
  );
}

function outputToSkillHint(output: string): string {
  const filename = path.posix.basename(output, path.posix.extname(output));
  return filename.replace(/\.template$/, "");
}
