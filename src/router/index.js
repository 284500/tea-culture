import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import reg from '../components/reg.vue'
import home from '../components/home.vue'
import login from '../components/login.vue'
import shop from '../components/shop.vue'
import cart from '../components/cart.vue'
import goods from '../components/goods.vue'
const routes = [
    {
		path: '/',
		name: 'home',
		component: home
	},
	{
		path: '/reg',
		name: 'reg',
		component: reg
	},
	{
		path: '/login',
		name: 'login',
		component: login
	},
	{
		path: '/shop',
		name: 'shop',
		component: shop
	},
	{
		path: '/cart',
		name: 'cart',
		component: cart
	},
	{
		path: '/goods',
		name: 'goods',
		component: goods
	}
	
]
const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router