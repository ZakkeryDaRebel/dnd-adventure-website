import {
  DARK_FOREST_ADVENTURE,
  GOBLIN_WESTWOOD_ADVENTURE,
} from "../../../content/adventures";
import type { Adventure } from "./Adventure";

export const ADVENTURE_LIST: Record<string, Adventure> = {
  [DARK_FOREST_ADVENTURE.meta.id]: DARK_FOREST_ADVENTURE,
  [GOBLIN_WESTWOOD_ADVENTURE.meta.id]: GOBLIN_WESTWOOD_ADVENTURE,
};
