<script setup lang="ts">
import displayvedio from '@/components/diplayvedio/index.vue'
import displayshare from '@/components/displayshare/index.vue'
</script>
<template>
  <div class="flex flex-col gap-4 w-full">
    <!-- 上半部分：手机端纵向，大屏幕横向 -->
    <div class="flex flex-col md:flex-row gap-4 w-full">
      <!-- 左侧：轮播图（正方形） -->
      <div class="w-full md:w-2/5 p-4 rounded-lg">
        <el-carousel trigger="click" class="carouselcolor h-[200px] md:h-full">
          <el-carousel-item v-for="item in 4" :key="item" class="flex justify-center items-center">
            <h3 class="text-3xl md:text-5xl font-bold">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="w-full md:hidden">
        <slot name="nav" />
      </div>
      <!-- 右侧：视频列表 -->
      <div class="w-full md:w-3/5 flex flex-col gap-2.5">
        <div
          class="h-[110px] md:h-[90px] lg:h-[105px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer"
        >
          <displayshare />
        </div>
        <div
          class="h-[110px] md:h-[90px] lg:h-[105px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer"
        >
          <displayshare />
        </div>
        <div
          class="h-[110px] md:h-[90px] lg:h-[105px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer"
        >
          <displayshare />
        </div>
      </div>
    </div>

    <!-- 下半部分：更多视频 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer">
        <displayshare />
      </div>
      <div class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer">
        <displayshare />
      </div>
      <div class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer">
        <displayshare />
      </div>
      <div class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer">
        <displayshare />
      </div>
      <div class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer">
        <displayshare />
      </div>
      <div class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer">
        <displayshare />
      </div>
      <div class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer">
        <displayshare />
      </div>
      <div class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer">
        <displayshare />
      </div>
      <div class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer">
        <displayshare />
      </div>
      <div class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer">
        <displayshare />
      </div>
      <div class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer">
        <displayshare />
      </div>
      <div class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer">
        <displayshare />
      </div>
    </div>
  </div>
</template>
<style scoped>
.carouselcolor {
  background-color: #f5e8dd;
}
</style>
