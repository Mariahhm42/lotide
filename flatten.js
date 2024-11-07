//eqArrays function
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

//assertArrasyEqual
const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
    } else {
      console.log(`❌ Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
    }
  };

const flatten = function(array) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
    
      result.push(array[i]);
    }
  }
  
  return result;
};

// Test case
console.log(flatten([1, 2, [3, 4], 5, [6]]));
