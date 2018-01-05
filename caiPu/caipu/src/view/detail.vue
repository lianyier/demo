<template>
	<div class="detail">
		<img class="tit-img" :src="lists.pic" />
		<h3>{{lists.name}}</h3>
		<div class="ms" v-html="lists.tag"></div>
		<div class="num">
			<span>用餐人数：{{lists.peoplenum}}</span>
			<span class="fr">烹饪时间：{{lists.cookingtime}}</span>
		</div>
		<div class="miaoshu" v-html="lists.content"></div>
		<dl>
			<dt>用料</dt>
			<dd v-for="mete in lists.material">{{mete.mname}} {{mete.amount}}</dd>
		</dl>
		<div class="buzhu" v-for="(pro,index) in lists.process">
			<h4>步骤{{index+1}}</h4>
			<p v-html="pro.pcontent"></p>
			<img :src="pro.pic" />
		</div>
	</div>
</template>

<script>
	export default{
		props:['lists']
	}
</script>

<style>
	@import '../../static/css/style.css'
</style>