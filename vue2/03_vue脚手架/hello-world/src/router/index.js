import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Detail from '../views/DetailMsg'

export default new VueRouter({
	routes:[
		{
			path: '/about',
			component: About	
		},
		{
			path: '/home',
			component: Home,
			children:[
			{
				path: 'news',
				component: News,
				children:[
					{
						name:'detailname',
						path: 'detail',
						component: Detail
					}
				]
			}
			]
		}
	]
})