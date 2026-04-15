import { capabilityMatrix } from "../base/capability-matrix.js";
import { CodingHostAdapter } from "../base/coding-host.js";

export class CodexAdapter extends CodingHostAdapter {
  id = "codex";
  displayName = "Codex";
  capabilities = capabilityMatrix.codex;
}
