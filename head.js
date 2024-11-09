// function implementation of the assertEqual.js
// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//         console.log(`✅ Assertion Passed: ${actual}===${expected}`);
//     } else {
//         console.log(`❌ Assertion Failed ${actual} !== ${expected}`)
//     }
// };
const assertEqual = require("./assertEqual");

//Head function 
const head = function(array) {
    return array[0];
};
module.exports = head;
// TEST CODE
