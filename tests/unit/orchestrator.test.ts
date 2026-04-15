import test from "node:test";
import assert from "node:assert/strict";
import { defaultCompanyState, updateBottleneck } from "../../packages/state/src/company-state.js";
import { recommendNextMove } from "../../packages/orchestrator/src/founder-partner.js";

test("founder-partner recommends implementation planning for build-confidence", () => {
  const state = updateBottleneck(defaultCompanyState, "build-confidence");
  const recommendation = recommendNextMove(state);
  assert.equal(recommendation.name, "implementation-planner");
  assert.equal(recommendation.type, "skill");
});
