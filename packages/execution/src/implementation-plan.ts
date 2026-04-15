export interface ImplementationPlanSection {
  title: string;
  items: string[];
}

export interface ImplementationPlan {
  summary: string;
  sections: ImplementationPlanSection[];
}

export function createImplementationPlan(summary: string, sections: ImplementationPlanSection[]): ImplementationPlan {
  return { summary, sections };
}
