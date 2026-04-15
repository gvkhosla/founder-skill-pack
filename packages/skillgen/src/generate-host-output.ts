import type { GeneratedArtifact } from "../../core/src/types/host.js";
import type { CanonicalSkill } from "../../core/src/types/skill.js";

export function generateSimpleSkillMarkdown(skill: CanonicalSkill): string {
  return `---\nname: ${skill.name}\ndescription: ${skill.description}\n---\n\n# ${skill.name}\n\nOutputs:\n${skill.outputs.map((output) => `- ${output}`).join("\n")}\n`;
}

export function generateGenericSkillArtifacts(skill: CanonicalSkill): GeneratedArtifact[] {
  return [
    {
      path: `generated/generic/${skill.domain}/${skill.name}.md`,
      kind: "skill",
      content: generateSimpleSkillMarkdown(skill),
    },
  ];
}
