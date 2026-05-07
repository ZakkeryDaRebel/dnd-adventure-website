import { diceConstructor } from "../../../../dice";
import {
  AbilityScores,
  Alignment,
  attackDamageConstructor,
  CreatureType,
  Damage,
  Sense,
  Size,
  Skills,
  type DNDStatblock,
} from "../../../../dnd-rules";

export const WOLF: DNDStatblock = {
  title: "2014 Wolf",
  name: "Wolf",
  size: Size.Medium,
  creatureType: CreatureType.Beasts,
  descriptionTag: "",
  alignment: Alignment.UA,
  armorClass: 13,
  hp: {
    max: 11,
    cur: 11,
    dice: diceConstructor("2d8"),
  },
  speed: 40,
  initiative: 2,
  abilityScores: {
    [AbilityScores.Strength]: 12,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 6,
  },
  skills: {
    [Skills.Perception]: 3,
    [Skills.Stealth]: 4,
  },
  senses: {
    [Sense.PassivePerception]: 13,
  },
  languages: [],
  challengeRating: "1/4",
  exp: 50,
  actions: [
    {
      title: "Bite. Melee Weapon Attack",
      addToHit: 4,
      reach: 5,
      damage: [
        attackDamageConstructor(diceConstructor("2d4"), Damage.Piercing),
      ],
      addToDamage: [[2, Damage.Piercing]],
      description:
        "If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone",
    },
  ],
  bonusActions: [],
  reactions: [],
  equipment: [],
  loot: [],
  coins: [],
};
