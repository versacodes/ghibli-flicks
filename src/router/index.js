import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmsView from '../views/FilmsView.vue'
import FilmsDetailsView from '../views/FilmsDetailsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({  
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/films',
      name: 'films',
      component: FilmsView,
    },
    {
      path: '/films/:id',
      name: 'filmDetails',
      component: FilmsDetailsView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView
    },
  ]
})

export default router
