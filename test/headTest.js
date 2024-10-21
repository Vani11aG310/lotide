const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 4 if [4, 5, 3, 2, 7]", () => {
    assert.strictEqual(head([4, 5, 3, 2, 7]), 4);
  });
  it("returns 5 if [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it('Should return "Hello" if ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('Should return 1 if [1]', () => {
    assert.strictEqual(head([1]), 1);
  });
});