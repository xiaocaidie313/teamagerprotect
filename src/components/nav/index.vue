<script setup lang="ts"></script>
<template>
  <div class="flex w-full justify-between h-20 bgcolor items-center rounded-lg p-5">
    <div class="flex flex-col items-center justify-center text-black">
      <label for="" @click="$router.push('/shortvideo')">
        <div class="text-2xl mb-1">▶</div>
        <span class="text-sm">短视频</span></label
      >
    </div>
    <div class="flex flex-col items-center justify-center text-black">
      <div class="text-2xl mb-1">📖</div>
      <span class="text-sm">条漫</span>
    </div>
    <div class="flex flex-col items-center justify-center text-black">
      <label for="" @click="$router.push('/radio')">
        <div class="text-2xl mb-1">📡</div>
        <span class="text-sm">播客</span>
      </label>
    </div>
    <div class="flex flex-col items-center justify-center text-black">
      <div class="text-2xl mb-1">🎮</div>
      <span class="text-sm">小游戏</span>
    </div>
  </div>
</template>
<style scoped>
.bgcolor {
  background-color: #e8ddf5;
}
</style>
