import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImageView from '../views/ImageView.vue'
import ImageView2 from '../views/ImageView2.vue'
import ImageView3 from '../views/ImageView3.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/imageView',
    name: 'imageView',
    component: ImageView
  },
  {
    path: '/imageView2',
    name: 'imageView2',
    component: ImageView2
  },
  {
    path: '/imageView3',
    name: 'imageView3',
    component: ImageView3
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
