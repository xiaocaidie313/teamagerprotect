<script setup lang="ts">
import Share from '@/components/share/index.vue'
</script>
<template>
  <!-- 横向视频卡片：左边缩略图，右边信息 -->
  <div class="flex gap-3 h-full w-full bgcolor">
    <!-- 文字信息 -->
    <div class="relative flex flex-col justify-between w-3/5 h-full flex-shrink-0 p-2.5">
      <!-- 标题 -->
      <h3 class="text-base md:text-base line-clamp-1 font-bold leading-tight">
        依法惩治"隔空猥亵",做到打
      </h3>

      <!-- 底部信息 -->
      <div class="flex items-center gap-2 text-xs text-gray-500">
        <span>《人民日报》</span>
        <span>2025年1月6日</span>
      </div>
    </div>
    <!-- 视频 图片 -->
    <div class="flex-1 flex flex-col justify-between py-1 overflow-hidden">
      <Share />
    </div>
  </div>
</template>
<style scoped>
.bgcolor {
  /* background-color: #f1e3fd; */
}
</style>
