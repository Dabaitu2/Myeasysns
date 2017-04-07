/**
 * Created by tomokokawase on 17-4-7.
 */
const MemStore = require('../memstore/memstore');
const BaseModel = require('./base');
const UserModel = require('./user');

const memStore = new MemStore();

exports.user = new UserModel(memStore);
exports.token = new BaseModel(memStore,'token:');