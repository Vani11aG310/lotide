const assertEqual = function(arg1, arg2) {
  if (arg1 === arg2) {
    console.log(`✅✅✅ Assertion Passed: ${arg1} === ${arg2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arg1} !== ${arg2}`);
  }
};

const head = function(arr) {
  if (arr === undefined) {
    return (undefined);
  }
  return (arr[0]);
};


// TEST CODE
assertEqual(head([4, 5, 3, 2, 7]), 4)
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1)
assertEqual(head(), 3)
assertEqual(head(), "test")