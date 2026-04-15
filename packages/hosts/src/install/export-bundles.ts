import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export type CodingHostId = "pi" | "claude-code" | "codex" | "opencode" | "openclaw" | "hermes";
export type InstallScope = "global" | "project";

export interface InstallGeneratedHostOptions {
  rootDir: string;
  host: CodingHostId;
  scope?: InstallScope;
  projectDir?: string;
  dest?: string;
}

export interface InstallResult {
  host: CodingHostId;
  bundlePath: string;
  updatedFiles: string[];
  notes: string[];
}

const BUNDLE_NAME = "founder-skills-os";

export function getSupportedCodingHosts(): CodingHostId[] {
  return ["pi", "claude-code", "codex", "opencode", "openclaw", "hermes"];
}

export function installGeneratedHostBundle(options: InstallGeneratedHostOptions): InstallResult {
  const projectDir = path.resolve(options.projectDir ?? process.cwd());
  const scope = options.scope ?? defaultScopeForHost(options.host);
  const generatedDir = path.join(options.rootDir, "generated", options.host);

  if (!fs.existsSync(generatedDir)) {
    throw new Error(`Missing generated bundle for ${options.host} at ${generatedDir}. Run npm run os:gen first.`);
  }

  const bundlePath = path.resolve(options.dest ?? getDefaultBundlePath(options.host, scope, projectDir));
  copyDirectory(generatedDir, bundlePath);

  const notes = [`Copied generated/${options.host} → ${bundlePath}`];
  const updatedFiles: string[] = [];

  if (options.host === "pi") {
    notes.push("pi will discover nested SKILL.md folders under ~/.pi/agent/skills/");
  }

  if (options.host === "hermes") {
    notes.push("Hermes will discover nested SKILL.md folders under ~/.hermes/skills/");
    notes.push("Run `hermes skills list` to confirm the bundle is visible");
  }

  if (options.host === "claude-code" && scope === "project") {
    const claudeFile = path.join(projectDir, "CLAUDE.md");
    upsertManagedSectionFile(claudeFile, "FOUNDER-SKILLS-OS", renderClaudeProjectSection(path.relative(projectDir, bundlePath) || "."));
    updatedFiles.push(claudeFile);
    notes.push(`Updated ${claudeFile} with a managed Founder Skills OS section`);
  }

  if (options.host === "codex") {
    const agentsFile = path.join(projectDir, "AGENTS.md");
    upsertManagedSectionFile(agentsFile, "FOUNDER-SKILLS-OS-CODEX", renderCodexSection(path.relative(projectDir, bundlePath) || "."));
    updatedFiles.push(agentsFile);
    notes.push(`Updated ${agentsFile} with a Codex bundle section`);
  }

  if (options.host === "opencode") {
    const agentsFile = path.join(projectDir, "AGENTS.md");
    upsertManagedSectionFile(agentsFile, "FOUNDER-SKILLS-OS-OPENCODE", renderOpenCodeSection(path.relative(projectDir, bundlePath) || "."));
    updatedFiles.push(agentsFile);
    notes.push(`Updated ${agentsFile} with an OpenCode bundle section`);
  }

  if (options.host === "openclaw") {
    const agentsFile = path.join(projectDir, "AGENTS.md");
    const openclawSectionPath = path.join(bundlePath, "agents-founder-skills-section.md");
    const openclawSection = fs.existsSync(openclawSectionPath)
      ? fs.readFileSync(openclawSectionPath, "utf8").trim()
      : "Use Founder Skills OS as the routing layer for startup bottlenecks.";
    upsertManagedSectionFile(agentsFile, "FOUNDER-SKILLS-OS-OPENCLAW", renderOpenClawSection(path.relative(projectDir, bundlePath) || ".", openclawSection));
    updatedFiles.push(agentsFile);
    notes.push(`Updated ${agentsFile} with an OpenClaw bundle section`);
  }

  return {
    host: options.host,
    bundlePath,
    updatedFiles,
    notes,
  };
}

export function defaultScopeForHost(host: CodingHostId): InstallScope {
  return host === "claude-code" ? "project" : "global";
}

export function getDefaultBundlePath(host: CodingHostId, scope: InstallScope, projectDir: string): string {
  switch (host) {
    case "pi":
      return path.join(os.homedir(), ".pi", "agent", "skills", BUNDLE_NAME);
    case "claude-code":
      return scope === "global"
        ? path.join(os.homedir(), ".claude", "skills", BUNDLE_NAME)
        : path.join(projectDir, ".claude", "skills", BUNDLE_NAME);
    case "codex":
      return path.join(projectDir, ".codex", BUNDLE_NAME);
    case "opencode":
      return path.join(projectDir, ".opencode", BUNDLE_NAME);
    case "openclaw":
      return path.join(projectDir, ".openclaw", BUNDLE_NAME);
    case "hermes":
      return path.join(os.homedir(), ".hermes", "skills", BUNDLE_NAME);
  }
}

export function upsertManagedSection(existing: string, marker: string, body: string): string {
  const begin = `<!-- BEGIN ${marker} -->`;
  const end = `<!-- END ${marker} -->`;
  const section = `${begin}\n${body.trim()}\n${end}`;
  const pattern = new RegExp(`${escapeRegExp(begin)}[\\s\\S]*?${escapeRegExp(end)}`, "m");

  if (pattern.test(existing)) {
    return existing.replace(pattern, section);
  }

  const trimmed = existing.trim();
  if (!trimmed) return `${section}\n`;
  return `${trimmed}\n\n${section}\n`;
}

function upsertManagedSectionFile(filePath: string, marker: string, body: string) {
  const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
  const next = upsertManagedSection(existing, marker, body);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, next, "utf8");
}

function copyDirectory(src: string, dest: string) {
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

function renderClaudeProjectSection(bundlePath: string): string {
  return [
    "## Founder Skills OS",
    `Load Founder Skills OS from \`${toPosix(bundlePath)}\`.`,
    `Read \`${toPosix(path.posix.join(toPosix(bundlePath), "workspace/project-instructions.md"))}\` before broad planning or implementation.`,
    "Start with `founder-partner` when the bottleneck is unclear.",
    "Continue active sequences like `validate-to-build`, `build-to-release`, and `weekly-operating-rhythm` before branching into ad hoc work.",
  ].join("\n\n");
}

function renderCodexSection(bundlePath: string): string {
  return [
    "## Founder Skills OS for Codex",
    `Use the generated Founder Skills OS bundle at \`${toPosix(bundlePath)}\`.`,
    `Primary workspace instructions: \`${toPosix(path.posix.join(toPosix(bundlePath), "workspace/project-instructions.md"))}\`.`,
    `Skills live under \`${toPosix(bundlePath)}/<domain>/<skill>/SKILL.md\` and sequences under \`${toPosix(bundlePath)}/sequences/\`.`,
    "Route uncertain requests through `founder-partner`, identify the current bottleneck explicitly, and keep build work tied to launch and GTM context.",
  ].join("\n\n");
}

function renderOpenCodeSection(bundlePath: string): string {
  return [
    "## Founder Skills OS for OpenCode",
    `Use the generated Founder Skills OS bundle at \`${toPosix(bundlePath)}\`.`,
    `Project instructions: \`${toPosix(path.posix.join(toPosix(bundlePath), "workspace/project-instructions.md"))}\`.`,
    "Treat `founder-partner` as the default router when the next move is unclear.",
    "Prefer the generated sequences for validate → build, build → release, and the weekly operating rhythm.",
  ].join("\n\n");
}

function renderOpenClawSection(bundlePath: string, sectionBody: string): string {
  return [
    "## Founder Skills OS for OpenClaw",
    `Bundle root: \`${toPosix(bundlePath)}\`.`,
    `AGENTS section source: \`${toPosix(path.posix.join(toPosix(bundlePath), "agents-founder-skills-section.md"))}\`.`,
    `Lite prompt: \`${toPosix(path.posix.join(toPosix(bundlePath), "founder-skills-lite-CLAUDE.md"))}\`.`,
    `Full prompt: \`${toPosix(path.posix.join(toPosix(bundlePath), "founder-skills-full-CLAUDE.md"))}\`.`,
    sectionBody,
  ].join("\n\n");
}

function toPosix(value: string): string {
  return value.split(path.sep).join(path.posix.sep);
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
