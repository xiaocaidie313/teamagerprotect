<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { storeToRefs } from 'pinia'
import useVideosStore from '@/stores/videos/index'
//竖向大视频
import Vedio from '@/components/vedio/index.vue'
const { videoId } = defineProps({
  videoId: {
    type: Number,
    required: true,
  },
})
const videosStore = useVideosStore()
const { tempVideos } = storeToRefs(videosStore)
const currVedio = computed(() => tempVideos.value.find((item) => item.id === videoId))
</script>
<template>
  <!-- 竖向视频卡片 上边视频 下边标题 -->
  <div v-if="currVedio" class="flex flex-col h-full w-full">
    <!-- 视频缩略图 -->
    <div class="h-4/5">
      <Vedio :currVedio="currVedio" />
    </div>
    <div class="flex-1 p-2 justify-center items-center font-bold text-xl line-clamp-1">
      {{ currVedio.title }}
    </div>
  </div>
</template>
<style scoped></style>
