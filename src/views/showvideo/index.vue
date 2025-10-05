<script lang="ts" setup>
import useVideosStore from '@/stores/videos/index'
import { storeToRefs } from 'pinia'
import { ref, computed, defineProps } from 'vue'
import Vedio from '@/components/vedio/index.vue'

const temp = useVideosStore()
const { getCurrVideo } = temp
const currVedio = computed(() => getCurrVideo())
</script>
<template>
  <div class="bgcolor w-full h-full flex flex-col justify-start gap-2 items-center pb-20">
    <Vedio v-if="currVedio" :currVedio="currVedio" />
    <div v-else class="text-gray-500">加载中...</div>
  </div>
</template>
<style scoped></style>
