import { sum } from "../src/sum";

describe("test", () => {
  test("sum", () => {
    expect(sum(2, 2)).toBe(4);
  });
});
