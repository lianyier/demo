(function($){
	var defaults={
		$contain:'',
		$finger:'',
		$show:'',
		$big:''
	}
	function Img(opt){
		var opt=$.extend({},defaults,opt);
		for(var k in opt){
			this[k]=opt[k];
		}
		this.init();
	}
	Img.prototype={
		init:function(){
			this.wc=this.$contain.width();
		    this.hc=this.$contain.height();
		    this.wf=this.$finger.width();
		    this.hf=this.$finger.height();
		    this.ws=this.$show.width();
		    this.hs=this.$show.height();
		    this.scaleX=this.wc/this.wf;
		    this.scaleY=this.hc/this.hf;
		    this.sx=this.ws/this.wf;
		    this.sy=this.hs/this.hf;
			this.$big.css({
				'width':this.ws*this.scaleX,
				'height':this.hs*this.scaleY
			});
			this.bindMove();
		},
		bindMove:function(){
			var _this=this;
			this.$contain.mousemove(function(e){
				var offset = $(this).offset(),
				    x=e.pageX-offset.left,
				    y=e.pageY-offset.top;
				_this.move(_this,x,y);
				var off=_this.$finger.position();
				_this.$big.css({
					'left':-off.left*_this.sx,
					'top':-off.top*_this.sy
				});
			});
			this.enter();
			this.leave();
		},
		move:function(_this,x,y){
			if( x>=(_this.wf/2) && x<_this.wc-_this.wf/2 ){
				_this.$finger.css({'left':x-_this.wf/2});
			}
			if( y>=(_this.hf/2) && y<_this.hc-_this.hf/2 ){
				_this.$finger.css({'top':y-_this.hf/2});
			}
			if( x<(_this.wf/2)){
				_this.$finger.css({'left':0});
			}
			if(x>=(_this.wc-_this.wf/2)){
				_this.$finger.css({'left':_this.wc-_this.wf});
			}
			if( y<(_this.hf/2)){
				_this.$finger.css({'top':0});
			}
			if(y>=(_this.hc-_this.hf/2)){
				_this.$finger.css({'top':_this.hc-_this.hf});
			}
		},
		enter:function(){
			var _this=this;
			this.$contain.mouseenter(function(){
				_this.$finger.show();
				_this.$show.show();
			});
		},
		leave:function(){
			var _this=this;
			this.$contain.mouseleave(function(){
				_this.$finger.hide();
				_this.$show.hide();
			});
		}
	}
	$.fn.myImg=function(opt){
		return new Img(opt);
	}
})($)
