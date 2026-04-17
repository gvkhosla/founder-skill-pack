import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const groups: Record<string, string[]> = {
  docs: [
    "docs/founder-skills-os-orchestrator-state-model.md",
    "docs/founder-skills-os-folder-scaffold.md",
    "docs/founder-skills-os-host-adapter-contract.md",
    "docs/founder-skills-os-coding-host-priority.md",
    "docs/founder-partner-manifesto.md",
    "docs/homepage-positioning.md",
    "docs/founder-skills-os-install-export-flows.md",
  ],
  workspace: ["pnpm-workspace.yaml", "turbo.json", "tsconfig.base.json", "tsconfig.json"],
  core: [
    "packages/core/src/index.ts",
    "packages/core/src/loaders/canonical-skill.ts",
    "packages/state/src/company-state.ts",
    "packages/state/src/workspace.ts",
    "packages/graph/src/artifact-index.ts",
    "packages/evals/src/recommendation-scenarios.ts",
    "packages/orchestrator/src/founder-partner.ts",
    "packages/hosts/src/registry.ts",
    "packages/hosts/src/openclaw/index.ts",
    "packages/hosts/src/hermes/index.ts",
    "packages/hosts/src/install/export-bundles.ts",
  ],
  source: [
    "source/skills/engineering-product/implementation-planner/skill.yaml",
    "source/skills/engineering-product/qa-verifier/skill.yaml",
    "source/skills/engineering-product/design-to-code-brief/skill.yaml",
    "source/skills/engineering-product/post-ship-review/skill.yaml",
    "source/skills/marketing/messaging-architect/skill.yaml",
    "source/skills/ads/cac-diagnostician/skill.yaml",
    "source/skills/pmf/pmf-signal-reader/skill.yaml",
    "source/skills/partner/founder-partner/reference.md",
    "source/skills/scale/first-hire-brief/skill.yaml",
    "source/skills/sales/pipeline-reviewer/skill.yaml",
    "source/sequences/validate-to-build/sequence.yaml",
    "source/sequences/build-to-release/sequence.yaml",
    "source/sequences/build-to-launch/sequence.yaml",
    "source/sequences/gtm-engine/sequence.yaml",
    "source/sequences/pmf-recovery/sequence.yaml",
  ],
  scripts: [
    "scripts/gen-host-skills.ts",
    "scripts/gen-chat-bundles.ts",
    "scripts/check-consistency.ts",
    "scripts/validate-generated-hosts.ts",
    "scripts/validate-sequences.ts",
    "scripts/init-company-workspace.ts",
    "scripts/recommend-next.ts",
    "scripts/sequence-cli.ts",
    "scripts/install-host-bundles.ts",
  ],
  tests: [
    "tests/evals/recommendation-scenarios.test.ts",
    "tests/unit/workspace.test.ts",
    "tests/unit/orchestrator.test.ts",
  ],
};

let failed = false;
for (const [group, relPaths] of Object.entries(groups)) {
  const missing = relPaths.filter((rel) => !fs.existsSync(path.join(root, rel)));
  if (missing.length === 0) {
    console.log(`✓ ${group}`);
    continue;
  }
  failed = true;
  console.log(`✗ ${group}`);
  for (const rel of missing) console.log(`  - missing: ${rel}`);
}

if (failed) process.exit(1);
console.log("Founder Skills OS bootstrap looks healthy.");
