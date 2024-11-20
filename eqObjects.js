const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }
    
    for (let key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
        if (!eqArrays(val1, val2)) {
            return false;
        }
    } else if (val1 !== val2) {
        return false;
    }
  }
  return true;
}
//Test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

module.exports = eqObjects;