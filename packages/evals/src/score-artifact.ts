export interface ArtifactScore {
  specificity: number;
  decisiveness: number;
  usefulness: number;
  realism: number;
}

export function totalArtifactScore(score: ArtifactScore): number {
  return score.specificity + score.decisiveness + score.usefulness + score.realism;
}
