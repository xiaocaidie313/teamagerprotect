<script setup lang="ts">
import DisplayVedio from '@/components/diplayvedio/index2.vue'
import useVideosStore from '@/stores/videos/index'
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
const input = ref('')
const videosStore = useVideosStore()
const { tempVideos } = storeToRefs(videosStore)
</script>
<template>
  <div class="bgcolor w-full h-full flex flex-col justify-start gap-2 items-center pt-4 pb-20">
    <div class="w-full h-[55px] p-4 flex justify-between items-center brd">
      <el-input
        v-model="input"
        class="custom-search-input"
        placeholder="请输入要搜索的内容"
        size="large"
        :prefix-icon="Search"
      />
      <el-avatar
        :size="50"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
    <div class="flex flex-col w-4/5 gap-8">
      <div v-for="item in tempVideos" :key="item.id" class="boxcolor w-full h-[200px] playbrd">
        <DisplayVedio :videoId="item.id" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.playbrd {
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 2px 8px rgba(199, 197, 197, 0.2),
    0 1px 4px rgba(199, 197, 197, 0.1);
}
.brd {
  border-bottom: 1px solid rgba(199, 197, 197, 0.5);
  box-shadow:
    0 2px 4px rgba(199, 197, 197, 0.3),
    0 1px 2px rgba(199, 197, 197, 0.2);
}
.bgcolor {
  background: linear-gradient(to bottom, #f3d5fec9 0%, #f4f4fb 50%, rgb(255, 255, 255) 100%);
}
.boxcolor {
  background-color: #ffffff;
}
.custom-search-input {
  width: 70% !important;
}

.custom-search-input :deep(.el-input__wrapper) {
  background-color: #ffffff !important;
  border: 2px solid #e8ddf5 !important;
  border-radius: 30px !important;
  box-shadow: none !important;
  width: 100% !important;
}

.custom-search-input :deep(.el-input__inner) {
  background-color: transparent !important;
  border: none !important;
  color: #e8ddf5 !important;
}

.custom-search-input :deep(.el-input__prefix) {
  color: #000000 !important;
  font-weight: bold !important;
}

.custom-search-input :deep(.el-input__prefix svg) {
  font-weight: bold !important;
  stroke-width: 2.5 !important;
}
</style>
