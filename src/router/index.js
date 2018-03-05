import Vue from 'vue'
import Router from 'vue-router'
import VueShotclassDemo from '@/components/VueShotclassDemo'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'VueShotclassDemo',
			component: VueShotclassDemo
		}
	]
})
