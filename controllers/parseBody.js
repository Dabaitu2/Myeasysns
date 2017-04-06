/**
 * Created by tomokokawase on 17-4-6.
 */
const qs = require('querystring');
var getRawBody = require('./getRawBody');
module.exports = function (req,callback) {
    getRawBody(req,function (err,rawBody) {
        if(err){
            return callback(err);
        }
        var type = req.headers['content-type']||'';
        type = type.split(';')[0];
        if(type==='application/x-www-form-urlencoded'){
            var body = qs.parse(rawBody);
            callback(null,body);
            return;
        }
        callback();
    })
};