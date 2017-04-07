/**
 * Created by tomokokawase on 17-3-28.
 */
const cookies = require('../util/cookies');
const send = require('../util/sendFiIe');
const models = require('../models');
function getLoginUserId(req,callback) {
    var c = cookies.parse(req.headers.cookie||'');
    console.log('c',c);
    if(!c.token){
        return callback();
    }
    models.token.get(c.token,callback);
}

module.exports = function (req,res) {
    getLoginUserId(req,function (err,userId) {
        if(err){
            return send.sendError(err,res);
        }
        console.log('userId',userId);
        models.user.get(userId,function (err,user) {
            console.log('user',user);
            if(err){
                return send.sendError(err,res);
            }
            res.end(JSON.stringify(user));
        })
    });
};