const assertEqual = function(arg1, arg2) {
  if (arg1 === arg2) {
    console.log(`✅✅✅ Assertion Passed: ${arg1} === ${arg2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arg1} !== ${arg2}`);
  }
};


const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return;
}



// TEST CODE
assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
), "noma"); // => "noma");

assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 3
), "Akaleri");

assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 1
), "Blue Hill");