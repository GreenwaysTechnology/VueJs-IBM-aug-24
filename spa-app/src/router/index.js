import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactUsView from '../views/ContactUsView.vue'
// import CounterView from '../views/CounterView.vue'

import { createRouter, createWebHistory } from 'vue-router'

//router configuration

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/counter',
    name: 'counter',
    // component: CounterView
    // route level code-splitting
    // this generates a separate chunk (counter.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CounterView.vue')
  },
  // {
  //   path: '/users/:id',
  //   name: 'users',
  //   component: () => import('../views/UsersView.vue')
  // },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/UsersView.vue')
  },
  {
    path: '/details/:id',
    name: 'details',
    component: () => import('../views/UsersDetailsView.vue')
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('../views/TodosView.vue')
  },
  {
    path: '/todosdetails/:id',
    name: 'todosdetails',
    component: () => import('../views/TodosDetailsView.vue')
  },
  {
    path: '/contactus',
    name: 'contact',
    component: ContactUsView
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('../views/ReviewView.vue')
  },

  {
    path: '/movies',
    name: 'movies',
    component: () => import('../views/MoviesView.vue'),
    children: [
      {
        path: 'action',
        component: () => import('../views/ActionView.vue'),
      },
      {
        path: 'drama',
        component: () => import('../views/DramaView.vue'),
      },
      {
        path: 'horror',
        component: () => import('../views/HorrorView.vue'),
      }
    ]
  }
]

//create Router Object
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router;