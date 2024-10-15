const assertEqual = function(arg1, arg2) {
  if (arg1 === arg2) {
    console.log(`✅✅✅ Assertion Passed: ${arg1} === ${arg2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arg1} !== ${arg2}`);
  }
};

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


// TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));