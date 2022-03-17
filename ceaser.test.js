const ceaserCipher = require("./ceaser");

test("Correct input", () => {
  expect(ceaserCipher("What a string!", 5)).toBe("Bmfy f xywnsl!");
});

test("Able to wrap around", () => {
  expect(ceaserCipher("ZX", 5)).toBe("EC");
});

test("Keeps characters that are not a letter", () => {
  expect(ceaserCipher("abc.abc", 5)).toBe("fgh.fgh");
});

test("Keeps upper case", () => {
  expect(ceaserCipher("ABC", 5)).toBe("FGH");
});
