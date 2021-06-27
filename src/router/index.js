import { createRouter, createWebHistory } from '@ionic/vue-router';
// import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/reservation',
    component: () => import('@/views/Booking.vue')
  },
  {
    path: '/restaurant',
    component: () => import('@/views/Restaurant.vue')
  },
  {
    path: '/blog',
    component: () => import('@/views/Posts.vue')
  },
  {
    path: '/article',
    component: () => import('@/views/Post.vue')
  },
  {
    path: '/abonnements',
    component: () => import('@/views/Plans.vue')
  },
  {
    path: '/contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/equipe',
    component: () => import('@/views/Team.vue')
  },
  {
    path: '/carte',
    component: () => import('@/views/Card.vue')
  },
  // {
  //   path: '/food/',
  //   children: [
  //     {
  //       path: '',
  //       redirect: '/food/accueil'
  //     },
  //     {
  //       path: 'accueil',
  //       component: () => import('@/views/Home.vue')
  //     },
  //     {
  //       path: 'reservation',
  //       component: () => import('@/views/Booking.vue')
  //     },
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
