const eqArrays = require("./eqArrays"); //import eqArrays function


const assertArraysEqual = function(arr1, arr2) { //takes two arrays as argument and see if their equal
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  } else {
    console.log(`❌ Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
  }
};

module.exports = assertArraysEqual;