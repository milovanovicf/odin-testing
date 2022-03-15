const { analyzeArray } = require("./app");
const app = require("./app");

test("add", () => {
  expect(app.sum(1, 2)).toBe(3);
});

test("capitalize", () => {
  expect(app.capitalize("filip")).toBe("Filip");
});

test("reverseString", () => {
  expect(app.reverseString("filip")).toBe("pilif");
});

test("add two numbers", () => {
  expect(app.calculator.add(1, 2)).toBe(3);
});

test("multiply two numbers", () => {
  expect(app.calculator.multiply(5, 2)).toBe(10);
});

test("subtrack two numbers", () => {
  expect(app.calculator.subtrack(5, 2)).toBe(3);
});

test("devide two numbers", () => {
  expect(app.calculator.divide(6, 2)).toBe(3);
});

test("caesar cipher", () => {
  expect(app.ceaserCipher("What a string!", 5)).toBe("Bmfy f xywnsl!");
});

test("analyzeArray()", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("analyzeArray()", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("analyzeArray()", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("analyzeArray()", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
