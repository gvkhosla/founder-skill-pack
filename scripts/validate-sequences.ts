import { loadAllCanonicalSequences, loadAllCanonicalSkills } from "../packages/core/src/loaders/index.js";

const root = process.cwd();
const skills = loadAllCanonicalSkills(root);
const sequences = loadAllCanonicalSequences(root);
const skillsByName = new Map(skills.map((skill) => [skill.name, skill]));
const errors: string[] = [];

for (const sequence of sequences) {
  if (!skillsByName.has(sequence.entrypoint)) {
    errors.push(`${sequence.name}: missing entrypoint skill '${sequence.entrypoint}'`);
  }

  const stepOutputs = new Set<string>();

  for (const step of sequence.steps) {
    const skill = skillsByName.get(step);
    if (!skill) {
      errors.push(`${sequence.name}: missing skill '${step}'`);
      continue;
    }
    for (const output of skill.outputs) stepOutputs.add(output);
  }

  for (const output of sequence.primaryOutputs) {
    if (!stepOutputs.has(output)) {
      errors.push(`${sequence.name}: primary output '${output}' is not produced by its steps`);
    }
  }
}

if (errors.length > 0) {
  console.error("Sequence validation failed:\n- " + errors.join("\n- "));
  process.exit(1);
}

console.log(`Sequence validation passed for ${sequences.length} sequences.`);
