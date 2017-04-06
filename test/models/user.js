/**
 * Created by tomokokawase on 17-4-7.
 */
const assert = require('assert');
const  MemStore = require('../../memstore/memstore');
const UserModel = require('../../models/user');
const runner = require('../runner');

const store = new MemStore();
const model = new UserModel(store);

// runner([testEmail],function (err) {
//     if(!err){
//         console.log('All done');
//     }
// });
describe('model',function () {
    it('could Email',testEmail);
});

function testEmail(done) {
    const testUser = {email:'tom@test.com',nickname:'Tom',password:'1234'};
    model.create(testUser,function (err) {
        assert(!err);
        model.getByEmail('tom@test.com',function (err,user) {
            assert(!err);
            assert.equal(user.email,testUser.email);
            assert.equal(user.nickname,testUser.nickname);
            assert.equal(user.password,testUser.password);
            done();
        });
    });
}

