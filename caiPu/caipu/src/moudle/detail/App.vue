<template>
	<div id="app">
	    <detail :lists="obj"></detail>
	</div>
</template>

<script>
	import detail from "../../view/detail"
	var id = location.search.match(/id=(\w+)/)[1];//获取id
	export default{
		name:'app',
		data(){
			return{
				obj:{}
			}
		},
		components:{detail},
		mounted:function(){
			var _this=this;
			this.$ajax.get('http://172.30.67.144:8888/jisuapi/detail?id='+id+'&appkey=c2cb5326db5f13c009d53c7c0a4ff495')
			.then(function(res){
				var data=res.data.result.result;
				_this.obj=data;
			})
			.catch(function(err){
				console.log(err);
			})
		}
	}
</script>

<style>
</style>