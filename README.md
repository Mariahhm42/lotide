# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @mariahhm42/lotide@1.0.6`

**Require it:**

`const _ = require('@mariahhm42/lotide@1.0.6');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `without`: Returns a new array excluding specified elements from the original array.
- `flatten`: Flattens a nested array into a single-level array
- `countOnly`: Counts occurences of specified items in an array
- `countLetters`: Returns an object with the count of each letter in a string
- `letterPositions`: Returns an object with the indices of each letter in a string.
- `findKeyByValue`: Finds the key corresponding to a given value in an object.
- `eqObjects`: Compares two objects for deep equality.
- `findKey`: Finds the first key in an object that satisfies a callback function.
- `map`: Creates a new array by applying a callback function to each element of an array.
- `takeUntil`: Returns a slice of an array up to a specified condition.
- `head`: Returns the first element of an array
- `eqArrays`: Compares two arrays for equality.
- `assertArraysEqual`: Asserts whether two arrays are equal.
- `assertEqual`: Asserts whether two primitive values are equal
- `assertObjectEqual`: Asserts whether two objects are equal
- `tail`: Returns all elements of an array except the first one.
- `middle`: Returns the middle element(s) of an array.
