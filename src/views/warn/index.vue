<script setup lang="ts"></script>
<template>
  <div class="warpper flex flex-col justify-between items-center gap-10 w-4/5 h-full p-3 pt-6">
    <div class="text-center text-xl font-bold text-purple-400">遇到紧急情况，请放心求助</div>
    <div class="container flex justify-center items-center font-bold text-2xl">紧急报警</div>
    <div
      class="w-full h-1/5 flex flex-col justify-center items-center gap-3 box pt-4 pb-4 md:w-3/5"
    >
      <div class="w-5/6 h-[30px] flex justify-center items-center rounded-md bg-white">
        打开位置共享
      </div>
      <div class="w-5/6 h-[30px] flex justify-center items-center rounded-md bg-white">
        拨打家长电话
      </div>
      <div class="w-5/6 h-[30px] flex justify-center items-center rounded-md bg-white">
        拨打警察电话
      </div>
    </div>
    <div
      class="w-full flex justify-center font-bold text-xl items-center btncolor h-[50px] text-gray-400 cursor-pointer md:w-3/5"
    >
      一键报警
    </div>
    <div class="text-center text-gray-600 cursor-pointer text-bold text-xl">使用说明</div>
  </div>
</template>
<style scoped>
/* .warpper {
  height: 100vh;
  justify-content: center;
  overflow: hidden;
} */
.container {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background-color: #e8ddf5;
}
.box {
  background-color: #e8ddf5;
  border-radius: 20px;
}
.btncolor {
  background-color: #e8ddf5;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.2rem;
  font-color: black;
}
</style>
