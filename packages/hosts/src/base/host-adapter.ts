import type { CanonicalSequence } from "../../../core/src/types/sequence.js";
import type { CanonicalSkill } from "../../../core/src/types/skill.js";
import type { GeneratedArtifact, HostCapabilities, HostClass } from "../../../core/src/types/host.js";

export interface WorkspaceBundle {
  companyStateSchema: object;
  artifactGraphSchema: object;
  starterFiles: Array<{ path: string; content: string }>;
  recommendedInstructions: string;
}

export interface InstallBundle {
  hostName: string;
  installSteps: string[];
}

export interface HostValidationResult {
  ok: boolean;
  warnings: string[];
}

export interface HostAdapter {
  id: string;
  displayName: string;
  hostClass: HostClass;
  capabilities: HostCapabilities;
  generateSkill(input: CanonicalSkill): GeneratedArtifact[];
  generateSequence(input: CanonicalSequence): GeneratedArtifact[];
  generateWorkspace(input: WorkspaceBundle): GeneratedArtifact[];
  generateInstallDocs(input: InstallBundle): GeneratedArtifact[];
  validate(output: GeneratedArtifact[]): HostValidationResult;
}
