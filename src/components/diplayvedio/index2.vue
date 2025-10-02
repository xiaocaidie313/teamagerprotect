<script setup lang="ts">
//竖向大视频
import Vedio from '@/components/vedio/index.vue'
</script>
<template>
  <!-- 竖向视频卡片 上边视频 下边标题 -->
  <div class="flex flex-col h-full w-full">
    <!-- 视频缩略图 -->
    <div class="h-4/5">
      <Vedio />
    </div>
    <div class="flex-1 p-2 justify-center items-center font-bold text-xl line-clamp-1">
      视频标题示例文字
    </div>
  </div>
</template>
<style scoped></style>
