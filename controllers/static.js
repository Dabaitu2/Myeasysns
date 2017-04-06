/**
 * Created by tomokokawase on 17-3-28.
 */
const sendFile = require('../util/sendFiIe').sendFile;
const joinPath = require('path').join;
const publicPath = joinPath(__dirname,'../public');
module.exports = function (req,res) {
    var path = req.params[1];
    path = joinPath(publicPath,path);
    sendFile(path,res);
};