import { capabilityMatrix } from "../base/capability-matrix.js";
import { ChatHostAdapter } from "../base/chat-host.js";

export class ClaudeChatAdapter extends ChatHostAdapter {
  id = "claude-chat";
  displayName = "Claude chat";
  capabilities = capabilityMatrix["claude-chat"];
}
