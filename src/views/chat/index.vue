<script setup lang="ts">
import Breadcrumb from '@/components/breadcrumb/index.vue'
import { ref } from 'vue'

const input = ref('')
</script>
<template>
  <div class="basecolor flex flex-col h-screen w-full overflow-hidden">
    <!-- 小屏幕：聊天内容区域 -->
    <div class="flex-1 p-4 md:hidden">
      <div class="flex flex-col justify-center items-center min-h-full">
        <div class="flex flex-col gap-5 text-center p-4">
          <div class="flex justify-center items-center">
            <img src="@/assets/xiaoan/xiaoanopeneye.svg" alt="people" class="w-[120px]" />
          </div>
          <span class="font-bold text-2xl">
            <i><b>嗨！我是小安</b></i>
          </span>
          <span class="font-bold text-base text-gray-400">
            我可以帮你搜索，答疑，如果你遇到了什么问题，请放心求助我吧~
          </span>
        </div>
      </div>
    </div>

    <!-- 大屏幕：居中显示输入框 -->
    <div class="hidden md:flex flex-col gap-7 justify-center items-center h-full p-8">
      <div class="text-center mb-8 flex items-center justify-center gap-8">
        <div>
          <img src="@/assets/xiaoan/xiaoanopeneye.svg" alt="people" class="h-[80px]" />
        </div>
        <span class="font-bold text-3xl text-gray-700">
          <b><i>嗨！我是小安</i></b>
        </span>
      </div>

      <div class="bgcolor flex flex-col w-full max-w-2xl rounded-3xl gap-4 p-6">
        <el-input
          class="bginput"
          v-model="input"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
        />
        <div class="flex gap-4 mt-2 justify-between">
          <div class="flex gap-4">
            <Breadcrumb>
              <span>深度思考</span>
            </Breadcrumb>
            <Breadcrumb>
              <span>联网搜索</span>
            </Breadcrumb>
          </div>
          <div class="pr-3">
            <img src="@/assets/iconfont/chat/send.svg" alt="send" class="w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

    <!-- 小屏幕：底部输入框 -->
    <div
      class="md:hidden bgcolor w-full h-[180px] flex flex-col justify-start rounded-t-3xl gap-4 p-4 flex-shrink-0"
    >
      <el-input
        class="bginput"
        v-model="input"
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
      />
      <div class="flex gap-2 mt-2 justify-between">
        <div class="flex gap-4">
          <Breadcrumb>
            <span>深度思考</span>
          </Breadcrumb>
          <Breadcrumb>
            <span>联网搜索</span>
          </Breadcrumb>
        </div>
        <div class="pr-3">
          <img src="@/assets/iconfont/chat/send.svg" alt="send" class="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.basecolor {
  background-color: #f4f4fb;
}
.bgcolor {
  background-color: #ffffff;
  box-shadow: 0 -10px rgba(233, 231, 231, 0.2);
  border-top: 1px solid #c8c4c4;
}
.bginput :deep(.el-input__wrapper) {
  border: 0 !important;
  border-style: none !important;
  border-width: 0 !important;
  border-color: transparent !important;
  box-shadow: none !important;
  background-color: transparent !important;
}

.bginput :deep(.el-input__wrapper):focus,
.bginput :deep(.el-input__wrapper):hover {
  border: 0 !important;
  border-style: none !important;
  border-width: 0 !important;
  border-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}

.bginput :deep(.el-textarea__inner) {
  border: 0 !important;
  border-style: none !important;
  border-width: 0 !important;
  border-color: transparent !important;
  outline: none !important;
  box-shadow: none !important;
}

.bginput :deep(.el-textarea__inner) {
  resize: none !important;
  min-height: 50px !important;
  max-height: 50px !important;
  overflow-y: hidden !important;
}

@media (min-width: 768px) {
  .bgcolor {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: none;
  }
}
</style>
