import type { Cost } from "./Cost";
import type { Coin } from "./Coin";

export function costConstructor(amount: number, type: keyof typeof Coin): Cost {
  return {
    amount: amount,
    type: type,
  };
}
