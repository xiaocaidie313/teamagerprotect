<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/footer/index.vue'
import Background from '@/components/background/index.vue'
</script>
<template>
  <background>
    <div class="flex flex-col justify-between min-h-screen w-full">
      <div class="flex justify-center items-start pt-4 rounded-xl">
        <RouterView />
      </div>
      <Footer />
    </div>
  </background>
</template>

<style scoped></style>
