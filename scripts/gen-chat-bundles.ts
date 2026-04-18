import fs from "node:fs";
import path from "node:path";
import { loadAllCanonicalSkills, loadAllCanonicalSequences } from "../packages/core/src/loaders/index.js";
import { getDefaultHostAdapters } from "../packages/hosts/src/index.js";
import { STARTER_TEMPLATE_DATE, getStarterWorkspaceFiles } from "../packages/state/src/workspace.js";

const root = process.cwd();
const hostAdapters = getDefaultHostAdapters().filter((adapter) => adapter.hostClass === "chat");
const skills = loadAllCanonicalSkills(root);
const sequences = loadAllCanonicalSequences(root);

function writeArtifact(rootDir: string, relPath: string, content: string) {
  const absPath = path.join(rootDir, relPath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, "utf8");
}

for (const adapter of hostAdapters) {
  fs.rmSync(path.join(root, "generated", adapter.id), { recursive: true, force: true });

  for (const skill of skills) {
    if (skill.supportedHosts && !skill.supportedHosts.includes(adapter.id)) continue;
    for (const artifact of adapter.generateSkill(skill)) {
      writeArtifact(root, artifact.path, artifact.content);
    }
  }

  for (const sequence of sequences) {
    for (const artifact of adapter.generateSequence(sequence)) {
      writeArtifact(root, artifact.path, artifact.content);
    }
  }

  for (const artifact of adapter.generateWorkspace({
    companyStateSchema: {},
    artifactGraphSchema: {},
    starterFiles: getStarterWorkspaceFiles({ date: STARTER_TEMPLATE_DATE }),
    recommendedInstructions:
      "Start each serious session by reviewing company state, artifact freshness, founder-context.md, truth-memo.md, active sequence, and recommended-next-step.md before asking for new work.",
  })) {
    writeArtifact(root, artifact.path, artifact.content);
  }
}

console.log(`Generated chat-host bundles for ${hostAdapters.length} hosts, ${skills.length} skills, ${sequences.length} sequences.`);
