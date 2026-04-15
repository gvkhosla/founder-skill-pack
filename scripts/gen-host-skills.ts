import fs from "node:fs";
import path from "node:path";
import { loadAllCanonicalSkills, loadAllCanonicalSequences } from "../packages/core/src/loaders/index.js";
import { getDefaultHostAdapters } from "../packages/hosts/src/index.js";

const root = process.cwd();
const hostAdapters = getDefaultHostAdapters().filter((adapter) => adapter.hostClass === "coding-agent");
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
    starterFiles: [],
    recommendedInstructions:
      "Start with founder-partner, identify the current bottleneck, continue the active sequence if one exists, and keep build work tied to launch and GTM context.",
  })) {
    writeArtifact(root, artifact.path, artifact.content);
  }

  for (const artifact of adapter.generateInstallDocs({
    hostName: adapter.displayName,
    installSteps: [
      "Install Founder Skills OS for this host",
      "Load generated project instructions",
      "Run founder-partner as the default entrypoint",
    ],
  })) {
    writeArtifact(root, artifact.path, artifact.content);
  }
}

console.log(`Generated coding-host outputs for ${hostAdapters.length} hosts, ${skills.length} skills, ${sequences.length} sequences.`);
