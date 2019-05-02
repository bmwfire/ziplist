/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */

describe('ziplist', function () {
  const letters = ['a', 'b', 'c'];
  const numbers = [1, 2, 3];
  describe('zipping two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipList(letters, numbers).length).to.equal(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipList(letters, numbers)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
  describe('zipping two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipListTheSimpleWay(letters, numbers).length).to.equal(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipListTheSimpleWay(letters, numbers)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});
