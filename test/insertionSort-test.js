const assert = require('chai').assert
const insertionSort = require('../insertionSort')

describe('insertion sort functionality', function() {
  it('it can sort an array of numbers', function() {
    assert.deepEqual(insertionSort([1,0,4,3,2]), [0,1,2,3,4]);
  });

  it('it can sort an array of letters', function() {
    assert.deepEqual(insertionSort(['d', 'b', 'a', 'c']), [ 'a', 'b', 'c', 'd']);
  })
})