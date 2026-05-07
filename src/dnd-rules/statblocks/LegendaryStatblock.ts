import type { DNDStatblock } from "./DNDStatblock";

export interface LegendaryStatblock extends DNDStatblock {
  legendaryResistance: {
    max: number;
    cur: number;
  };
  legendaryReaction: {
    max: number;
    cur: number;
  };
  legendaryReactionList: null;
}
