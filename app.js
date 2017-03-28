/**
 * Created by tomokokawase on 17-3-28.
 */
var http = require('http');

var server = http.createServer(function (req,res) {
    res.end('hello world!\n');
});

server.listen(3000);