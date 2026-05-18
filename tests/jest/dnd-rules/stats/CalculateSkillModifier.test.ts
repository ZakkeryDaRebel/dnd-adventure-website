import { GUARD_SPEAR } from "../../../../src/content/dnd-data";
import {
  AbilityScores,
  calculateSkillModifier,
  Skills,
} from "../../../../src/dnd-rules/";

describe("Test modifier for a skill", () => {
  const skills: Partial<Record<keyof typeof Skills, number>> =
    GUARD_SPEAR.skills;
  const abilityScores: Record<keyof typeof AbilityScores, number> =
    GUARD_SPEAR.abilityScores;

  test("Guard's unproficient Accrobatics = 1", () => {
    const mod: number = calculateSkillModifier(
      Skills.Acrobatics,
      skills,
      abilityScores,
    );

    expect(mod).toBe(1);
  });

  test("Guard's unproficient Animal Handling = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.AnimalHandling,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });

  test("Guard's unproficient Arcana = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.Arcana,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });

  test("Guard's unproficient Athletics = 1", () => {
    const mod: number = calculateSkillModifier(
      Skills.Athletics,
      skills,
      abilityScores,
    );

    expect(mod).toBe(1);
  });

  test("Guard's unproficient Deception = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.Deception,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });

  test("Guard's unproficient History = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.History,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });

  test("Guard's unproficient Insight = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.Insight,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });

  test("Guard's unproficient Intimidation = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.Intimidation,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });

  test("Guard's unproficient Investigation = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.Investigation,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });

  test("Guard's unproficient Medicine = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.Medicine,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });

  test("Guard's unproficient Nature = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.Nature,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });

  test("Guard's proficient Perception = 2", () => {
    const mod: number = calculateSkillModifier(
      Skills.Perception,
      skills,
      abilityScores,
    );

    expect(mod).toBe(2);
  });

  test("Guard's unproficient Performance = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.Performance,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });

  test("Guard's unproficient Persuasion = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.Persuasion,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });

  test("Guard's unproficient Religion = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.Religion,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });

  test("Guard's unproficient Sleight of Hand = 1", () => {
    const mod: number = calculateSkillModifier(
      Skills.SleightOfHand,
      skills,
      abilityScores,
    );

    expect(mod).toBe(1);
  });

  test("Guard's unproficient Stealth = 1", () => {
    const mod: number = calculateSkillModifier(
      Skills.Stealth,
      skills,
      abilityScores,
    );

    expect(mod).toBe(1);
  });

  test("Guard's unproficient Survival = 0", () => {
    const mod: number = calculateSkillModifier(
      Skills.Survival,
      skills,
      abilityScores,
    );

    expect(mod).toBe(0);
  });
});
