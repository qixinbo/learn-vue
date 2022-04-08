<template>
	<div>
		<h2>我News</h2>
		<ul>
			<li v-for='m in messageList' :key='m.id'>
				<!-- 路由传参 -->
				<!-- to的字符串写法 -->
				<!-- <router-link :to='`/home/news/detail?id=${m.id}&title=${m.title}`'>{{m.title}}</router-link> -->
				<!-- to的对象写法 -->
				<router-link :to="{
					// 多级路由的写法
					// path:'/home/news/detail',
					// 多级路由的命名路由写法
					name:'detailname',
					query:{
						id: m.id,
						title: m.title
					}
				}">
					{{m.title}}
				</router-link>
				<input type="text" name=""/>
				<button @click="pushShow(m)">push查看</button>
				<button @click="replaceShow(m)">replace查看</button>
			</li>
		</ul>
		<hr>
		<router-view></router-view>	
	</div>

</template>

<script>
	export default {
		name:'News',
		data(){
			return {
				messageList:[
					{id: '001', title: '001消息'},
					{id: '002', title: '002消息'},
					{id: '003', title: '003消息'}
				]
			}
		},
		methods:{
			pushShow(m){
				this.$router.push({
					name:'detailname',
					query:{
						id: m.id,
						title: m.title					
				}})
			},
			replaceShow(m){
				this.$router.replace({
					name:'detailname',
					query:{
						id: m.id,
						title: m.title					
				}})
			}
		},
		activated(){
			console.log("News被激活了")
		},
		deactivated(){
			console.log('News deactivated')
		}
	}
</script>