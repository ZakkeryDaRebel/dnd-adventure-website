import { AbilityScores } from "./AbilityScores";
import { calculateModifier } from "./CalculateModifier";
import { Skills } from "./Skills";

export function calculateSkillModifier(
  skill: keyof typeof Skills,
  proficiencies: Partial<Record<keyof typeof Skills, number>>,
  abilityScores: Record<keyof typeof AbilityScores, number>,
): number {
  if (proficiencies[skill]) {
    return proficiencies[skill];
  }

  switch (skill) {
    case Skills.Athletics:
      return calculateModifier(abilityScores[AbilityScores.Strength]);
    case Skills.Acrobatics:
    case Skills.SleightOfHand:
    case Skills.Stealth:
      return calculateModifier(abilityScores[AbilityScores.Dexterity]);
    case Skills.Arcana:
    case Skills.History:
    case Skills.Investigation:
    case Skills.Nature:
    case Skills.Religion:
      return calculateModifier(abilityScores[AbilityScores.Intelligence]);
    case Skills.AnimalHandling:
    case Skills.Insight:
    case Skills.Medicine:
    case Skills.Perception:
    case Skills.Survival:
      return calculateModifier(abilityScores[AbilityScores.Wisdom]);
    case Skills.Deception:
    case Skills.Intimidation:
    case Skills.Performance:
    case Skills.Persuasion:
      return calculateModifier(abilityScores[AbilityScores.Charisma]);
  }
  return -10;
}
