<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { storeToRefs } from 'pinia'
import useNewstore from '@/stores/news'

// 获取新闻store 生成实例 获取tempNewsInfo
const newsStore = useNewstore() // newsStore 就是返回值
const { tempNewsInfo } = storeToRefs(newsStore) // 使用 storeToRefs 保持响应式
// 接受content传入的id
const { newsid } = defineProps({
  newsid: {
    required: true,
    type: Number,
    default: 1,
  },
})
// 生产当前组件的新闻信息
const news = computed(() => {
  return tempNewsInfo.value.find((item) => item.id === newsid)
})
</script>
<template>
  <!-- 横向视频卡片：左边缩略图，右边信息 -->
  <div class="flex gap-3 h-full w-full bgcolor">
    <!-- 文字信息 -->
    <div
      @click="
        () => {
          newsStore.setCurrIndex(newsid)
          $router.push('/news')
        }
      "
      class="relative flex flex-col justify-between w-3/5 h-full flex-shrink-0 p-2.5"
    >
      <!-- 标题 -->
      <h3 class="textcolor text-base md:text-base line-clamp-2 font-bold leading-tight">
        {{ news?.title }}
      </h3>

      <!-- 底部信息 -->
      <div class="textcolor flex items-center gap-2 text-xs text-gray-500">
        <span>{{ news?.author }}</span>
        <span>{{ news?.date }}</span>
      </div>
    </div>
    <!-- 视频 图片 -->
    <div
      @click="
        () => {
          newsStore.setCurrIndex(newsid)
          $router.push('/news')
        }
      "
      class="flex-1 flex flex-col justify-between py-1 overflow-hidden"
    >
      <div class="h-full w-full newsbgcolor rounded-md md:rounded-lg border-1 border-black-300">
        <!-- <News :title="tempNewsInfo.title" :content="tempNewsInfo.content" /> -->
        <img :src="news?.bgImgUrl" :alt="news?.title" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.newsbgcolor {
  background-color: #f5e8dd;
}
.textcolor:hover {
  color: #6b83ff;
}
</style>
