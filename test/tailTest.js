const assertEqual = require("../assertEqual");
const tail = require('../tail');


//test code 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
    it("returns '5' for ['5']", () => {
        assert.strictEqual(tail(['5']), '5'); 
      });
      it("returns '5' for ['5']", () => {
        assert.strictEqual(tail(['5']), '5'); 
      });
    });

