export const Coin = {
  CP: "Copper Pieces", // Worth 1/100 GP
  SP: "Silver Pieces", // Worth 1/10 GP
  GP: "Gold Pieces", // Worth 1 GP
  EP: "Electrum Pieces", // Worth 1/2 GP
  PP: "Platinum Pieces", // Worth 10 GP
  ["Copper Pieces"]: "CP",
  ["Silver Pieces"]: "SP",
  ["Gold Pieces"]: "GP",
  ["Electrum Pieces"]: "EP",
  ["Platinum Pieces"]: "PP",
} as const;

export type Cost = {
  amount: number;
  type: keyof typeof Coin;
};
