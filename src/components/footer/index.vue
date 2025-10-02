<script setup lang="ts"></script>
<template>
  <div class="flex justify-evenly bgcolor fixed bottom-0 items-center h-13 pt-2 w-full">
    <div
      class="flex flex-col items-center justify-center hover:text-blue-300"
      @click="$router.push('/home')"
    >
      <label for=""
        ><img src="@/assets/iconfont/footer/home.svg" class="w-6 h-6" alt="首页" />首页</label
      >
    </div>
    <div
      class="flex flex-col items-center justify-center hover:text-blue-300"
      @click="$router.push('/warn')"
    >
      <label for=""
        ><img src="@/assets/iconfont/footer/warn.svg" class="w-6 h-6" alt="报警" />报警</label
      >
    </div>
    <div class="flex flex-col items-center justify-center hover:text-blue-300">
      <label for=""
        ><img
          src="@/assets/iconfont/footer/chat.svg"
          class="w-6 h-6"
          alt="对话"
          @click="$router.push('/chat')"
        />对话</label
      >
    </div>
    <div class="flex flex-col items-center justify-center hover:text-blue-300">
      <label for=""
        ><img
          src="@/assets/iconfont/footer/me.svg"
          class="w-6 h-6"
          alt="我的"
          @click="$router.push('/me')"
        />我的</label
      >
    </div>
  </div>
</template>
<style scoped>
.bgcolor {
  background-color: #6a4c93;
}

.bgcolor label {
  color: white !important;
}

.bgcolor img {
  filter: brightness(0) invert(1) !important;
}
</style>
