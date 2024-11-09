// function implementation of the assertEqual.js
const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ Assertion Passed: ${actual}===${expected}`);
    } else {
        console.log(`❌ Assertion Failed ${actual} !== ${expected}`)
    }
};

//Head function 
const head = function(array) {
    return array[0];
};

// TEST CODE
assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Mariam" );
assertEqual(head([1]), 1);