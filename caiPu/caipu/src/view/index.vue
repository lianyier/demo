<template>
	<div class="index">
		<ul class="show">
			<li v-for="(lt,index) in list" @click="toggle(index)">
				<div class="list">{{lt.name}}<i v-bind:class="{down:lt.show}"></i></div>
				<dl v-show="lt.show">
					<dd v-for="lt1 in lt.list"><a :href="'/list.html?id='+lt1.classid">{{lt1.name}}<i></i></a></dd>
				</dl>
			</li>
		</ul>
	</div>
</template>
	
<script>
	export default{
		name:'index',
		data(){
			return{
				list:[]
			}
		},
		mounted:function(){
			var _this=this;
			this.$ajax.get("http://172.30.67.144:8888/jisuapi/recipe_class?appkey=c2cb5326db5f13c009d53c7c0a4ff495")
			.then(function(res){
				var data=res.data.result.result;
				console.log(data);
				data.map(function(d){
					d.show=false;
				})
				_this.list=data;
			})
			.catch(function(err){
				console.log(err);
			})
		},
		methods:{
			toggle:function(index){
				this.list[index].show?this.list[index].show=false:this.list[index].show=true;
			}
		}
	}
</script>

<style>
	@import '../../static/css/style.css'
</style>