import fs from "node:fs";
import path from "node:path";
import type { CompanyStage, CompanyState } from "../../core/src/types/state.js";
import type { CanonicalSequence, SequenceState, SequenceStepState } from "../../core/src/types/sequence.js";
import type { CanonicalSkill } from "../../core/src/types/skill.js";
import type { ArtifactIndex } from "../../core/src/types/artifact.js";
import { defaultCompanyState } from "./company-state.js";
import {
  buildArtifactIndexFromProject,
  defaultArtifactIndex,
  hasArtifact,
  mergeArtifactIndexes,
} from "../../graph/src/artifact-index.js";

export const FS_DIRNAME = ".fs";
export const COMPANY_STATE_FILE = path.join(FS_DIRNAME, "company-state.json");
export const ARTIFACT_INDEX_FILE = path.join(FS_DIRNAME, "artifact-index.json");
export const SEQUENCE_STATE_FILE = path.join(FS_DIRNAME, "sequence-state.json");
export const WEEKLY_REVIEW_FILE = path.join(FS_DIRNAME, "weekly-review.json");
export const FOUNDER_CONTEXT_FILE = "founder-context.md";
export const TRUTH_MEMO_FILE = "truth-memo.md";
export const RECOMMENDED_NEXT_FILE = "recommended-next-step.md";

export interface WorkspaceCatalog {
  skills: CanonicalSkill[];
  sequences: CanonicalSequence[];
}

export interface WorkspaceRecommendation {
  type: "skill" | "sequence";
  name: string;
  reason: string;
  bottleneck?: string;
  source?: string;
  activeSequence?: string;
  expectedOutputs?: string[];
  missingArtifacts?: string[];
}

export interface EnsureWorkspaceOptions {
  companyName?: string;
  stage?: CompanyStage;
  activeSequence?: string;
}

export interface EnsureWorkspaceResult {
  projectDir: string;
  createdFiles: string[];
  companyState: CompanyState;
  artifactIndex: ArtifactIndex;
  sequenceState: SequenceState;
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function defaultBottleneckForStage(stage: CompanyStage, activeSequence?: string): CompanyState["company"]["currentBottleneck"] {
  if (activeSequence === "gtm-engine") return "marketing-clarity";
  if (activeSequence === "pmf-recovery") return "pmf-uncertainty";
  if (activeSequence === "weekly-operating-rhythm") return "founder-focus";
  if (activeSequence === "build-to-launch" || activeSequence === "build-to-release" || activeSequence === "validate-to-build") {
    return "build-confidence";
  }

  switch (stage) {
    case "idea":
    case "validating":
      return "problem-clarity";
    case "building":
      return "build-confidence";
    case "launched":
      return "launch-readiness";
    case "revenue":
    case "growing":
      return "pmf-uncertainty";
  }
}

function writeJson(absPath: string, value: unknown) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function readJson<T>(absPath: string, fallback: T): T {
  if (!fs.existsSync(absPath)) return fallback;
  return JSON.parse(fs.readFileSync(absPath, "utf8")) as T;
}

export function defaultSequenceState(): SequenceState {
  return {
    blockedBy: [],
    steps: [],
  };
}

export function defaultWeeklyReviewState() {
  return {
    weekOf: today(),
    focus: "",
    wins: [],
    misses: [],
    openQuestions: [],
    activeExperiments: [],
    topBottleneck: defaultCompanyState.company.currentBottleneck,
    recommendedNextWeek: "",
  };
}

export const starterFounderContext = `# Founder Context
Last updated: ${today()}

## The Product
**What:** 
**For whom:** 
**Core job solved:** 

## Founder Profile
**founder_type:** technical | non-technical | mixed
**coverage gaps:** 

## Stage
**Current:** idea | validating | building | launched | revenue | growing
**Stage notes:** 

## Current Metrics
**North Star:** 
**PMF Signal:** none | faint | building | clear
**Retention notes:** 
**Other metrics:** 

## Current Focus
**This cycle's ONE thing:** 
**Success signal:** 
**Deadline / next check-in:** 

## Truth Stack
**What we know:**
- 

**What we think:**
- 

**What we hope:**
- 

**Contradictions / weak assumptions:**
- 

## Open Questions
- [ ] 
- [ ] 

## What's Working

## What Isn't Working

## Milestones
| Milestone | Date | Notes |
|-----------|------|-------|
| First real user | — | — |
| First paying customer | — | — |
| PMF signal: faint | — | — |
| PMF signal: building | — | — |
| PMF signal: clear | — | — |

## Partner Session History
| Date | Key Observation | One Thing Committed To |
|------|-----------------|------------------------|
| ${today()} | Workspace initialized | Define the bottleneck honestly |
`;

export const starterTruthMemo = `# Truth Memo — ${today()}

## Situation
- The workspace has been initialized, but the company truth has not been stress-tested yet.

## What We Know
- The founder has not yet run a full partner diagnostic in this workspace.

## What We Think
- The current plan may be more optimistic than evidenced.

## What We Hope
- A real bottleneck, wedge, and next move will emerge quickly.

## The Hard Truth
- You do not have enough written evidence yet to trust your own story.

## Contradictions / Weak Assumptions
- Unknown until the first partner session runs.

## Current Bottleneck
- unknown

## Verdict
- validate-first

## One Next Move
- Run founder-partner and let it challenge the current story.

## What Would Change My Mind
- Specific customer evidence, sharper bottleneck diagnosis, or a validated wedge.
`;

export const starterRecommendedNextStep = `# Recommended Next Step

## Bottleneck
- unknown

## Recommendation
- Start with founder-partner

## Why this matters now
- Clarify the current bottleneck before branching into more work.
`;

export function getStarterWorkspaceFiles(): Array<{ path: string; content: string }> {
  return [
    {
      path: path.posix.join("workspace", "starter", ".fs", "company-state.json"),
      content: `${JSON.stringify(defaultCompanyState, null, 2)}\n`,
    },
    {
      path: path.posix.join("workspace", "starter", ".fs", "artifact-index.json"),
      content: `${JSON.stringify(defaultArtifactIndex(), null, 2)}\n`,
    },
    {
      path: path.posix.join("workspace", "starter", ".fs", "sequence-state.json"),
      content: `${JSON.stringify(defaultSequenceState(), null, 2)}\n`,
    },
    {
      path: path.posix.join("workspace", "starter", ".fs", "weekly-review.json"),
      content: `${JSON.stringify(defaultWeeklyReviewState(), null, 2)}\n`,
    },
    {
      path: path.posix.join("workspace", "starter", FOUNDER_CONTEXT_FILE),
      content: `${starterFounderContext}\n`,
    },
    {
      path: path.posix.join("workspace", "starter", TRUTH_MEMO_FILE),
      content: `${starterTruthMemo}\n`,
    },
    {
      path: path.posix.join("workspace", "starter", RECOMMENDED_NEXT_FILE),
      content: `${starterRecommendedNextStep}\n`,
    },
  ];
}

export function readCompanyState(projectDir: string): CompanyState {
  return readJson(path.join(projectDir, COMPANY_STATE_FILE), defaultCompanyState);
}

export function writeCompanyState(projectDir: string, state: CompanyState) {
  writeJson(path.join(projectDir, COMPANY_STATE_FILE), state);
}

export function readArtifactIndex(projectDir: string): ArtifactIndex {
  return readJson(path.join(projectDir, ARTIFACT_INDEX_FILE), defaultArtifactIndex());
}

export function writeArtifactIndex(projectDir: string, artifactIndex: ArtifactIndex) {
  writeJson(path.join(projectDir, ARTIFACT_INDEX_FILE), artifactIndex);
}

export function readSequenceState(projectDir: string): SequenceState {
  return readJson(path.join(projectDir, SEQUENCE_STATE_FILE), defaultSequenceState());
}

export function writeSequenceState(projectDir: string, sequenceState: SequenceState) {
  writeJson(path.join(projectDir, SEQUENCE_STATE_FILE), sequenceState);
}

export function initializeSequenceState(
  sequence: CanonicalSequence,
  skills: CanonicalSkill[],
  artifactIndex: ArtifactIndex,
  blockedBy: string[] = [],
): SequenceState {
  const skillsByName = new Map(skills.map((skill) => [skill.name, skill]));
  const blocked = new Set(blockedBy);
  let currentAssigned = false;

  const steps: SequenceStepState[] = sequence.steps.map((stepName) => {
    const skill = skillsByName.get(stepName);
    const outputs = skill?.outputs ?? [];
    const done = outputs.length > 0 && outputs.every((output) => hasArtifact(artifactIndex, output));

    if (done) {
      return { name: stepName, status: "done", outputs };
    }

    if (blocked.has(stepName)) {
      return { name: stepName, status: "blocked", outputs };
    }

    if (!currentAssigned) {
      currentAssigned = true;
      return { name: stepName, status: "current", outputs };
    }

    return { name: stepName, status: "pending", outputs };
  });

  return {
    activeSequence: sequence.name,
    currentStep: steps.find((step) => step.status === "current")?.name,
    blockedBy,
    steps,
    successSignal: sequence.successSignal[0],
  };
}

export function syncSequenceState(
  sequenceState: SequenceState,
  catalog: WorkspaceCatalog,
  artifactIndex: ArtifactIndex,
): SequenceState {
  if (!sequenceState.activeSequence) return sequenceState;
  const sequence = catalog.sequences.find((candidate) => candidate.name === sequenceState.activeSequence);
  if (!sequence) return sequenceState;
  return initializeSequenceState(sequence, catalog.skills, artifactIndex, sequenceState.blockedBy ?? []);
}

export function startSequence(projectDir: string, catalog: WorkspaceCatalog, sequenceName: string): SequenceState {
  const sequence = catalog.sequences.find((candidate) => candidate.name === sequenceName);
  if (!sequence) {
    throw new Error(`Unknown sequence '${sequenceName}'.`);
  }

  const artifactIndex = readArtifactIndex(projectDir);
  const state = readCompanyState(projectDir);
  const sequenceState = initializeSequenceState(sequence, catalog.skills, artifactIndex);

  writeSequenceState(projectDir, sequenceState);
  writeCompanyState(projectDir, {
    ...state,
    focus: {
      ...state.focus,
      activeSequence: sequence.name,
    },
    stateMeta: {
      ...state.stateMeta,
      lastUpdated: today(),
    },
  });

  return sequenceState;
}

export function ensureFounderWorkspace(
  projectDir: string,
  catalog: WorkspaceCatalog,
  options: EnsureWorkspaceOptions = {},
): EnsureWorkspaceResult {
  const createdFiles: string[] = [];
  fs.mkdirSync(path.join(projectDir, FS_DIRNAME), { recursive: true });

  const companyStatePath = path.join(projectDir, COMPANY_STATE_FILE);
  const hadCompanyState = fs.existsSync(companyStatePath);
  const companyState = hadCompanyState
    ? readCompanyState(projectDir)
    : {
        ...defaultCompanyState,
        company: {
          ...defaultCompanyState.company,
          name: options.companyName ?? path.basename(projectDir),
          stage: options.stage ?? defaultCompanyState.company.stage,
          currentBottleneck: defaultBottleneckForStage(
            options.stage ?? defaultCompanyState.company.stage,
            options.activeSequence,
          ),
        },
        focus: {
          ...defaultCompanyState.focus,
          activeSequence: options.activeSequence,
        },
      };

  const nextCompanyState = options.activeSequence
    ? {
        ...companyState,
        focus: {
          ...companyState.focus,
          activeSequence: options.activeSequence,
        },
      }
    : companyState;

  writeCompanyState(projectDir, nextCompanyState);
  if (!hadCompanyState) createdFiles.push(COMPANY_STATE_FILE);

  const scannedArtifacts = buildArtifactIndexFromProject(projectDir, catalog.skills);
  const artifactIndexPath = path.join(projectDir, ARTIFACT_INDEX_FILE);
  const hadArtifactIndex = fs.existsSync(artifactIndexPath);
  const existingArtifacts = readArtifactIndex(projectDir);
  const mergedArtifactIndex = mergeArtifactIndexes(existingArtifacts, scannedArtifacts);
  writeArtifactIndex(projectDir, mergedArtifactIndex);
  if (!hadArtifactIndex) createdFiles.push(ARTIFACT_INDEX_FILE);

  const founderContextPath = path.join(projectDir, FOUNDER_CONTEXT_FILE);
  if (!fs.existsSync(founderContextPath)) {
    fs.writeFileSync(founderContextPath, `${starterFounderContext}\n`, "utf8");
    createdFiles.push(FOUNDER_CONTEXT_FILE);
  }

  const truthMemoPath = path.join(projectDir, TRUTH_MEMO_FILE);
  if (!fs.existsSync(truthMemoPath)) {
    fs.writeFileSync(truthMemoPath, `${starterTruthMemo}\n`, "utf8");
    createdFiles.push(TRUTH_MEMO_FILE);
  }

  const recommendedNextPath = path.join(projectDir, RECOMMENDED_NEXT_FILE);
  if (!fs.existsSync(recommendedNextPath)) {
    fs.writeFileSync(recommendedNextPath, `${starterRecommendedNextStep}\n`, "utf8");
    createdFiles.push(RECOMMENDED_NEXT_FILE);
  }

  const weeklyReviewPath = path.join(projectDir, WEEKLY_REVIEW_FILE);
  if (!fs.existsSync(weeklyReviewPath)) {
    writeJson(weeklyReviewPath, defaultWeeklyReviewState());
    createdFiles.push(WEEKLY_REVIEW_FILE);
  }

  const sequenceStatePath = path.join(projectDir, SEQUENCE_STATE_FILE);
  const hadSequenceState = fs.existsSync(sequenceStatePath);
  let sequenceState = readSequenceState(projectDir);
  const activeSequence = options.activeSequence ?? nextCompanyState.focus.activeSequence;
  if (activeSequence) {
    const sequence = catalog.sequences.find((candidate) => candidate.name === activeSequence);
    if (sequence) {
      sequenceState = initializeSequenceState(sequence, catalog.skills, mergedArtifactIndex, sequenceState.blockedBy ?? []);
      writeSequenceState(projectDir, sequenceState);
    }
  } else if (!hadSequenceState) {
    writeSequenceState(projectDir, sequenceState);
  }
  if (!hadSequenceState) createdFiles.push(SEQUENCE_STATE_FILE);

  return {
    projectDir,
    createdFiles,
    companyState: readCompanyState(projectDir),
    artifactIndex: readArtifactIndex(projectDir),
    sequenceState: readSequenceState(projectDir),
  };
}

export function renderRecommendedNextStep(recommendation: WorkspaceRecommendation): string {
  const lines = [
    "# Recommended Next Step",
    "",
    `## Bottleneck`,
    `- ${recommendation.bottleneck ?? "unknown"}`,
    "",
    "## Recommendation",
    `- ${recommendation.type}: ${recommendation.name}`,
    "",
    "## Why this matters now",
    `- ${recommendation.reason}`,
  ];

  if (recommendation.activeSequence) {
    lines.push("", "## Active Sequence", `- ${recommendation.activeSequence}`);
  }

  if (recommendation.expectedOutputs && recommendation.expectedOutputs.length > 0) {
    lines.push("", "## Expected Outputs", ...recommendation.expectedOutputs.map((output) => `- ${output}`));
  }

  if (recommendation.missingArtifacts && recommendation.missingArtifacts.length > 0) {
    lines.push("", "## Missing or stale artifacts", ...recommendation.missingArtifacts.map((artifact) => `- ${artifact}`));
  }

  if (recommendation.source) {
    lines.push("", "## Routing source", `- ${recommendation.source}`);
  }

  return `${lines.join("\n")}\n`;
}

export function writeRecommendedNextStep(projectDir: string, recommendation: WorkspaceRecommendation) {
  fs.writeFileSync(path.join(projectDir, RECOMMENDED_NEXT_FILE), renderRecommendedNextStep(recommendation), "utf8");
}
