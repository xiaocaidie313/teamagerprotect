<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
</script>
<template>
  <div class="flex justify-between w-5/6">
    <el-input
      v-model="input"
      class="custom-search-input"
      placeholder="请输入要搜索的内容"
      size="large"
      :prefix-icon="Search"
    />
    <!-- <el-avatar
      :size="50"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    /> -->
  </div>
</template>
<style scoped>
.custom-search-input {
  width: 100% !important;
}

.custom-search-input :deep(.el-input__wrapper) {
  background-color: #e8ddf5 !important;
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
