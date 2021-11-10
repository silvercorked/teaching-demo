import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ComponentExample from '../views/ComponentExample.vue';
import PropsExample from '../views/PropsExample.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/second',
		name: 'Components',
		component: ComponentExample
	},
	{
		path: '/third',
		name: 'Props',
		component: PropsExample
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
