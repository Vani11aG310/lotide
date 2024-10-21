const head = require('../head');
const assertEqual = require('../assertEqual')

// TEST CODE
assertEqual(head([4, 5, 3, 2, 7]), 4);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), 3);
assertEqual(head([]), "test");