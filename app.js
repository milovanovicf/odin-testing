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

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  calculator,
};
