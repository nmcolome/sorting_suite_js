const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe('bubble sort functionality', function() {
  it('it can sort an array of numbers', function() {
    assert.deepEqual(bubbleSort([5,4,0,3,2,1]), [0,1,2,3,4,5]);
  });

  it('it can sort an array of letters', function() {
    assert.deepEqual(bubbleSort(['i', 'd', 'b', 'a', 'c']), [ 'a', 'b', 'c', 'd', 'i' ]);
  })
})