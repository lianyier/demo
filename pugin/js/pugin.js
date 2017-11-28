var defaults={
	time:3000,
	$page:null,
	$pre:null,
	$next:null,
	loop:true,
	speed:500
}
//构造函数
function Swiper(ele,opt){
	//创建容器
	this.container=ele||$('.container');
	//合并配置
	var opt=$.extend({},defaults,opt);
	//绑定配置
	for(var k in opt){
		this[k]=opt[k];
	}
	this.init();
}
Swiper.prototype={
	init:function(){
		this.width=this.container.width();
		this.index=0;
		this.$warp=$('.wrap');
		this.l=this.$warp.find('li').size();
		this.$pages=this.$page.find('li');
		this.pageIndex=0;
		this.flag=true;
		//是否自动播放
		if(this.time>0){
			this.autoPlay();
		}
		if(this.loop){
			//复制第一张图片
			var li=this.$warp.find('li:first-of-type').clone();
			this.$warp.append(li);
			this.l++;
		}
		this.bindEvent();
		this.pageEvent();
		this.enter();
		this.leave();
	},
	//自动播放
	autoPlay:function(){
		this.set();
	},
	//显示对应下标的图片
	move:function(){
		var _this=this;
		
		if(this.loop){
			//显示最后一张图片
			if(this.index<0){
				this.index=this.l-2;
				this.$warp.css({'left':-(this.l-1)*this.width});
			}
			//显示第一张图片
			if(this.index>this.l-1){
				this.$warp.css({'left':0});
				this.index=1;
			}
			if(this.index>this.l-2){
				this.pageIndex=0;
			}
			else{
				this.pageIndex=this.index;
			}
			this.$pages.eq(this.pageIndex).addClass('active').siblings().removeClass('active');
		}
		else{
			if(this.index<0){
				this.index=0;
			}
			if(this.index>this.l-1){
				this.index=this.l-1;
			}
			this.$pages.eq(this.index).addClass('active').siblings().removeClass('active');
		}
		this.flag=false;
		
		this.$warp.animate({'left':-this.index*this.width},this.speed,'swing',function(){
			_this.flag=true;
		});
		
	},
	//左右点击事件
	bindEvent:function(){
		var _this=this;
		if(this.$pre){
			this.$pre.click(function(){
				if(_this.flag){
					_this.index--;
					_this.move();
				}
			})
		}
		if(this.$next){
			this.$next.click(function(){
				if(_this.flag){
					_this.index++;
					_this.move();
				}
			})
		}
	},
	//圆点点击事件
	pageEvent:function(){
		var _this=this;
		if(this.$page){
			this.$pages.click(function(){
				var idx=$(this).index();
				_this.index=idx;
				_this.move();
//				_this.index++;
			})
		}
	},
	//鼠标划入轮播区
	enter:function(){
		var _this=this;
		this.container.mouseenter(function(){
			clearInterval(_this.tm);
		})
	},
	//鼠标划出轮播区
	leave:function(){
		var _this=this;
		this.container.mouseleave(function(){
			_this.set();
		})
	},
	set:function(){
		var _this=this;
		this.tm=setInterval(function(){
			_this.index++;
			_this.move();
		},this.time);
	}
}

