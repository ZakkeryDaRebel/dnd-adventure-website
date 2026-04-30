import { Coin, Cost } from "../../../../../src/model/item/Cost";
import { costConstructor } from "../../../../../src/model/item/CostConstructor";

function compare(costToCompare: Cost, amount: number, type: keyof typeof Coin) {
  expect(costToCompare.amount).toBe(amount);
  expect(costToCompare.type).toBe(type);
}

describe("Coin Constructor", () => {
  const amount: number = 10;
  const type = Coin.GP;

  test("create a 10 GP Cost", () => {
    const gpCost = costConstructor(amount, type);

    compare(gpCost, amount, type);
  });

  test("create a 87 SP Cost", () => {
    const amount: number = 87;
    const type = Coin.SP;

    const spCost = costConstructor(amount, type);

    compare(spCost, amount, type);
  });
});
