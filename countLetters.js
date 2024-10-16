const assertEqual = function(arg1, arg2) {
  if (arg1 === arg2) {
    console.log(`✅✅✅ Assertion Passed: ${arg1} === ${arg2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arg1} !== ${arg2}`);
  }
};

const countLetters = function(stringToCount) {
  const countOfLetters = {};
  const characterToSkip = " ";
  // loop over string and add count of character to object
  for (const letter of stringToCount) {
    // check if character is not a space
    if (letter !== characterToSkip) {
      if (countOfLetters[letter]) {
        countOfLetters[letter] += 1;
      } else {
        countOfLetters[letter] = 1;
      }  
    }
  }
  return (countOfLetters);
}


// TEST CODE
const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["u"], 2);
assertEqual(result1["e"], 3);