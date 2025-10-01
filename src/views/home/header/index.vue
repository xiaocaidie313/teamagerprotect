<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
</script>
<template>
  <div class="flex justify-between w-5/6">
    <el-input
      v-model="input"
      style="width: 250px; border-radius: 30px"
      placeholder="Please Input"
      size="large"
      :prefix-icon="Search"
    />
    <el-avatar
      :size="50"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
  </div>
</template>
<style scoped></style>
