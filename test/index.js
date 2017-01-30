var assert = require('assert');

var isIsogram = require('../');

describe('isIsogram', function() {
  describe('words', function() {
    it('returns true for isogramatic words', function() {
      assert.equal(isIsogram('isogram'), true);
    });

    it('returns false for non-isogramatic words', function() {
      assert.equal(isIsogram('wedding'), false);
    });
  });

  describe('phrases', function() {
    it('returns true for isogramatic phrases', function() {
      assert.equal(isIsogram('quick on the draw'), true);
    });

    it('returns false for non-isogramatic phrases', function() {
      assert.equal(isIsogram('flipped turned upside down'), false);
    });
  });
});
