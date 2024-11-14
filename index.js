//importing head, tail, and middle functions from their respective files
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

//export the functions using shorthand property names
module.exports = {
  head,
  tail,
  middle
};