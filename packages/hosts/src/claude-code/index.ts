import { capabilityMatrix } from "../base/capability-matrix.js";
import { CodingHostAdapter } from "../base/coding-host.js";

export class ClaudeCodeAdapter extends CodingHostAdapter {
  id = "claude-code";
  displayName = "Claude Code";
  capabilities = capabilityMatrix["claude-code"];
}
