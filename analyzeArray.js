function analyzeArray(arr) {
  const sort = arr.sort((a, b) => a - b);

  if (arr.length === 0) {
    return {};
  } else {
    return {
      average: Math.floor(arr.reduce((a, b) => a + b) / arr.length),
      min: sort[0],
      max: sort[arr.length - 1],
      length: arr.length,
    };
  }
}
console.log(analyzeArray([2, 5, 6, 78, 1]));
module.exports = analyzeArray;
