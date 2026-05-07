import type { DNDStatblock } from "./DNDStatblock";
import type { Condition, Damage } from "../";

export interface DamageStatblock extends DNDStatblock {
  damage: {
    resistances: (typeof Damage)[];
    immunities: (typeof Damage)[];
    vulnerabilities: (typeof Damage)[];
  };
  condition: {
    immunities: (typeof Condition)[];
  };
}
