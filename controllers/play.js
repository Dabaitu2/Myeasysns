/**
 * Created by tomokokawase on 17-4-7.
 */
module.exports = function (req,res) {
    console.log('Cookie',req.headers.cookie);
    res.writeHead(200,{
        'Set-Cookie':'foo=bar; HttpOnly'
    });
    res.end();
};