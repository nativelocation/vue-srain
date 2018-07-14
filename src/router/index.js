import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'

Vue.use(Router)

const router = new Router({
	base: __dirname,
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Home,
			name: 'home'
		}
	]
})

export default router
