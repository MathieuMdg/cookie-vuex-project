import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import CookiesView from '../views/Cookies.vue'

const routes = [
  {path: '/', component: HomeView},
  {path: "/cookies", component: CookiesView}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
