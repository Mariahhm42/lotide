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
//assertArrays Functions
const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
    } else {
      console.log(`❌ Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
    }
  };

  //middlefunction
const middle = function(array) {
    const length = array.length;
    if (length <= 2) return [];
  
    const midIndex = Math.floor(length / 2);
    
    if (length % 2 === 0) {
      // If even, return the two middle elements
      return [array[midIndex - 1], array[midIndex]];
    } else {
      // If odd, return the single middle element
      return [array[midIndex]];
    }
  };
  
  // Test cases
  assertArraysEqual(middle([1]), []);
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); 
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); 
assertArraysEqual(middle([1, 2]), []); 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 