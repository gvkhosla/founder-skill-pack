export interface CanonicalSkill {
  name: string;
  domain: string;
  description: string;
  invocations: string[];
  outputs: string[];
  dependsOn: string[];
  feedsInto: string[];
  prompt: string;
  reference?: string;
  checks: string[];
  readinessGate?: string;
  supportedHosts?: string[];
}
