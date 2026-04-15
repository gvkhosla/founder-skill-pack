import type { CanonicalSequence } from "../../../core/src/types/sequence.js";
import type { CanonicalSkill } from "../../../core/src/types/skill.js";
import type { GeneratedArtifact, HostCapabilities } from "../../../core/src/types/host.js";
import type { HostAdapter, HostValidationResult, InstallBundle, WorkspaceBundle } from "./host-adapter.js";

export abstract class ChatHostAdapter implements HostAdapter {
  abstract id: string;
  abstract displayName: string;
  hostClass = "chat" as const;
  abstract capabilities: HostCapabilities;

  generateSkill(input: CanonicalSkill): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/skills/${input.domain}/${input.name}/system-prompt.md`,
        kind: "system-prompt",
        content: this.renderSystemPrompt(input),
      },
      {
        path: `generated/${this.id}/skills/${input.domain}/${input.name}/conversation-starter.md`,
        kind: "conversation-starter",
        content: this.renderConversationStarter(input),
      },
    ];
  }

  generateSequence(input: CanonicalSequence): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/bundles/${input.name}/system-prompt.md`,
        kind: "system-prompt",
        content: this.renderSequencePrompt(input),
      },
    ];
  }

  generateWorkspace(input: WorkspaceBundle): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/workspace/how-to-use.md`,
        kind: "workspace-doc",
        content: input.recommendedInstructions,
      },
    ];
  }

  generateInstallDocs(input: InstallBundle): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/workspace/setup.md`,
        kind: "workspace-doc",
        content: [`# ${input.hostName} setup`, ...input.installSteps.map((s) => `- ${s}`)].join("\n"),
      },
    ];
  }

  validate(output: GeneratedArtifact[]): HostValidationResult {
    const invalid = output.filter((artifact) => artifact.content.includes("SKILL.md"));
    return {
      ok: invalid.length === 0,
      warnings: invalid.map((artifact) => `${artifact.path} references SKILL.md in chat output`),
    };
  }

  protected renderSystemPrompt(skill: CanonicalSkill): string {
    return `You are running the ${skill.name} workflow.\n\nGoal: ${skill.description}\n\nOutputs:\n${skill.outputs.map((o) => `- ${o}`).join("\n")}\n\nInstructions:\n${skill.prompt.trim()}\n`;
  }

  protected renderConversationStarter(skill: CanonicalSkill): string {
    const invocation = skill.invocations[0] ?? `Help me with ${skill.name}`;
    return `Use the ${skill.name} workflow.\n\nStart with: \"${invocation}\"\n\nExpected outputs:\n${skill.outputs.map((o) => `- ${o}`).join("\n")}`;
  }

  protected renderSequencePrompt(sequence: CanonicalSequence): string {
    return `You are running the ${sequence.name} sequence.\n\n${sequence.description}\n\nSteps:\n${sequence.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}`;
  }
}
