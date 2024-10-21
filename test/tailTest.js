const tail = require('../tail');
const assert = require('chai').assert;

describe('#Tail', () => {
  it('Should return ["Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('Should return the length of the array after slicing', () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2)
  });
});