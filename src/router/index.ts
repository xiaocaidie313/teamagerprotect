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
      path: '/news',
      component: () => import('@/views/news/index.vue'),
    },
    {
      path: '/shortvideo',
      component: () => import('@/views/shortvideo/index.vue'),
    },
    {
      path: '/showvideo',
      component: () => import('@/views/showvideo/index.vue'),
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
  // 配置滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（比如浏览器后退），则使用保存的位置
    if (savedPosition) {
      return savedPosition
    }
    // 否则滚动到顶部
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
