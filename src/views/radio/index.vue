<script setup lang="ts">
import { ref, computed } from 'vue'
import useRadioStore from '@/stores/radio/index'

const radio = useRadioStore()
const { getCurrRadio, getCurrIdx, setCurrIdx } = radio

const currRadio = computed(() => getCurrRadio())
const isPlaying = ref(false)
const currentTime = ref('0:15')
const totalTime = ref('3:06')
const progress = ref(20)

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
}
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- 顶部导航栏 -->
    <div class="w-full h-16 flex justify-between items-center px-6 pt-2">
      <button @click="$router.back()" class="w-8 h-8 flex items-center justify-center">
        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div class="flex gap-1">
        <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>

      <button class="w-8 h-8 flex items-center justify-center">
        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
          ></path>
        </svg>
      </button>
    </div>

    <!-- 主要内容区域 -->
    <div v-if="currRadio" class="flex-1 flex flex-col items-center justify-start px-6 pb-40 pt-16">
      <!-- 播客封面 -->
      <div class="w-72 h-72 bg-podcast rounded-2xl mb-8">
        <img :src="currRadio.cover" alt="" class="w-full h-full rounded-2xl" />
      </div>

      <!-- 标题 -->
      <p class="text-gray-600 text-lg text-center mb-8 leading-relaxed max-w-sm">
        用一个生动形象的故事告诉你:如何预防网瘾
      </p>

      <!-- 作者和互动区域 -->
      <div class="w-full max-w-sm flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-gray-500">作者</span>
          <button class="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            <svg
              class="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span class="text-gray-600 text-sm">收藏</span>
          </button>
        </div>

        <div class="flex items-center gap-4">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V18m-7-8l2 2 4-4"
            ></path>
          </svg>
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- 底部播放控制栏 -->
    <div class="fixed bottom-15 left-0 right-0 bg-white border-t border-gray-100 p-6">
      <!-- 进度条和快进快退 -->
      <div class="flex items-center justify-between mb-4">
        <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <span class="text-xs font-medium text-gray-600">15</span>
        </button>

        <div class="flex-1 mx-4">
          <div class="flex justify-between mb-2">
            <span class="text-sm text-gray-500">{{ currentTime }}</span>
            <span class="text-sm text-gray-500">{{ totalTime }}</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1 relative">
            <div class="bg-gray-600 h-1 rounded-full" :style="{ width: progress + '%' }"></div>
            <div
              class="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-600 rounded-full"
              :style="{ left: progress + '%', marginLeft: '-6px' }"
            ></div>
          </div>
        </div>

        <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <span class="text-xs font-medium text-gray-600">15</span>
        </button>
      </div>

      <!-- 主要控制按钮 -->
      <div class="flex items-center justify-between">
        <button class="w-12 h-12 flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            ></path>
          </svg>
        </button>

        <button class="w-12 h-12 flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <button
          @click="togglePlay"
          class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center"
        >
          <svg
            v-if="!isPlaying"
            class="w-8 h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <svg v-else class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        </button>

        <button class="w-12 h-12 flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
        </button>

        <button class="w-12 h-12 flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
        </button>

        <button class="w-12 h-12 flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-podcast {
  background-color: #f5e8dd;
}
</style>
