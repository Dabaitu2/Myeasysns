/**
 * Created by tomokokawase on 17-3-29.
 */
const fs = require('fs');
const mime = require('mime');
const joinPath = require('path').join;
exports.sendFile = function (path,res) {
    fs.readFile(path,function (err,data) {
        if(err){
            if('ENOENT' === err.code){
                res.writeHead(404);
                res.end('Not found\n');
                return;
            }else {
                res.statusCode = 500;
                res.end('Internal Server Error!\n');
                return
            }
        }
        var mimeType = mime.lookup(path);
        var charset = mime.charsets.lookup(mimeType);
        res.end(data+'\n');
    });
};
exports.redirect = function (location,res,statusCode) {
    statusCode = statusCode || 302;
    res.writeHead(statusCode,{
        location:location
    });
    res.end();
};
exports.sendError = function (err,res) {
    statusCode = statusCode||500;
    res.writeHead(statusCode);
    res.end(err.message);
};