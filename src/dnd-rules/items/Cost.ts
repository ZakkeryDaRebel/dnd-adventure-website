import type { Coin } from "./Coin";

export type Cost = {
  amount: number;
  type: keyof typeof Coin;
};
