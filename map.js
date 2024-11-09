//eqArray function
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

//assertArraysEqual
const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
    } else {
      console.log(`❌ Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
    }
  };

  //map function
  const map = function (array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    } return results;
  }; 

  const words = ["mariam", "soup", "tastes", "really", "good"];
  
//   Test Cases
const result1 = map(words, word => word[0]);
assertArraysEqual(result1, ["l", "s", "t", "r", "g"]);