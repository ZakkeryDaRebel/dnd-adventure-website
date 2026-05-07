import type { Spell } from "./Spell";

export interface UpcastSpell extends Spell {
  higherLevel: string;
}
