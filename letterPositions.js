//eqArray function
const eqArrays = require("./eqArrays");

//assertArraysEqual
const assertArraysEqual = require("./assertArraysEqual");
//letterPositions
const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
      const letter = sentence[i];
      if (letter !== " ") {
        if (!results[letter]) {
          results[letter] = []; 
        }
        results[letter].push(i);
      }
    }
    return results;
  };
const result = letterPositions("hello");
assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);