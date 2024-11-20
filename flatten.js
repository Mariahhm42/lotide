//eqArrays function
const eqArrays = require("./eqArrays");

//assertArrasyEqual
const assertArrasyEqual = require("./assertArraysEqual");

const flatten = function(array) { //flattens an array of arrays into a single array
  const result = []; //empty arr to store flattened arr
  //loop through each element in the input array
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);// add elements from nested array to result
      }
    } else {
    
      result.push(array[i]); //add non-array elements directly to result
    }
  }
  
  return result;
};

// Test case
console.log(flatten([1, 2, [3, 4], 5, [6]]));
module.exports = flatten;
