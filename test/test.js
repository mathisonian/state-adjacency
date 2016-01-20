/* global it */
var expect = require('expect.js');
var stateAdjacency = require('..');

it('should find states adjacent to MI', function () {
  var adjacent = stateAdjacency('MI');
  expect(adjacent).to.eql(['wi', 'in', 'oh']);
});

it('should return an empty array for gibberish input', function () {
  expect(stateAdjacency('fdsfd')).to.eql([]);
});
