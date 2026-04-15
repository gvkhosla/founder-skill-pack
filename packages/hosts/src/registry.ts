import type { HostAdapter } from "./base/host-adapter.js";
import { ChatGptAdapter } from "./chatgpt/index.js";
import { ClaudeChatAdapter } from "./claude-chat/index.js";
import { ClaudeCodeAdapter } from "./claude-code/index.js";
import { CodexAdapter } from "./codex/index.js";
import { HermesAdapter } from "./hermes/index.js";
import { OpenClawAdapter } from "./openclaw/index.js";
import { OpenCodeAdapter } from "./opencode/index.js";
import { PiAdapter } from "./pi/index.js";

export function getDefaultHostAdapters(): HostAdapter[] {
  return [
    new PiAdapter(),
    new ClaudeCodeAdapter(),
    new CodexAdapter(),
    new OpenCodeAdapter(),
    new OpenClawAdapter(),
    new HermesAdapter(),
    new ChatGptAdapter(),
    new ClaudeChatAdapter(),
  ];
}
