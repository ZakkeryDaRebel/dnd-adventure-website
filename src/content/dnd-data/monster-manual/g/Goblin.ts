import { diceConstructor, roll } from "../../../../dice";
import {
  AbilityScores,
  Alignment,
  Coin,
  CreatureType,
  Languages,
  Sense,
  Size,
  Skills,
  type DNDStatblock,
} from "../../../../dnd-rules";
import { SCIMITAR } from "../..";

// export const GOBLIN_ARCHER: Statblock = {}

export const GOBLIN_WARRIOR: DNDStatblock = {
  title: "2014 Goblin",
  name: "Goblin Warrior",
  size: Size.Small,
  creatureType: CreatureType.Humanoids,
  descriptionTag: "(Goblinoid)",
  alignment: Alignment.NE,
  armorClass: 15,
  hp: {
    max: 7,
    cur: 7,
    dice: {
      printable: "2d6",
      numOfDice: 2,
      diceNumber: 6,
    },
  },
  speed: 30,
  initiative: 2,
  abilityScores: {
    [AbilityScores.Strength]: 8,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 8,
    [AbilityScores.Charisma]: 8,
  },
  skills: {
    [Skills.Stealth]: 6,
  },
  senses: {
    [Sense.Darkvision]: 60,
    [Sense.PassivePerception]: 9,
  },
  languages: [Languages.Common, Languages.Goblin],
  challengeRating: "1/4",
  exp: 50,
  actions: [],
  bonusActions: [],
  reactions: [],
  equipment: [SCIMITAR],
  loot: [],
  coins: [{ amount: roll(diceConstructor("1d6")), type: Coin.GP }],
};
