import type { Components } from "./Components";
import type { SpellSchool } from "./SpellSchool";

export interface Spell {
  name: string;
  level: number;
  school: keyof typeof SpellSchool;
  castingTime: string;
  range: number | string;
  duration: string;
  components: Partial<Record<keyof typeof Components, string>>;
  description: string;
}
