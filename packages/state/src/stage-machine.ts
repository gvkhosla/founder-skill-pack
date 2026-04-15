import type { CompanyStage } from "../../core/src/types/state.js";

const allowedTransitions: Record<CompanyStage, CompanyStage[]> = {
  idea: ["validating", "building"],
  validating: ["building", "launched"],
  building: ["launched"],
  launched: ["revenue", "growing"],
  revenue: ["growing"],
  growing: [],
};

export function canTransition(from: CompanyStage, to: CompanyStage): boolean {
  return allowedTransitions[from].includes(to);
}
