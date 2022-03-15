const sum = (a, b) => a + b;

function capitalize(word) {
  let [firstLetter, ...rest] = word;
  return [firstLetter.toUpperCase(), ...rest].join("");
}

function reverseString(word) {
  const tempArr = [];
  word = word.split("");
  word.forEach((letter) => {
    tempArr.unshift(letter);
  });
  return tempArr.join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtrack(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

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
    if (alphabet.includes(string[i].toLowerCase()) === false) {
      string[i] = string[i];
    } else if (string[i] == string[i].toUpperCase()) {
      string[i] = string[i].toLowerCase();
      encrypt(i);
      string[i] = string[i].toUpperCase();
    } else {
      encrypt(i);
    }
  }

  return string.join("");
}

function analyzeArray(arr) {
  const myObj = {
    average: Math.floor(arr.reduce((a, b) => (a + b) / 2)),
    min: arr.sort((a, b) => a - b)[0],
    max: arr.sort((a, b) => b - a)[0],
    length: arr.length,
  };

  //   myObj["average"] = Math.floor(arr.reduce((a, b) => (a + b) / 2));
  //   myObj["min"] = arr.sort((a, b) => a - b)[0];
  //   myObj["max"] = arr.sort((a, b) => b - a)[0];
  //   myObj["length"] = arr.length;
  return myObj;
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = {
  sum: sum,
  capitalize: capitalize,
  reverseString: reverseString,
  calculator,
  ceaserCipher: ceaserCipher,
  analyzeArray: analyzeArray,
};
