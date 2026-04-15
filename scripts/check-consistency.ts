import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const checks = [
  "docs/founder-skills-os-orchestrator-state-model.md",
  "docs/founder-skills-os-folder-scaffold.md",
  "docs/founder-skills-os-host-adapter-contract.md",
  "docs/founder-skills-os-coding-host-priority.md",
  "docs/founder-skills-os-install-export-flows.md",
  "pnpm-workspace.yaml",
  "turbo.json",
  "tsconfig.base.json",
  "tsconfig.json",
  "packages/core/src/index.ts",
  "packages/core/src/loaders/canonical-skill.ts",
  "packages/hosts/src/registry.ts",
  "packages/hosts/src/openclaw/index.ts",
  "packages/hosts/src/hermes/index.ts",
  "packages/hosts/src/install/export-bundles.ts",
  "packages/orchestrator/src/founder-partner.ts",
  "source/skills/engineering-product/implementation-planner/skill.yaml",
  "source/skills/engineering-product/qa-verifier/skill.yaml",
  "source/skills/engineering-product/design-to-code-brief/skill.yaml",
  "source/skills/engineering-product/post-ship-review/skill.yaml",
  "source/sequences/validate-to-build/sequence.yaml",
  "source/sequences/build-to-release/sequence.yaml",
  "scripts/validate-generated-hosts.ts",
  "scripts/install-host-bundles.ts",
];

const missing = checks.filter((rel) => !fs.existsSync(path.join(root, rel)));
if (missing.length > 0) {
  console.error("Founder Skills OS consistency check failed. Missing:\n- " + missing.join("\n- "));
  process.exit(1);
}

console.log("Founder Skills OS consistency scaffold check passed.");
