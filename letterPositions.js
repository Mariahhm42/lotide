//eqArrays
const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

//assertArraysequal function
const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
    } else {
      console.log(`❌ Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
    }
  };
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