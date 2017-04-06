/**
 * Created by tomokokawase on 17-4-6.
 */
const qs = require('querystring');
const send = require('../util/sendFiIe');
const parseBody = require('./parseBody');

exports.login = function (req,res) {
    parseBody(req,function (err,body) {
        if(err){
            send.sendError(err,res);
            return;
        }
        send.redirect('/',res);
    });
};
exports.register = function (req,res) {
    parseBody(req,function (err,body) {
        var user = {
            email:body.email,
            password:body.password,
            nickname:body.nickname
        };
        send.redirect('/',res);
    });
};