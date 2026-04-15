export type HostClass = "coding-agent" | "chat" | "generic";

export interface HostCapabilities {
  nativeSkills: boolean;
  slashCommands: boolean;
  systemPrompt: boolean;
  projectInstructions: boolean;
  repoAware: boolean;
  canReadFiles: boolean;
  canWriteFiles: boolean;
  canRunCommands: boolean;
  canUseBrowser: boolean;
  supportsSequences: boolean;
  supportsStateInjection: boolean;
}

export interface GeneratedArtifact {
  path: string;
  kind:
    | "skill"
    | "system-prompt"
    | "conversation-starter"
    | "project-instructions"
    | "sequence-bundle"
    | "install-doc"
    | "workspace-doc";
  content: string;
}
