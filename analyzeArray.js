function analyzeArray(arr) {
  return {
    average: Math.floor(arr.reduce((a, b) => (a + b) / 2)),
    min: arr.sort((a, b) => a - b)[0],
    max: arr.sort((a, b) => b - a)[0],
    length: arr.length,
  };

  //   myObj["average"] = Math.floor(arr.reduce((a, b) => (a + b) / 2));
  //   myObj["min"] = arr.sort((a, b) => a - b)[0];
  //   myObj["max"] = arr.sort((a, b) => b - a)[0];
  //   myObj["length"] = arr.length;
}

module.exports = analyzeArray;
