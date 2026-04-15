import type { CanonicalSequence } from "../../../core/src/types/sequence.js";
import type { CanonicalSkill } from "../../../core/src/types/skill.js";
import type { GeneratedArtifact, HostCapabilities } from "../../../core/src/types/host.js";
import type { HostAdapter, HostValidationResult, InstallBundle, WorkspaceBundle } from "./host-adapter.js";

export abstract class CodingHostAdapter implements HostAdapter {
  abstract id: string;
  abstract displayName: string;
  hostClass = "coding-agent" as const;
  abstract capabilities: HostCapabilities;

  generateSkill(input: CanonicalSkill): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/${input.domain}/${input.name}/SKILL.md`,
        kind: "skill",
        content: this.renderSkill(input),
      },
    ];
  }

  generateSequence(input: CanonicalSequence): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/sequences/${input.name}.md`,
        kind: "sequence-bundle",
        content: this.renderSequence(input),
      },
    ];
  }

  generateWorkspace(input: WorkspaceBundle): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/workspace/project-instructions.md`,
        kind: "project-instructions",
        content: input.recommendedInstructions,
      },
    ];
  }

  generateInstallDocs(input: InstallBundle): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/install.md`,
        kind: "install-doc",
        content: [`# ${input.hostName} install`, ...input.installSteps.map((s) => `- ${s}`)].join("\n"),
      },
    ];
  }

  validate(output: GeneratedArtifact[]): HostValidationResult {
    const warnings = output.filter((artifact) => !artifact.content.trim()).map((artifact) => `${artifact.path} is empty`);
    return { ok: warnings.length === 0, warnings };
  }

  protected renderSkill(skill: CanonicalSkill): string {
    return `---\nname: ${skill.name}\ndescription: ${skill.description}\n---\n\n# ${skill.name}\n\n## Invocation\n${skill.invocations.map((i) => `- ${i}`).join("\n")}\n\n## Outputs\n${skill.outputs.map((o) => `- ${o}`).join("\n")}\n\n## Prompt\n${skill.prompt.trim()}\n`;
  }

  protected renderSequence(sequence: CanonicalSequence): string {
    return `# ${sequence.name}\n\n${sequence.description}\n\n## Steps\n${sequence.steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}\n\n## Primary outputs\n${sequence.primaryOutputs.map((o) => `- ${o}`).join("\n")}`;
  }
}
