export const AbilityScores = {
  Strength: "Strength",
  Dexterity: "Dexterity",
  Constitution: "Constitution",
  Intelligence: "Intelligence",
  Wisdom: "Wisdom",
  Charisma: "Charisma",
} as const;

export function calculateModifier(baseStat: number): number {
  return Math.floor((baseStat - 10) / 2);
}
