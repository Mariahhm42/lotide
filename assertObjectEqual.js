const eqObjects = function(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    
    if (keys1.length !== keys2.length) { 
        return false;
    }
   //loop through each key in the first object 
    for (let key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) { //if both values are Arrays, use eqArrays to compare them
        if (!eqArrays(val1, val2)) {
            return false; //if not, return false 
        }
    } else if (val1 !== val2) { //check if val are strictly equal if not arrays
        return false; //return false if values are not equal
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
    const inspect = require("util").inspect;
    console.log(`Example label: ${inspect(actual)}`);
    
    if (eqObjects(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
      } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }
  };
//objects to test assertObjectEqual
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

//test case 
assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(shirtObject, longSleeveShirtObject);
