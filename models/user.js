/**
 * Created by tomokokawase on 17-4-7.
 */
const  BaseModel = require('./base');

function UseModel(store) {
    BaseModel.call(this,store,'user:');
}

module.exports = UseModel;

const PREFIX_EMAIL_TO_ID = 'email-id:';

Object.assign(UseModel.prototype,BaseModel.prototype,{
    create:function (obj,callback) {
        const self = this;
        BaseModel.prototype.create.call(this,obj,function (err,result) {
            if(err){
                return callback(err);
            }
            if(obj.email){
                self.store.set(PREFIX_EMAIL_TO_ID+obj.email,obj.id,callback);

            }
        });
    },
    getByEmail:function (email,callback) {
        const self =this;
        this.store.get(PREFIX_EMAIL_TO_ID+email,function (err,id) {
            if(err){
                return callback(err);
            }
            self.get(id,callback);
        });
    }
});