<template>
	<div class="index search">
		<div class="tit">
			<input type="text" placeholder="搜索商品" v-model="val" @keyup.enter="search()" />
		</div>
		<list :lists="lists"></list>
	</div>
</template>

<script>
	import list from "./lists"
	export default{
		data(){
			return{
				lists:[],
				val:''
			}
		},
		components:{list},
		methods:{
			search:function(){
				var _this=this;
				console.log(this.val);
				this.$ajax.get('http://172.30.67.144:8888/jisuapi/search?keyword='+this.val+'&num=20&appkey=c2cb5326db5f13c009d53c7c0a4ff495')
				.then(function(res){
					var data=res.data.result.result.list;
					_this.lists=data;
				})
				.catch(function(err){
					console.log(err);
				})
			}
		}
	}
</script>

<style>
	@import '../../static/css/style.css'
</style>