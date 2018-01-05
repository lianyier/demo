var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.use(express.static('pub'));
var url=bodyParser.urlencoded({extended:false});
//跨域中间件
var allowCrossDomain=function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	res.header('Access-Control-Allow-Credentials','true');
	next();
}
app.use(allowCrossDomain);
//get 第一个参数是页面地址
app.get('/index.html',function(req,res){
	//返回html文件
	res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/abc',function(req,res){
	res.send("1");
})
app.get('/abcd',function(req,res){
	var code=req.query.code;
	if(code){
		res.send('success');
	}
	else{
		res.send('fail');
	}
})
//post 第一个参数是form action的地址
app.post('/',url,function(req,res){
	var response={
		"user":req.body.user,
		"pwd":req.body.pwd
	}
	if(response.user=='cl'&&response.pwd=='123'){
		res.jsonp('success');
	}
	else{
		res.jsonp('fail');
	}
})
var server=app.listen(8080,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log(host,1,port);
})
