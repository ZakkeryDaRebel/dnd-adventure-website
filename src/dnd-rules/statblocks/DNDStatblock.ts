import type { Dice } from "../../dice";
import type {
  Action,
  Alignment,
  CreatureType,
  Languages,
  Sense,
  Size,
  Cost,
  Item,
  AbilityScores,
  Skills,
} from "../";

export interface DNDStatblock {
  // Base information
  title: string;
  name: string;
  size: keyof typeof Size;
  creatureType: keyof typeof CreatureType;
  descriptionTag: string;
  alignment: keyof typeof Alignment;

  // AC, HP, Speed + Initiative
  armorClass: number;
  hp: {
    max: number;
    cur: number;
    dice: Dice;
  };
  speed: number;
  initiative: number;

  // Ability Scores
  abilityScores: Record<keyof typeof AbilityScores, number>;
  skills: Partial<Record<keyof typeof Skills, number>>;

  // Traits
  senses: Partial<Record<keyof typeof Sense, number>>;
  languages: (keyof typeof Languages)[];
  challengeRating: string;
  exp: number;
  //other traits (like passives)

  // Actions
  actions: Action[];
  bonusActions: Action[];
  reactions: Action[];

  // Loot
  equipment: Item[]; // Items holding or worn
  loot: Item[]; // Items or gear stored in backpack
  coins: Cost[]; // Coins in money pouch
}
