import { capabilityMatrix } from "../base/capability-matrix.js";
import { CodingHostAdapter } from "../base/coding-host.js";

export class PiAdapter extends CodingHostAdapter {
  id = "pi";
  displayName = "pi";
  capabilities = capabilityMatrix.pi;
}
