import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/shortvideo',
      component: () => import('@/views/shortvideo/index.vue'),
    },
    {
      path: '/radio',
      component: () => import('@/views/radio/index.vue'),
    },
    {
      path: '/warn',
      component: () => import('@/views/warn/index.vue'),
    },
    {
      path: '/chat',
      component: () => import('@/views/chat/index.vue'),
    },
    {
      path: '/me',
      component: () => import('@/views/me/index.vue'),
    },
  ],
})

export default router
