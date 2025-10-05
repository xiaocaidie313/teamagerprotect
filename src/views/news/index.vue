<script lang="ts" setup>
import useNewstore from '@/stores/news'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const router = useRouter()
const newsStore = useNewstore()
const { tempNewsInfo } = storeToRefs(newsStore)
const { getCurrIndex } = newsStore
const news = computed(() => tempNewsInfo.value.find((item) => item.id === getCurrIndex()))
const autoplay = computed(() => {
  return router.currentRoute.value.path === '/news' ? true : false
})
</script>
<template>
  <div class="flex flex-col items-center w-full min-h-screen gap-4 pb-20">
    <div class="bgcolor sticky top-0 w-full h-[80px] flex items-center px-5">
      <img
        @click="$router.back()"
        src="@/assets/iconfont/direction/toleft.svg"
        alt=""
        class="w-[30px] h-[30px]"
      />
      <div class="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">小安说</div>
    </div>
    <div class="flex-1 p-4 flex flex-col gap-4 max-w-4xl w-full">
      <div v-if="news?.vedioUrl" class="w-full h-[200px]">
        <video
          :src="news?.vedioUrl"
          class="w-full h-full"
          controls
          :muted="autoplay"
          :loop="autoplay"
          playsinline
          :autoplay="autoplay"
        />
      </div>
      <div v-if="news" class="flex flex-col gap-6">
        <!-- 新闻头部信息 -->
        <div class="flex flex-col gap-3">
          <h1 class="text-3xl font-bold text-gray-900 leading-tight">{{ news.title }}</h1>
          <div class="flex items-center gap-4 text-sm text-gray-600">
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                />
              </svg>
              {{ news.author }}
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ news.date }}
            </span>
          </div>
        </div>

        <!-- 新闻图片 -->
        <div v-if="news.bgImgUrl" class="w-full">
          <img
            :src="news.bgImgUrl"
            :alt="news.title"
            class="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        <!-- 新闻内容 -->
        <div class="prose prose-lg max-w-none">
          <div class="text-gray-800 leading-relaxed text-base md:text-lg">
            <p class="mb-4">{{ news.content }}</p>
          </div>
        </div>
      </div>

      <!-- 加载状态 -->
      <div v-else class="flex items-center justify-center h-64">
        <div class="text-gray-500">加载中...</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bgcolor {
  border-bottom: 1px solid rgba(232, 221, 245, 0.5);
  box-shadow: 0 0 10px 0 rgba(232, 221, 245, 0.8);
  background-color: #e8ddf5;
}
</style>
