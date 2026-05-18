import type { AdventureContext } from "./AdventureContext";

export interface GameState {
  playerInitiative: number | null;
  setPlayerInitiative: (n: number | null) => void;
  playerName: string;
  setPlayerName: (name: string) => void;

  adventure: AdventureContext | null;
  loadAdventure: (adv: AdventureContext, playerName: string) => void;
  updateAdventure: (fn: (prev: AdventureContext) => AdventureContext) => void;
}
