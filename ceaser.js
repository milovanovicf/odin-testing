function ceaserCipher(string, num) {
  string = string.split("");
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
    let index = alphabet.indexOf(string[i]);
    index = index + num;
    while (index > 26) {
      index = index - 26;
    }
    string[i] = alphabet[index];
  }

  for (let i = 0; i < string.length; i++) {
    if (!alphabet.includes(string[i].toLowerCase())) {
      string[i] = string[i];
    } else if (string[i] === string[i].toUpperCase()) {
      string[i] = string[i].toLowerCase();
      encrypt(i);
      string[i] = string[i].toUpperCase();
    } else {
      encrypt(i);
    }
  }

  return string.join("");
}

module.exports = ceaserCipher;
