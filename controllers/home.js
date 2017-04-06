/**
 * Created by tomokokawase on 17-3-28.
 */
const sendFile = require('../util/sendFiIe').sendFile;
const fs = require('fs');
const mime = require('mime');
const joinPath = require('path').join;
const viewPath = joinPath(__dirname,'../views');
module.exports = function (req,res) {
    var isLogin =false;
    var view = isLogin?'home.html':'welcome.html';
    sendFile(joinPath(viewPath,view),res);
};