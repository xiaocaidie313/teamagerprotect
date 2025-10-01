<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 16,
  },
  color: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <svg :width="size" :height="size" :fill="color" class="iconfont" aria-hidden="true">
    <use :xlink:href="`#${iconName}`"></use>
  </svg>
</template>
<style></style>
