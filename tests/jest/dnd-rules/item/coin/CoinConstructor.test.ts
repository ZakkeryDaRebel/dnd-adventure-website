import { Coin, costConstructor, type Cost } from "../../../../../src/dnd-rules";

function compare(costToCompare: Cost, amount: number, type: keyof typeof Coin) {
  expect(costToCompare.amount).toBe(amount);
  expect(costToCompare.type).toBe(type);
}

describe("Coin Constructor", () => {
  const amount: number = 10;
  const type: keyof typeof Coin = Coin.GP;

  test("create a 10 GP Cost", () => {
    const gpCost: Cost = costConstructor(amount, type);

    compare(gpCost, amount, type);
  });

  test("create a 87 SP Cost", () => {
    const amount: number = 87;
    const type: keyof typeof Coin = Coin.SP;

    const spCost: Cost = costConstructor(amount, type);

    compare(spCost, amount, type);
  });
});
