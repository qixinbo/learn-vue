<template>
	<div>
		<h1>我是Home，里面有News</h1>
		<router-link to='/home/news'> News</router-link>
		<div>
			<router-view></router-view>	
		</div>
	</div>

	
</template>

<script>
	export default {
		name:'Home'
	}
</script>