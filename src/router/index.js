import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/index.vue'
import HomeContent from '../pages/home/Home.vue'
import Login from '../pages/Login.vue'
import Reports from '../pages/Reports.vue'
import Planning from '../pages/projects/Planning.vue'
import Bidding from '../pages/projects/Bidding.vue'
import Construction from '../pages/projects/Construction.vue'
import NewMessage from '../pages/messages/NewMessage.vue'
import Help from '../pages/messages/Help.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: __dirname,
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Home,
			name: 'home',
			children: [
				{
					path: '/',
					component: HomeContent,
					name: 'home'
				},
				{
					path: 'login',
					component: Login,
					name: 'login'
				},
				{
					path: 'reports',
					component: Reports,
					name: 'reports'
				},
				{
					path: 'projects/planning',
					component: Planning,
					name: 'planning'
				},
				{
					path: 'projects/bidding',
					component: Bidding,
					name: 'bidding'
				},
				{
					path: 'projects/construction',
					component: Construction,
					name: 'construction'
				},
				{
					path: 'messages/new',
					component: NewMessage,
					name: 'newMessage'
				},
				{
					path: 'messages/help',
					component: Help,
					name: 'help'
				}
			]
		}
	]
})

export default router
