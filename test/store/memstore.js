/**
 * Created by tomokokawase on 17-4-6.
 */
const assert = require('assert');
// const runner = require('../runner');
const MemStore = require('../../memstore/memstore');

var memStore = new MemStore();
// runner([testSet,testGet,testIncr,testDel],function (err) {
//     if(err){
//         console.log('err',err.stack);
//     } else{
//         console.log('All done');
//     }
// });

describe('MemStore',function () {
    it('could set',testSet);
    it('could get',testGet);
    it('could incr',testIncr);
    it('could del',testDel);
});

function testSet(done) {
    memStore.set('foo','bar',function (err,result) {
        assert(!err,'Should save without error');
        done();
    });
}

function testGet(done) {
    memStore.get('foo',function (err,result) {
        assert(!err,'Should get without error');
        assert.equal(result,'bar');
        done();
    });
}

function testIncr(done) {
    memStore.incr('id',function (err,result) {
        assert(!err,'Should incr without error');
        assert.equal(result,1);
        memStore.incr('id',function (err,result) {
            assert(!err, 'Should incr without error');
            assert.equal(result, 2);
            done();
        });
    });
}

function testDel(done) {
    memStore.del('foo',function (err,result) {
        assert(!err,'Should del without error');
        memStore.get('foo',function (err,result) {
            assert(!err,'Should get without error');
            assert.equal(result,null);
            done();
        });
    });
}
