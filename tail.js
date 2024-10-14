const assertEqual = function(arg1, arg2) {
  if (arg1 === arg2) {
    console.log(`✅✅✅ Assertion Passed: ${arg1} === ${arg2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arg1} !== ${arg2}`);
  }
};

const tail = function(arr) {
  const newArray = arr.slice(1);
  return (newArray);
};


// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure the first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
