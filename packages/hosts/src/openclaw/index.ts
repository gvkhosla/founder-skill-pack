import type { CanonicalSequence } from "../../../core/src/types/sequence.js";
import type { CanonicalSkill } from "../../../core/src/types/skill.js";
import type { GeneratedArtifact } from "../../../core/src/types/host.js";
import { capabilityMatrix } from "../base/capability-matrix.js";
import type { HostAdapter, HostValidationResult, InstallBundle, WorkspaceBundle } from "../base/host-adapter.js";

export class OpenClawAdapter implements HostAdapter {
  id = "openclaw";
  displayName = "OpenClaw";
  hostClass = "coding-agent" as const;
  capabilities = capabilityMatrix.openclaw;

  generateSkill(input: CanonicalSkill): GeneratedArtifact[] {
    return [
      {
        path: `generated/openclaw/skills/${input.name}/SKILL.md`,
        kind: "skill",
        content: this.renderNativeSkill(input),
      },
    ];
  }

  generateSequence(input: CanonicalSequence): GeneratedArtifact[] {
    return [
      {
        path: `generated/openclaw/sequences/${input.name}.md`,
        kind: "sequence-bundle",
        content: this.renderSequence(input),
      },
    ];
  }

  generateWorkspace(input: WorkspaceBundle): GeneratedArtifact[] {
    return [
      {
        path: "generated/openclaw/agents-founder-skills-section.md",
        kind: "project-instructions",
        content: [
          "## Founder Skills OS routing",
          "When the user's request matches a Founder Skills OS workflow, spawn a coding session and inject the appropriate Founder Skills OS instructions.",
          "Use founder-partner for routing when the next move is unclear.",
          "Prefer validate-to-build for pre-launch product work and weekly-operating-rhythm for operating cadence.",
        ].join("\n\n"),
      },
      {
        path: "generated/openclaw/founder-skills-lite-CLAUDE.md",
        kind: "project-instructions",
        content: [
          "# Founder Skills OS Lite",
          "1. Read project instructions and available artifacts before editing.",
          "2. Identify the current bottleneck and state it explicitly.",
          "3. Produce the expected artifact before making broad implementation changes.",
          "4. Keep build work tied to launch, PMF, and GTM context.",
        ].join("\n"),
      },
      {
        path: "generated/openclaw/founder-skills-full-CLAUDE.md",
        kind: "project-instructions",
        content: [
          "# Founder Skills OS Full",
          "1. Run founder-partner logic first to identify bottleneck and next move.",
          "2. Continue the active sequence if one is in progress.",
          "3. For build work: implementation-plan → architecture-review → QA → release readiness.",
          "4. For GTM work: positioning → launch or sales/SEO/ads flow depending on bottleneck.",
          "5. Report back with artifact paths, key decisions, and the next recommended move.",
        ].join("\n"),
      },
      {
        path: "generated/openclaw/workspace/project-instructions.md",
        kind: "workspace-doc",
        content: input.recommendedInstructions,
      },
    ];
  }

  generateInstallDocs(input: InstallBundle): GeneratedArtifact[] {
    return [
      {
        path: "generated/openclaw/install.md",
        kind: "install-doc",
        content: [
          `# ${input.hostName} install`,
          "- Paste agents-founder-skills-section.md into your OpenClaw AGENTS.md",
          "- Use founder-skills-lite-CLAUDE.md for medium tasks",
          "- Use founder-skills-full-CLAUDE.md for full product/build sequences",
          "- Spawn coding sessions with the right working directory and artifact context",
        ].join("\n"),
      },
    ];
  }

  validate(output: GeneratedArtifact[]): HostValidationResult {
    const warnings = output.filter((artifact) => !artifact.content.trim()).map((artifact) => `${artifact.path} is empty`);
    return { ok: warnings.length === 0, warnings };
  }

  private renderNativeSkill(skill: CanonicalSkill): string {
    return `---\nname: ${skill.name}\ndescription: ${skill.description}\n---\n\n# ${skill.name}\n\nUse this when the user clearly wants the ${skill.name} workflow.\n\nOpenClaw behavior:\n- If coding work is required, spawn a coding session with the current repo context.\n- Pass in the relevant Founder Skills OS artifacts before implementation.\n- Return with the produced artifacts and next recommended move.\n\nExpected outputs:\n${skill.outputs.map((o) => `- ${o}`).join("\n")}`;
  }

  private renderSequence(sequence: CanonicalSequence): string {
    return `# ${sequence.name}\n\n${sequence.description}\n\nOpenClaw should use this sequence as a staged spawn workflow.\n\nSteps:\n${sequence.steps.map((step, i) => `${i + 1}. ${step}`).join("\n")}`;
  }
}
