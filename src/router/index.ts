import { createRouter, createWebHistory } from 'vue-router'
// router.ts
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

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
      meta: { index: 1 },
    },
    {
      path: '/news',
      component: () => import('@/views/news/index.vue'),
      meta: { index: 2 },
    },
    {
      path: '/shortvideo',
      component: () => import('@/views/shortvideo/index.vue'),
      meta: { index: 2 },
    },
    {
      path: '/showvideo',
      component: () => import('@/views/showvideo/index.vue'),
      meta: { index: 3 },
    },
    {
      path: '/radio',
      component: () => import('@/views/radio/index.vue'),
      meta: { index: 2 },
    },
    {
      path: '/warn',
      component: () => import('@/views/warn/index.vue'),
      meta: { index: 2 },
    },
    {
      path: '/chat',
      component: () => import('@/views/chat/index.vue'),
      meta: { index: 2 },
    },
    {
      path: '/me',
      component: () => import('@/views/me/index.vue'),
      meta: { index: 2 },
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
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

// 处理路由错误
router.onError((error) => {
  NProgress.done()
  console.error('路由错误:', error)
})

export default router
