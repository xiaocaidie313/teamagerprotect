import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/warn',
      component: () => import('@/views/warn/index.vue'),
    },
    {
      path: '/chat',
      component: () => import('@/views/chat/index.vue'),
    },
  ],
})

export default router
