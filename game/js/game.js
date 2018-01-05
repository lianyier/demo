//
var $box=$('.game');
var $st=$('#st');
var fkWidth=20;//方块的宽度
var $fk='';
var left=0;
var top1=0;
var timer=0;
var box=new Array(4);
$st.click(function(){
	var $ff=$('<div class="block"></div>');
	$fk=$ff;
	left=$fk.position().left;
	top1=$fk.position().top;
	$box.append($fk);
})
document.onkeydown=function(e){
	moveAuto();
	move(e.keyCode);
}
//创建方块
function createBox(){
	switch(Math.random()*6){
		case 0:
		box[0]=
	}
}
//移动
function move(code){
	switch(code){
		//左移
		case 37:
		    left=left-fkWidth;
			$fk.css({'left':left,'top':top1});
			break;
		//右
		case 39:
			left=left+fkWidth;
			$fk.css({'left':left,'top':top1});
			break;
		case 40:
			top1=top1+fkWidth;
			$fk.css({'left':left,'top':top1});
			break;
	}
}
//自由下落
function moveAuto(){
	if(timer){
		clearInterval(timer)
	}
	timer=setInterval(function(){
		move(40);
	},500)
}
