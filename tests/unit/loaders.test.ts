import test from "node:test";
import assert from "node:assert/strict";
import { loadAllCanonicalSkills, loadAllCanonicalSequences } from "../../packages/core/src/loaders/index.js";

const root = process.cwd();

test("canonical skills load from source/skills", () => {
  const skills = loadAllCanonicalSkills(root);
  assert.ok(skills.length >= 10);
  assert.ok(skills.some((skill) => skill.name === "founder-partner"));
  assert.ok(skills.some((skill) => skill.name === "implementation-planner"));
});

test("canonical sequences load from source/sequences", () => {
  const sequences = loadAllCanonicalSequences(root);
  assert.ok(sequences.length >= 2);
  assert.ok(sequences.some((sequence) => sequence.name === "validate-to-build"));
});
