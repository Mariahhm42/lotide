const assertEqual = require("./assertEqual"); //import assertEqual

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { //check if arrays have the same length
    return false;
  }
  //loop through elements in the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; //if elements are not equal, return false
    }
  }
  return true; //return reture if all elements are equal
};

module.exports = eqArrays; //expots eqArrays function to other files
