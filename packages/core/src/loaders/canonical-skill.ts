import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import type { CanonicalSkill } from "../types/skill.js";

interface SkillFrontmatter {
  name: string;
  description: string;
  invocations?: string[];
  outputs?: string[];
  depends_on?: string[];
  feeds_into?: string[];
  checks?: string[];
  readiness_gate?: string;
  supported_hosts?: string[];
}

function isDirectory(entryPath: string): boolean {
  return fs.existsSync(entryPath) && fs.statSync(entryPath).isDirectory();
}

function listDirectories(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .map((entry) => path.join(dir, entry))
    .filter((entryPath) => isDirectory(entryPath));
}

export function loadCanonicalSkill(skillDir: string, domain: string): CanonicalSkill {
  const yamlPath = path.join(skillDir, "skill.yaml");
  const promptPath = path.join(skillDir, "prompt.md");
  const referencePath = path.join(skillDir, "reference.md");
  const raw = YAML.parse(fs.readFileSync(yamlPath, "utf8")) as SkillFrontmatter;

  return {
    name: raw.name,
    domain,
    description: raw.description,
    invocations: raw.invocations ?? [],
    outputs: raw.outputs ?? [],
    dependsOn: raw.depends_on ?? [],
    feedsInto: raw.feeds_into ?? [],
    prompt: fs.existsSync(promptPath) ? fs.readFileSync(promptPath, "utf8") : "",
    reference: fs.existsSync(referencePath) ? fs.readFileSync(referencePath, "utf8") : undefined,
    checks: raw.checks ?? [],
    readinessGate: raw.readiness_gate,
    supportedHosts: raw.supported_hosts,
  };
}

export function loadAllCanonicalSkills(rootDir: string): CanonicalSkill[] {
  const sourceDir = path.join(rootDir, "source", "skills");
  const domains = listDirectories(sourceDir);
  const skills: CanonicalSkill[] = [];

  for (const domainDir of domains) {
    const domain = path.basename(domainDir);
    const skillDirs = listDirectories(domainDir).filter((dir) => fs.existsSync(path.join(dir, "skill.yaml")));
    for (const skillDir of skillDirs) {
      skills.push(loadCanonicalSkill(skillDir, domain));
    }
  }

  return skills;
}
