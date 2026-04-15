import test from "node:test";
import assert from "node:assert/strict";
import { getDefaultHostAdapters } from "../../packages/hosts/src/index.js";

const adapters = getDefaultHostAdapters();

test("default host adapters include coding and chat surfaces", () => {
  const ids = adapters.map((adapter) => adapter.id);
  assert.ok(ids.includes("pi"));
  assert.ok(ids.includes("claude-code"));
  assert.ok(ids.includes("codex"));
  assert.ok(ids.includes("opencode"));
  assert.ok(ids.includes("openclaw"));
  assert.ok(ids.includes("hermes"));
  assert.ok(ids.includes("chatgpt"));
  assert.ok(ids.includes("claude-chat"));
});

test("openclaw and hermes adapters emit coding-harness artifacts", () => {
  const sampleSkill = {
    name: "implementation-planner",
    domain: "engineering-product",
    description: "Sample skill",
    invocations: ["Help me plan the build"],
    outputs: ["implementation-plan.md"],
    dependsOn: [],
    feedsInto: [],
    prompt: "Do the work",
    checks: [],
  };

  const openclaw = adapters.find((adapter) => adapter.id === "openclaw");
  const hermes = adapters.find((adapter) => adapter.id === "hermes");

  assert.ok(openclaw);
  assert.ok(hermes);

  const openclawArtifacts = openclaw!.generateSkill(sampleSkill);
  const hermesArtifacts = hermes!.generateSkill(sampleSkill);

  assert.ok(openclawArtifacts.some((artifact) => artifact.path.includes("generated/openclaw/skills/implementation-planner/SKILL.md")));
  assert.ok(hermesArtifacts.some((artifact) => artifact.path.includes("generated/hermes/engineering-product/implementation-planner/SKILL.md")));
});
