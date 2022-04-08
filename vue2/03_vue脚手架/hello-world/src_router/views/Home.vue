<template>
	<div>
		<h1>我是Home，里面有News</h1>
		<router-link to='/home/news'> News</router-link>
		<div>
			<!-- 对组件进行缓存 -->
			<keep-alive include="News"> 
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>

	
</template>

<script>
	export default {
		name:'Home',

	}
</script>