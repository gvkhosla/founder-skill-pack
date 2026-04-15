import { loadAllCanonicalSequences, loadAllCanonicalSkills } from "../packages/core/src/loaders/index.js";

const root = process.cwd();
const skills = loadAllCanonicalSkills(root);
const sequences = loadAllCanonicalSequences(root);
const skillNames = new Set(skills.map((skill) => skill.name));
const missing: string[] = [];

for (const sequence of sequences) {
  for (const step of sequence.steps) {
    if (!skillNames.has(step)) {
      missing.push(`${sequence.name}: missing skill '${step}'`);
    }
  }
}

if (missing.length > 0) {
  console.error("Sequence validation failed:\n- " + missing.join("\n- "));
  process.exit(1);
}

console.log(`Sequence validation passed for ${sequences.length} sequences.`);
