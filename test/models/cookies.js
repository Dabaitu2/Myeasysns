/**
 * Created by tomokokawase on 17-4-7.
 */
const assert = require('assert');
const cookies = require('../../util/cookies');

describe('cookies',function () {
    it('should parse cookie',function () {
        var c = cookies.parse('foo=bar;foo1=bar1');
        assert.equal(c.foo,'bar');
        assert.equal(c.foo1,'bar1');
    })
});