var assert = require('assert');

var isIsogram = require('../');

describe('isIsogram', function() {
  it('returns true for isogramatic strings', function() {
    assert.equal(isIsogram('isogram'), true);
  });

  it('returns false for non-isogramatic strings', function() {
    assert.equal(isIsogram('wedding'), false);
  });
});
