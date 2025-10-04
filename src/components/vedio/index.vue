<script setup lang="ts">
import mockvedio from '@/mock/vedio/index.js'
import { ref } from 'vue'
const tempvedio = ref(mockvedio)
</script>
<template>
  <div class="h-full w-full bgcolor rounded-md md:rounded-lg">
    <video controls :src="tempvedio[0].url" class="h-full w-full" :poster="tempvedio[0].cover" />
  </div>
</template>
<style scoped>
.bgcolor {
  background-color: #f5e8dd;
}
</style>
