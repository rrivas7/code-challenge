// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.


module.exports = Hamming;

function Hamming () {
  this.compute = function(firstDNAStrand, secondDNAStrand) {
    if (firstDNAStrand.length != secondDNAStrand.length) throw 'DNA strands must be of equal length.';

    numberOfMutations = 0;
    firstDNAStrand.split('').forEach(function(char, index) {
      if (char != secondDNAStrand[index]) numberOfMutations++;
    });
    return numberOfMutations;
  };
}
