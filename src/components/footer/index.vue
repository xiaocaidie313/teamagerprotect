<script setup lang="ts">
import IconFont from '@/components/IconFont/index.vue'
import { Router } from 'vue-router'
</script>
<template>
  <div class="flex justify-evenly bg-gray-50 fixed bottom-0 items-center h-13 w-full">
    <div
      class="flex flex-col items-center justify-center hover:text-blue-300"
      @click="$router.push('/home')"
    >
      <label for=""><IconFont iconName="icon-shouye" :size="24" />首页</label>
    </div>
    <div
      class="flex flex-col items-center justify-center hover:text-blue-300"
      @click="$router.push('/warn')"
    >
      <label for=""><IconFont iconName="icon-baojing" :size="24" />报警</label>
    </div>
    <div class="flex flex-col items-center justify-center hover:text-blue-300">
      <label for=""
        ><IconFont iconName="icon-duihua" :size="24" @click="$router.push('/chat')" />对话</label
      >
    </div>
    <div class="flex flex-col items-center justify-center hover:text-blue-300">
      <label for=""
        ><IconFont iconName="icon-wode" :size="24" @click="$router.push('/me')" />我的</label
      >
    </div>
  </div>
</template>
<style scoped></style>
