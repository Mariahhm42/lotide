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
