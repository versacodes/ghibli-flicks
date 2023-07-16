import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmsView from '../views/FilmsView.vue'
import FilmsDetailsView from '../views/FilmsDetailsView.vue'

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
      component: FilmsView
    },
    {
      path: '/films/:id',
      name: 'filmDetails',
      component: FilmsDetailsView
    },
  ]
})

export default router
