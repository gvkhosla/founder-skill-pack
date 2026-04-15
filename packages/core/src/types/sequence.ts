export interface CanonicalSequence {
  name: string;
  description: string;
  entrypoint: string;
  steps: string[];
  primaryOutputs: string[];
  successSignal: string[];
  prompt: string;
}

export interface SequenceState {
  activeSequence?: string;
  currentStep?: string;
  blockedBy?: string[];
}
