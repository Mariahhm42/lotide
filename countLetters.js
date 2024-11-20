const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ Assertion Passed: ${actual}===${expected}`);
    } else {
        console.log(`❌ Assertion Failed ${actual} !== ${expected}`)
    }
};

const countLetters = function(sentence) { 
//takes a string and returns an object with the count of each letter
    const results = {};
    for (const char of sentence) { //loop through each character in the sentence
        if (char !== " ") { //ignore space in within sentence
            if (results[char]) {
                results[char] += 1; //increment count if charcter is in the result objects
            } else {
                results[char] = 1;
            }
        }
    }
    return results;
};
console.log(countLetters("LHL"));
console.log(countLetters("Hello World"));
console.log(countLetters("a quick brown fox"));
module.exports = countLetters;