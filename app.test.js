const app = require("./app");

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
