//assertEqual Function compares two value and logs message to indicate if they are equal
const assertEqual = require("./assertEqual");

//count only function 
const countOnly = function(allItems, itemsToCount) {
    const results = {}; //empty object to store counts
    for (const item of allItems) {
    //check if the item is specified in itemToCount and is set to true
      if (itemsToCount[item]) {
        if (results[item]) {
          results[item] += 1; //increment count if item is in result 
        } else {
          results[item] = 1; //if item is not in result, ass with a count of 1
        }
      }
    }
    return results;
  };
//Exaple array of first name to count
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];
  const result1 = countOnly(firstNames, 
    { Jason: true, Karima: true, Fang: true, Agouhanna: false });
  
    module.exports = countOnly;