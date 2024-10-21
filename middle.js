const middle = function(inputArray) {
  let middleArray = [];
  // check if array length is not less than or equal to 2
  if (inputArray.length > 2) {
    // check if array length is not odd
    if (inputArray.length % 2 === 0) {
      // find the 2 middle items of the array and push them to middleArray
      const index2 = inputArray.length / 2;
      const index1 = index2 - 1;
      middleArray.push(inputArray[index1], inputArray[index2])
    } else {
      // check if array length is odd
      // find the middle term and push to middleArray
      const index = Math.floor(inputArray.length / 2);
      middleArray.push(inputArray[index])
    }
  }
  return middleArray;
}


module.exports = middle;