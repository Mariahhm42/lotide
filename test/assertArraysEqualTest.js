const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

// Test case
assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3], [3, 2, 1]);