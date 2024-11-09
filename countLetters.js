const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ Assertion Passed: ${actual}===${expected}`);
    } else {
        console.log(`❌ Assertion Failed ${actual} !== ${expected}`)
    }
};
const countLetters = function(sentence) {
    const results = {};
    for (const char of sentence) {
        if (char !== " ") {
            if (results[char]) {
                results[char] += 1;
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