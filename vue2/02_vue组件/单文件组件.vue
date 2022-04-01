<template>
	<div>
		<h1>School: {{ schoolName }}</h1>
		<button @click="showName"> 点我提示学校名 </button>
		<student/>
	</div>	
</template>

<script>
	export default {
		name: "School",
		data(){ // data必须写成函数形式
			return{
				schoolName: 'peking'
			}
		},
		methods:{
			showName(){
				alert(this.schoolName)
			}
		},
	}
</script>

<style>
	
</style>