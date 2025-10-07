<script lang="ts" setup>
import useVideosStore from '@/stores/videos/index'
import { ref, computed } from 'vue'

const temp = useVideosStore()
const { getCurrVideo } = temp
const currVedio = computed(() => getCurrVideo())

// 交互数据
const likeCount = ref(947)
const isLiked = ref(false)
const isCollected = ref(false)

// 交互函数
const toggleLike = () => {
  isLiked.value = !isLiked.value
  likeCount.value += 1
}

const toggleCollect = () => {
  isCollected.value = !isCollected.value
}

const shareVideo = () => {
  // 分享功能
  console.log('分享视频')
}

const listenVideo = () => {
  // 听视频功能
  console.log('听视频模式')
}

const showComments = () => {
  // 显示评论
  console.log('显示评论')
}
</script>
<template>
  <div class="bgcolor w-full h-full min-h-screen flex flex-col gap-2 items-center pb-20 relative">
    <!-- 头部导航 -->
    <div class="headbgcolor sticky top-0 w-full h-[80px] flex items-center px-5 z-20">
      <img
        @click="$router.back()"
        src="@/assets/iconfont/direction/toleft.svg"
        alt="返回"
        class="w-[30px] h-[30px] cursor-pointer"
      />
      <div class="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">小安说</div>
    </div>

    <!-- 主要内容区域 -->
    <div class="flex-1 w-full h-full flex flex-col gap-4 justify-center items-center relative">
      <video v-if="currVedio" :src="currVedio.url" controls class="w-full px-1" />
      <div v-else class="text-gray-500">加载中...</div>

      <!-- 右侧交互侧边栏 -->
      <div
        class="absolute right-4 top-3/4 transform -translate-y-1/2 flex flex-col items-center gap-3"
      >
        <!-- 点赞按钮 -->
        <div class="flex flex-col items-center">
          <button
            @click="toggleLike"
            class="w-10 h-10 rounded-full bg-white-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-30 transition-all duration-100"
          >
            <img src="@/assets/iconfont/shortvideo/like.svg" alt="" class="w-10 10 bg-white-100" />
          </button>
          <span class="text-white text-xs mt-1">{{ likeCount }}</span>
        </div>

        <!-- 评论按钮 -->
        <div class="flex flex-col items-center">
          <button
            @click="showComments"
            class="w-10 h-10 rounded-full bg-white-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
          >
            <img
              src="@/assets/iconfont/shortvideo/pinglun.svg"
              alt=""
              class="w-9 h-9 bg-white-100"
            />
          </button>
          <span class="text-white text-xs mt-1">评论</span>
        </div>

        <!-- 收藏按钮 -->
        <div class="flex flex-col items-center">
          <button
            @click="toggleCollect"
            class="w-10 h-10 rounded-full bg-white-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
          >
            <img
              src="@/assets/iconfont/shortvideo/shoucang.svg"
              alt=""
              class="w-10 10 bg-white-100"
            />
          </button>
          <span class="text-white text-xs mt-1">收藏</span>
        </div>

        <!-- 分享按钮 -->
        <!-- <div class="flex flex-col items-center">
          <button
            @click="shareVideo"
            class="w-12 h-12 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
          </button>
          <span class="text-white text-xs mt-1">更多</span>
        </div> -->

        <!-- 听视频按钮 -->
        <div class="flex flex-col items-center">
          <button
            @click="listenVideo"
            class="w-10 h-10 rounded-full bg-white-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
          >
            <img
              src="@/assets/iconfont/shortvideo/shiting.svg"
              alt=""
              class="w-10 10 bg-white-100"
            />
          </button>
          <span class="text-white text-xs mt-1">听视频</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bgcolor {
  background-color: #000;
}
.headbgcolor {
  border-bottom: 1px solid rgba(232, 221, 245, 0.5);
  box-shadow: 0 0 10px 0 rgba(232, 221, 245, 0.8);
  background-color: #e8ddf5;
}
</style>
