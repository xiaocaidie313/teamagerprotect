<script setup lang="ts">
import displaynews from '@/components/displaynews/index.vue'
import mockcarouselpic from '@/mock/carousel/index.ts'
import useNewstore from '@/stores/news'
import { RouteView } from 'vue-router'
import { ref } from 'vue'
// mock的图片
const tempcarouselpic = ref(mockcarouselpic)
const { tempNewsLen, tempNewsInfo } = useNewstore() // 获取新闻长度
</script>
<template>
  <div class="flex flex-col gap-4 w-full">
    <!-- 上半部分：手机端纵向，大屏幕横向 -->
    <div class="flex flex-col md:flex-row gap-4 w-full">
      <!-- 左侧：轮播图（正方形） -->
      <div class="w-full md:w-2/5 p-4 rounded-lg">
        <el-carousel trigger="click" :interval="2000" class="carouselcolor h-[200px] md:h-full">
          <el-carousel-item
            v-for="item in tempcarouselpic"
            :key="item.id"
            class="flex justify-center items-center"
          >
            <img :src="item.imgUrl" :alt="item.alt" class="w-full h-full object-cover" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="w-full md:hidden">
        <slot name="nav" />
      </div>
      <!-- 右侧：动态内容列表 -->
      <div class="w-full md:w-3/5 flex flex-col gap-2.5">
        <div
          class="h-[110px] md:h-[90px] lg:h-[105px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer"
          v-for="item in tempNewsInfo.slice(0, 3)"
          :key="item.id"
        >
          <displaynews :newsid="item.id" />
        </div>
      </div>
    </div>
    <!-- 下半部分：更多动态 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div
        v-for="item in tempNewsInfo.slice(3)"
        :key="item.id"
        class="h-[110px] bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition cursor-pointer"
      >
        <displaynews :newsid="item.id" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.carouselcolor {
  background-color: #f5e8dd;
}
</style>
