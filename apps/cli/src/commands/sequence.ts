import path from "node:path";
import { loadAllCanonicalSequences, loadAllCanonicalSkills } from "../../../../packages/core/src/loaders/index.js";
import {
  ensureFounderWorkspace,
  readArtifactIndex,
  readSequenceState,
  startSequence,
  syncSequenceState,
  writeSequenceState,
} from "../../../../packages/state/src/workspace.js";

export function startSequenceCommand(rootDir: string, projectDir: string, sequenceName: string) {
  const resolvedProjectDir = path.resolve(projectDir);
  const catalog = loadCatalog(rootDir);
  ensureFounderWorkspace(resolvedProjectDir, catalog, { activeSequence: sequenceName });
  return startSequence(resolvedProjectDir, catalog, sequenceName);
}

export function syncSequenceCommand(rootDir: string, projectDir: string) {
  const resolvedProjectDir = path.resolve(projectDir);
  const catalog = loadCatalog(rootDir);
  ensureFounderWorkspace(resolvedProjectDir, catalog);
  const nextState = syncSequenceState(readSequenceState(resolvedProjectDir), catalog, readArtifactIndex(resolvedProjectDir));
  writeSequenceState(resolvedProjectDir, nextState);
  return nextState;
}

function loadCatalog(rootDir: string) {
  return {
    skills: loadAllCanonicalSkills(rootDir),
    sequences: loadAllCanonicalSequences(rootDir),
  };
}
