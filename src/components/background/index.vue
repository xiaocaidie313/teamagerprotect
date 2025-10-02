<script setup lang="ts"></script>
<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  /* background: linear-gradient(to bottom, #f3dbfb 0%, rgb(255, 255, 255) 100%); */
  background-repeat: no-repeat;
  background-color: #ffffff;
  background-size: cover;
  background-position: center;
}
</style>
