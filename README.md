# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @jvillanueva2000/lotide`

**Require it:**

`const _ = require('@jvillanueva2000/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(arr1, arr2)`: function to assert if 2 arrays are equal to each other
- `assertEqual(arg1, arg2)`: function to assert if 2 arguments are equal to each other
- `assertObjectsEqual(obj1, obj2)`: function to assert if 2 objects are equal to each other
- `countLetters(string)`: function to count how many times a certain character appears in a string
- `countOnly(sourceArray, conditions)`: function to count items in an array based on the conditions set in the second argument
- `eqArrays(arr1, arr2)`: function to check if 2 arrays are equal to each other
- `eqObjects(obj1, obj2)`: function to check if 2 objects are equal to each other
- `findKey(object, callback)`: function to find the key value pair of an object that match the criteria of the callback used
- `findKeyByValue(object, searchValue)`: function to find the key of an object that matches the value criteria used
- `head(array)`: function that returns the first element of an array
- `middle(array)`: function that returns the middle elements of an array
- `tail(array)`: function that returns all elements of the array except for the 0th element
- `letterPositions(sentence)`: function that returns the positions of a character in the provided string
- `map(array, callback)`: function that returns a new array by mutating the provided array with the provided callback
- `takeUntil(array, callback)`: function that returns a new array that has been sliced up until where the callback specifies
- `without(array, itemsToRemove)`: function that returns the given array having removed the items specified in itemsToRemove
