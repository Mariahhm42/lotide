const assertEqual = require("../assertEqual");
const tail = require('../tail');


//test code 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const assert = require('chai').assert;

describe("#tail", () => {
    it("returns [] for ['5']", () => {
        assert.deepEqual(tail(['5']), []); 
      });
    });

