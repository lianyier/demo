<template>
	<div class="lists">
		<ul v-if="lists">
			<li v-for="list in lists">
				<a :href="'/detail.html?id='+list.classid">
					<img v-bind:src="list.pic" />
					<dl>
						<dt>
							<span>{{list.name}}</span>
							<span class="fr">{{list.peoplenum}}</span>
						</dt>
						<dd v-html="list.content"></dd>
					</dl>
				</a>
			</li>
		</ul>
		<div class="no-find" v-else>没有这个菜！</div>
	</div>
</template>

<script>
	export default{
		props: ['lists']
	}
</script>

<style>
	@import '../../static/css/style.css'
</style>