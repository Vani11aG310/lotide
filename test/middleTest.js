const middle = require('../middle');
const assert = require('chai').assert;

describe("#Middle", () => {
  it('Should return [] if array length is <= 2', () => {
    assert.deepEqual(middle([1, 2]), [])
  });
  it('Should return [] if array length is <= 2', () => {
    assert.deepEqual(middle([1]), [])
  });
  it('Should return middle array if array length is odd', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('Should return 2 middle arrray elements if array length is even', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })
})