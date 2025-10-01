<script setup lang="ts">
import Vedio from '@/components/vedio/index.vue'
</script>
<template>
  <!-- 横向视频卡片：左边缩略图，右边信息 -->
  <div class="flex gap-3 h-full w-full">
    <!-- 视频缩略图 -->
    <div class="relative w-2/5 h-full flex-shrink-0">
      <Vedio />
      <!-- 时长标签 -->
      <div
        class="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1.5 py-0.5 rounded"
      >
        3:33
      </div>
    </div>

    <!-- 视频信息 -->
    <div class="flex-1 flex flex-col justify-between py-1 overflow-hidden">
      <!-- 标题 -->
      <h3 class="text-sm md:text-base font-medium line-clamp-2 leading-tight">视频标题示例文字</h3>

      <!-- 底部信息 -->
      <div class="flex items-center gap-2 text-xs text-gray-500">
        <span>名称</span>
        <span>·</span>
        <span>观看</span>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
