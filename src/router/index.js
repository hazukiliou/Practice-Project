import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: () => import(/* webpackChunkName: "Portfolio" */ '../views/Layout.vue'),
		children: [
			{
				path: '/',
				name: 'Home',
				component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
			},
			{
				path: '/Portfolio',
				name: 'Portfolio',
				component: () => import(/* webpackChunkName: "Portfolio" */ '@/views/Portfolio.vue'),
			},
			{
				path: '/StarAnimation',
				name: 'StarAnimation',
				component: () => import(/* webpackChunkName: "StarAnimation" */ '@/views/StarAnimation.vue'),
			},
			{
				path: 'CarouselsImage',
				name: 'CarouselsImage',
				component: () => import(/* webpackChunkName: "CarouselsImage" */ '@/views/CarouselsImage.vue'),
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
