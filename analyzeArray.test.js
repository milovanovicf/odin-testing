const analyzeArray = require("./analyzeArray");

test("Calculate average from array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("Calculate min from array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("Calculate max from array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("Calculate length from array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("Return empty object if array is empty", () => {
  expect(analyzeArray([])).toStrictEqual({});
});

test("Calculate max from array with decimals", () => {
  expect(analyzeArray([1.4, 5.5, 6.6, 7.7, 8.2, 2.6]).max).toBe(8.2);
});
