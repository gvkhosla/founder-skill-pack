import test from "node:test";
import assert from "node:assert/strict";
import { loadAllCanonicalSequences, loadAllCanonicalSkills } from "../../packages/core/src/loaders/index.js";
import { defaultCompanyState } from "../../packages/state/src/company-state.js";
import { defaultArtifactIndex } from "../../packages/graph/src/artifact-index.js";
import {
  evaluateRecommendationScenario,
  summarizeScenarioResults,
  type RecommendationScenario,
} from "../../packages/evals/src/recommendation-scenarios.js";

const root = process.cwd();
const catalog = {
  skills: loadAllCanonicalSkills(root),
  sequences: loadAllCanonicalSequences(root),
};

const scenarios: RecommendationScenario[] = [
  {
    name: "build-confidence gap routes to implementation planning",
    state: {
      ...defaultCompanyState,
      company: {
        ...defaultCompanyState.company,
        stage: "building",
        currentBottleneck: "build-confidence",
      },
    },
    expected: { type: "skill", name: "implementation-planner", bottleneck: "build-confidence" },
  },
  {
    name: "pmf uncertainty with no state routes to the north star gate",
    state: {
      ...defaultCompanyState,
      company: {
        ...defaultCompanyState.company,
        stage: "launched",
        currentBottleneck: "pmf-uncertainty",
      },
    },
    artifactIndex: defaultArtifactIndex(),
    expected: { type: "skill", name: "north-star-definer", bottleneck: "pmf-uncertainty" },
  },
  {
    name: "active GTM sequence continues before branching",
    state: {
      ...defaultCompanyState,
      company: {
        ...defaultCompanyState.company,
        stage: "launched",
        currentBottleneck: "marketing-clarity",
      },
      focus: {
        ...defaultCompanyState.focus,
        activeSequence: "gtm-engine",
      },
    },
    artifactIndex: {
      artifacts: [
        {
          path: "customer-profile.md",
          createdBy: "customer-hypothesis",
          createdAt: "2026-04-16",
          dependsOn: [],
          feedsInto: [],
          confidence: "high",
          freshness: "fresh",
          supersededBy: null,
          recommendedNext: [],
        },
      ],
    },
    sequenceState: {
      activeSequence: "gtm-engine",
      steps: [
        { name: "customer-hypothesis", status: "done" },
        { name: "positioning-writer", status: "current" },
      ],
    },
    expected: { type: "skill", name: "positioning-writer", bottleneck: "marketing-clarity" },
  },
  {
    name: "hiring capacity routes to first hire brief",
    state: {
      ...defaultCompanyState,
      company: {
        ...defaultCompanyState.company,
        stage: "revenue",
        currentBottleneck: "hiring-capacity",
      },
    },
    expected: { type: "skill", name: "first-hire-brief", bottleneck: "hiring-capacity" },
  },
];

test("founder recommendation scenarios stay on policy", () => {
  const results = scenarios.map((scenario) => evaluateRecommendationScenario(scenario, catalog));
  const summary = summarizeScenarioResults(results);

  assert.equal(summary.failed, 0);
  assert.equal(summary.passRate, 1);
});
