import path from "node:path";
import { loadAllCanonicalSequences, loadAllCanonicalSkills } from "../../../../packages/core/src/loaders/index.js";
import { recommendNextMove } from "../../../../packages/orchestrator/src/founder-partner.js";
import {
  ensureFounderWorkspace,
  readArtifactIndex,
  readCompanyState,
  readSequenceState,
  writeCompanyState,
  writeRecommendedNextStep,
  type EnsureWorkspaceOptions,
} from "../../../../packages/state/src/workspace.js";

export function initStateCommand(rootDir: string, projectDir: string, options: EnsureWorkspaceOptions = {}) {
  return ensureFounderWorkspace(path.resolve(projectDir), loadCatalog(rootDir), options);
}

export function recommendStateCommand(rootDir: string, projectDir: string) {
  const resolvedProjectDir = path.resolve(projectDir);
  const catalog = loadCatalog(rootDir);
  const workspace = ensureFounderWorkspace(resolvedProjectDir, catalog);
  const recommendation = recommendNextMove(workspace.companyState, {
    artifactIndex: workspace.artifactIndex,
    sequenceState: workspace.sequenceState,
    catalog,
  });

  writeRecommendedNextStep(resolvedProjectDir, recommendation);
  const currentState = readCompanyState(resolvedProjectDir);
  writeCompanyState(resolvedProjectDir, {
    ...currentState,
    focus: {
      ...currentState.focus,
      recommendedNext: {
        type: recommendation.type,
        name: recommendation.name,
        reason: recommendation.reason,
      },
    },
    stateMeta: {
      ...currentState.stateMeta,
      lastUpdated: new Date().toISOString().slice(0, 10),
    },
  });

  return {
    recommendation,
    companyState: readCompanyState(resolvedProjectDir),
    artifactIndex: readArtifactIndex(resolvedProjectDir),
    sequenceState: readSequenceState(resolvedProjectDir),
  };
}

function loadCatalog(rootDir: string) {
  return {
    skills: loadAllCanonicalSkills(rootDir),
    sequences: loadAllCanonicalSequences(rootDir),
  };
}
