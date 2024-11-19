//eqArray function
const eqArrays = require("./eqArrays");

//assertArraysEqual
const assertArraysEqual = require("./assertArraysEqual");

  //map function
  //applies callback function to each element
  const map = function (array, callback) {
    const results = []; //empty array to store transformed results
    for (let item of array) {
        results.push(callback(item));
    } return results;
  }; 

  const words = ["mariam", "soup", "tastes", "really", "good"];
  
//   Test Cases
const result1 = map(words, word => word[0]);
assertArraysEqual(result1, ["l", "s", "t", "r", "g"]);