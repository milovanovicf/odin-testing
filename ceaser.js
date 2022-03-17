function ceaserCipher(string, num) {
  let splittedString = string.split("");
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "g",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function encrypt(i) {
    let index = alphabet.indexOf(splittedString[i]);
    index = index + num;
    while (index > 26) {
      index -= 26;
    }
    splittedString[i] = alphabet[index];
  }

  for (let i = 0; i < splittedString.length; i++) {
    if (!alphabet.includes(splittedString[i].toLowerCase())) {
      splittedString[i] = splittedString[i];
    } else if (splittedString[i] == splittedString[i].toUpperCase()) {
      splittedString[i] = splittedString[i].toLowerCase();
      encrypt(i);
      splittedString[i] = splittedString[i].toUpperCase();
    } else {
      encrypt(i);
    }
  }

  return splittedString.join("");
}

module.exports = ceaserCipher;
