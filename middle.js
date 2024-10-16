const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return (false);
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return (false);
    }
  }
  return (true);
};

const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};

const middle = function(arr) {
  let middleArray = [];
  // check if array length is not less than or equal to 2
  if (arr.length > 2) {
    // check if array length is not odd
    if (arr.length % 2 === 0) {
      // find the 2 middle items of the array and push them to middleArray
      const index2 = arr.length / 2;
      const index1 = index2 - 1;
      middleArray.push(arr[index1], arr[index2])
    }
    // check if array length is odd
    if (arr.length % 2 !== 0) {
      // find the middle term and push to middleArray
      const index = arr.length / 2 - 0.5;
      middleArray.push(arr[index])
    }
  }
  return (middleArray);
}


// TEST CODE
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // => [4, 5]