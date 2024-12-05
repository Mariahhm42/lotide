const without = require('../without');

// Test cases
console.log(without([1, 2, 3], [1])); // Expected: [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // Expected: ["1", "2"]
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // Expected: ["hello", "world"]
