/**
 * Created by tomokokawase on 17-3-28.
 */
var http = require('http');
var controllers = require('./controllers');
//require will use the index.js(if exists)firstly
var parseUrl = require('url').parse;

function ErrorHandler(req,res) {
    res.writeHead(404);
    res.end('404\n');
}

function find(ary,match) {
    for(var i = 0;i<ary.length;i++){
        if(match(ary[i])) return ary[i];
    }
}
const rules = [
    {path:'/',controller:controllers.home},
    {path:'/user',controller:controllers.user},
    {path:'/auth/register',controller:controllers.auth.register},
    {path:'/auth/login',controller:controllers.auth.login},
    {path:/^\/static(\/.*)/,controller:controllers.static}
];

var server = http.createServer(function (req,res) {
    var urlInfo = parseUrl(req.url);
    // console.log('url:',req.url,'urlInfo',urlInfo);
    var rule = find(rules,function(rule){
        if(rule.method){
            if(rule.method.toLowerCase()!==req.method.toLowerCase()){
                return false;
            }
        }
        if(rule.path instanceof RegExp){
            var matchResult = urlInfo.pathname.match(rule.path);
            if(matchResult){
                req.params = matchResult;
            }
            return urlInfo.pathname.match(rule.path);
        }
        return rule.path === urlInfo.pathname;
    });

    var controller = rule && rule.controller || ErrorHandler;
    controller(req,res);
    // res.end('hello world 233!\n');
});

server.listen(3000);