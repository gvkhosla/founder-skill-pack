import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import type { CanonicalSequence } from "../types/sequence.js";

interface SequenceFrontmatter {
  name: string;
  description: string;
  entrypoint: string;
  steps?: string[];
  primary_outputs?: string[];
  success_signal?: string[];
}

function isDirectory(entryPath: string): boolean {
  return fs.existsSync(entryPath) && fs.statSync(entryPath).isDirectory();
}

export function loadCanonicalSequence(sequenceDir: string): CanonicalSequence {
  const yamlPath = path.join(sequenceDir, "sequence.yaml");
  const stepsPath = path.join(sequenceDir, "steps.md");
  const raw = YAML.parse(fs.readFileSync(yamlPath, "utf8")) as SequenceFrontmatter;

  return {
    name: raw.name,
    description: raw.description,
    entrypoint: raw.entrypoint,
    steps: raw.steps ?? [],
    primaryOutputs: raw.primary_outputs ?? [],
    successSignal: raw.success_signal ?? [],
    prompt: fs.existsSync(stepsPath) ? fs.readFileSync(stepsPath, "utf8") : "",
  };
}

export function loadAllCanonicalSequences(rootDir: string): CanonicalSequence[] {
  const sourceDir = path.join(rootDir, "source", "sequences");
  if (!fs.existsSync(sourceDir)) return [];

  return fs
    .readdirSync(sourceDir)
    .map((entry) => path.join(sourceDir, entry))
    .filter((entryPath) => isDirectory(entryPath) && fs.existsSync(path.join(entryPath, "sequence.yaml")))
    .map(loadCanonicalSequence);
}
