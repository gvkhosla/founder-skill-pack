export interface CanonicalSequence {
  name: string;
  description: string;
  entrypoint: string;
  steps: string[];
  primaryOutputs: string[];
  successSignal: string[];
  prompt: string;
}

export interface SequenceStepState {
  name: string;
  status: "done" | "current" | "pending" | "blocked";
  outputs?: string[];
}

export interface SequenceState {
  activeSequence?: string;
  currentStep?: string;
  blockedBy?: string[];
  steps?: SequenceStepState[];
  successSignal?: string;
}
