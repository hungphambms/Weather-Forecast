import { k2c } from "./temperature";

test("convert temperature k to c", () => {
  expect(k2c(350)).toBe(76);
});
