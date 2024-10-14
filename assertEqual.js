const assertEqual = function(arg1, arg2) {
  if (arg1 === arg2) {
    console.log(`✅✅✅ Assertion Passed: ${arg1} === ${arg2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arg1} !== ${arg2}`);
  }
};


// TEST CODE
assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 1);
assertEqual("Angelo", "Angelo");
assertEqual(1.21, 1.21);
assertEqual(1.21, 1.2145);