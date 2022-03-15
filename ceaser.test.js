const ceaserCipher = require("./ceaser");

test("caesar cipher", () => {
  expect(ceaserCipher("What a string!", 5)).toBe("Bmfy f xywnsl!");
});
