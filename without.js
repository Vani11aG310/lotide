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

const without = function(sourceArray, itemsToRemove) {
  const newArray = sourceArray.slice();
  // loop through sourceArray
  for (const index in sourceArray) {
    // loop through itemsToRemove
    for (const value of itemsToRemove) {
      // if element at index equals value in itemsToRemove
      if (sourceArray[index] === value) {
        newArray.splice(index, 1);
      }
    }
  }
  return (newArray);
};


// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["Cookie", "Cake", "Lard", 64], ["Lard", "64"]), ["Cookie", "Cake", 64]);
assertArraysEqual(without(["4", "3", "2", 5], ["2"]), ["4", "3", 5]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);