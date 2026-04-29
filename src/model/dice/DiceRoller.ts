import type { Dice } from "./Dice";

export function roll(dice: Dice): number {
  let total = 0;
  for (let i = 0; i < dice.numOfDice; i++) {
    total += Math.floor(Math.random() * dice.diceNumber) + 1;
  }
  return total;
}
