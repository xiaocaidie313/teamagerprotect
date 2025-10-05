<script setup lang="ts">
import Header from './header/index.vue'
import Content from './content/index.vue'
import Nav from '@/components/nav/index.vue'
</script>
<template>
  <div class="flex flex-col items-center w-full h-full gap-4 pt-5 pb-20">
    <Header class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 px-4" />
    <Content class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 px-4">
      <template #nav>
        <Nav class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3" />
      </template>
    </Content>
  </div>
</template>
<style scoped></style>
