import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "Portfolio" */ '../views/Layout.vue'),
		children: [
			{
				path: '/Portfolio',
				name: 'Portfolio',
				component: () => import(/* webpackChunkName: "Portfolio" */ '../views/Portfolio.vue'),
			},
			{
				path: '/Other',
				name: 'Other',
				component: () => import(/* webpackChunkName: "Other" */ '../views/Other.vue'),
			},
		],
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
