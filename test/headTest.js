const assertEqual = require("../assertEqual");


// Mocha an Chai based test Code 
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
    it("returns '5' for ['5']", () => {
        assert.strictEqual(head(['5']), '5'); 
      });
});

//test code
assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Mariam" );
assertEqual(head([1]), 1);