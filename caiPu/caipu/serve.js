var express=require('express');
var proxy=require('http-proxy-middleware');
var app=express();
var cross=function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(cross);
app.use('/',proxy({target:'https://way.jd.com',changeOrigin:true}));
app.listen(8888);
