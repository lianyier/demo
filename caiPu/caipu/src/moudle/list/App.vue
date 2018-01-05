<template>
  <div id="app">
    <lists :lists="list"></lists>
  </div>
</template>

<script>
import lists from "../../view/lists"
var id = location.search.match(/id=(\w+)/)[1];//获取id
console.log(id);
export default {
  name: 'app',
  data(){
  	return{
  		list:[]
  	}
  },
  components:{lists},
  mounted:function(){
  	var _this=this;
  	this.$ajax.get('http://172.30.67.144:8888/jisuapi/byclass?classid='+id+'&start=0&num=20&appkey=c2cb5326db5f13c009d53c7c0a4ff495')
  	.then(function(res){
  		var data=res.data.result.result.list;
  		console.log(data);
  		_this.list=data;
  	})
  	.catch(function(err){
  		console.log(err);
  	})
  }
}
</script>
	
<style>
	@import '../../../static/css/style.css'
</style>
