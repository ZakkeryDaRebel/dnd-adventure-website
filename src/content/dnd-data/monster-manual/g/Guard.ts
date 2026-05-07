import { diceConstructor, roll } from "../../../../dice";
import {
  AbilityScores,
  Alignment,
  attackDamageConstructor,
  Coin,
  costConstructor,
  CreatureType,
  Damage,
  Languages,
  Sense,
  Size,
  Skills,
  type DNDStatblock,
} from "../../../../dnd-rules";
import { CHAIN_SHIRT, SHIELD, SPEAR } from "../../";

const pierce = Damage.Piercing;

// export const GUARD_SHORTBOW: DNDStatblock = {}

export const GUARD_SPEAR: DNDStatblock = {
  title: "2014 Guard",
  name: "Spear Guard",
  size: Size.Medium,
  creatureType: CreatureType.Humanoids,
  descriptionTag: " (any race)",
  alignment: Alignment.Any,
  armorClass: 16,
  hp: {
    max: 11,
    cur: 11,
    dice: diceConstructor("2d8"),
  },
  speed: 30,
  initiative: 1,
  abilityScores: {
    [AbilityScores.Strength]: 13,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 10,
  },
  skills: {
    [Skills.Perception]: 2,
  },
  senses: {
    [Sense.PassivePerception]: 12,
  },
  languages: [Languages.Common],
  challengeRating: "1/8",
  exp: 25,
  actions: [
    {
      title: "Spear (One Handed). Melee Weapon Attack",
      addToHit: 3,
      reach: 5,
      damage: [attackDamageConstructor(diceConstructor("1d6"), pierce)],
      addToDamage: [[1, pierce]],
      description: "",
    },
    {
      title: "Spear (Two Handed). Melee Weapon Attack",
      addToHit: 3,
      reach: 5,
      damage: [attackDamageConstructor(diceConstructor("1d8"), pierce)],
      addToDamage: [[1, pierce]],
      description: "",
    },
  ],
  bonusActions: [],
  reactions: [],
  equipment: [CHAIN_SHIRT, SHIELD, SPEAR],
  loot: [],
  coins: [
    costConstructor(roll(diceConstructor("2d4")), Coin.GP),
    costConstructor(roll(diceConstructor("2d6")), Coin.SP),
  ],
};
