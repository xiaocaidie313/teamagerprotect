<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>
<template>
  <div class="flex flex-col h-screen w-full">
    <!-- 聊天内容区域 -->
    <div class="flex-1 overflow-y-auto p-4">
      <!-- 这里放聊天消息 -->
      <p class="text-gray-500">聊天内容区域</p>
    </div>

    <!-- 底部输入框（自然在底部） -->
    <div class="bgcolor w-full h-[180px] rounded-t-3xl p-4 sha border-t flex-shrink-0">
      <el-input class="bginput" v-model="input" type="text" :rows="4" placeholder="请输入内容" />
    </div>
  </div>
</template>
<style scoped>
.bgcolor {
  background-color: #e8fff4;
  box-shadow: 0 -4px rgba(233, 231, 231, 0.2);
}
.bginput :deep(.el-input__wrapper) {
  border: none;
  box-shadow: none;
  background-color: transparent;
}
</style>
