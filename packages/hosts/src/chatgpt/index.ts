import { capabilityMatrix } from "../base/capability-matrix.js";
import { ChatHostAdapter } from "../base/chat-host.js";

export class ChatGptAdapter extends ChatHostAdapter {
  id = "chatgpt";
  displayName = "ChatGPT";
  capabilities = capabilityMatrix.chatgpt;
}
