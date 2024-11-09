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

  //assertArraysEqual function
  const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
    } else {
      console.log(`❌ Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
    }
  };
// without function 

const without = function(source, itemsToRemove) {
    const result = [];
    for (let i = 0; i < source.length; i++) {
      let shouldRemove = false;
      for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] === itemsToRemove[j]) {
          shouldRemove = true;
          break;
        }
      }
      if (!shouldRemove) {
        result.push(source[i]);
      }
    }
    return result;
  };

  //OR
//   let shouldRemove = false;
// for (let j = 0; j < itemsToRemove.length; j++) {
//   if (source[i] === itemsToRemove[j]) {
//     shouldRemove = true;
//     break;
//   }
// }
// if (!shouldRemove) {
//   result.push(source[i]);
// }

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
//test
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

