const { secureString } = require('./index');
const assert = require('assert');

describe('Random strings', function () {
  describe('random string no prefix', function () {
    it('generates an alphanumeric string', function () {
      const randomString = secureString();
      assert.equal(true, /^[0-9a-z]+$/gi.test(randomString));
    });
    it('generates an alphanumeric string with prefix', function() {
      const randomString = secureString("test");
      assert.equal(true, randomString.startsWith("test_"))
    });
  });
});
