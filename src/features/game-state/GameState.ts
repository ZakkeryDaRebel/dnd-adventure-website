export interface GameState {
  playerInitiative: number | null;
  setPlayerInitiative: (n: number | null) => void;
}
