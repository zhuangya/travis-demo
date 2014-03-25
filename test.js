var mocha = require('mocha');
var assert = require('chai').assert;
var reverseString = require('./index');

describe('travis-demo', function () {
  it('should reverse string', function () {
    assert.equal(reverseString('olleh'), 'hello');
  });
});
