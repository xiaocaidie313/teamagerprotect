<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'
import useVideosStore from '@/stores/videos/index'
import { useRouter } from 'vue-router'
const { currVedio } = defineProps({
  currVedio: {
    type: Object,
    required: true,
  },
})
const router = useRouter()
const { setCurrVideoId } = useVideosStore()

const isautoplay = computed(() => {
  return router.currentRoute.value.path === '/showvideo' ? true : false
})
const controls = ref(false)
</script>
<template>
  <div
    class="h-full w-full bgcolor rounded-md md:rounded-lg"
    @mouseenter="controls = true"
    @mouseleave="controls = false"
    @touchstart="controls = true"
    @touchend="controls = false"
    @click="
      () => {
        setCurrVideoId(currVedio.id)
        $router.push('/showvideo')
      }
    "
  >
    <video
      :src="currVedio?.url"
      class="h-full w-full"
      :poster="currVedio?.cover"
      :controls="controls"
      :autoplay="isautoplay"
      :muted="isautoplay"
      :loop="isautoplay"
      playsinline
    />
  </div>
</template>
<style scoped>
.bgcolor {
  background-color: #f5e8dd;
}
</style>
