
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
module.exports = middle;