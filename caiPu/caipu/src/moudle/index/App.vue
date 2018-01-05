<template>
  <div id="app">
    <router-view></router-view>
    <div class="foot-nav">
    	<router-link to="/">首页</router-link>
    	<router-link to="/search">搜索</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
	
<style>
	@import '../../../static/css/style.css'
</style>
