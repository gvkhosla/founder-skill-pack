import { capabilityMatrix } from "../base/capability-matrix.js";
import { CodingHostAdapter } from "../base/coding-host.js";

export class OpenCodeAdapter extends CodingHostAdapter {
  id = "opencode";
  displayName = "OpenCode";
  capabilities = capabilityMatrix.opencode;
}
