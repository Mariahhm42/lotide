//importing head, tail, and middle functions from their respective files
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArrasyEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
const flatten = require('./flatten');
const map = require('./map');
const eqObjects = require('./eqObjects');
const assertObjectEqual = require('./assertObjectEqual');
const takeUntil = require('./takeUntil');
const without = require('./without');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const assertArraysEqualTest = require('./assertArraysEqualTest');
const assertEqualTest = require('./assertEqualTest');
const eqArraysTest = require('./eqArraysTest');
const headTest = require('./headTest');
const middleTest = require('./middleTest');
const tailTest = require('./tailTest');

//export the functions using shorthand property names
module.exports = {
  assertArraysEqual,
  assertEqual,
  countLetters,
  eqArrays,
  flatten,
  map,
  head,
  tail,
  middle,
  eqObjects,
  assertObjectEqual,
  takeUntil,
  without,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
  assertArraysEqualTest,
  assertEqualTest,
  eqArraysTest,
  headTest,
  middleTest,
  tailTest,

};
