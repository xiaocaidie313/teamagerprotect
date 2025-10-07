<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/footer/index.vue'
import Background from '@/components/background/index.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const route = useRoute()
const transitionName = ref('slide-left')

watch(
  () => route.meta.index,
  (to, from) => {
    if (!from) return
    transitionName.value = to > from ? 'slide-left' : 'slide-right'
  },
)
</script>
<template>
  <background>
    <div class="flex flex-col justify-between min-h-screen w-full">
      <div class="flex justify-center items-start">
        <!-- <RouterView v-slot="{ Component }">
          <transition :name="transitionName" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView> -->
        <RouterView />
      </div>
      <Footer />
    </div>
  </background>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  will-change: transform, opacity;
  transition: all 0.4s cubic-bezier(0.4, 0.1, 0.2, 1);
  position: absolute; /* 让两页同时占位 */
  width: 100%;
}
/* 左滑 = 新页面从右挤进来，旧页面向左挤出 */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30%);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

/* 右滑 = 反向 */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30%);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30%);
}
</style>
