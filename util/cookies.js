/**
 * Created by tomokokawase on 17-4-7.
 */
exports.parse = function (cookie) {
    var result ={};
    cookie.split(';').map(function (kv) {
        var pair = kv.trim().split('=');
        result[pair[0]]=pair[1];
    });
    return result;
};