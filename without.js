const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

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


module.exports = without;