<script setup lang="ts">
import Breadcrumb from '@/components/breadcrumb/index.vue'
import { ref, nextTick } from 'vue'

// 聊天状态管理
const input = ref('')
const messages = ref<
  Array<{
    id: number
    type: 'user' | 'assistant'
    content: string
    timestamp: Date
    isTyping?: boolean
  }>
>([])

// 聊天容器引用
const chatContainerMobile = ref<HTMLElement>()
const chatContainerDesktop = ref<HTMLElement>()
const isFirstMessage = ref(true)
const messageId = ref(0)

// 获取当前活动的聊天容器
const getCurrentChatContainer = () => {
  return chatContainerMobile.value || chatContainerDesktop.value
}

// 生成唯一ID
const generateId = () => ++messageId.value

// 添加消息
const addMessage = (type: 'user' | 'assistant', content: string) => {
  const message = {
    id: generateId(),
    type,
    content,
    timestamp: new Date(),
    isTyping: type === 'assistant',
  }
  messages.value.push(message)
  return message
}

// 更新消息内容（用于打字机效果）
const updateMessage = (id: number, content: string) => {
  const message = messages.value.find((m) => m.id === id)
  if (message) {
    message.content = content
  }
}

// 完成打字
const finishTyping = (id: number) => {
  const message = messages.value.find((m) => m.id === id)
  if (message) {
    message.isTyping = false
  }
}

// 打字机效果
const typewriterEffect = async (messageId: number, text: string, speed = 50) => {
  let currentText = ''
  for (let i = 0; i <= text.length; i++) {
    currentText = text.slice(0, i)
    updateMessage(messageId, currentText)
    await new Promise((resolve) => setTimeout(resolve, speed))
  }
  finishTyping(messageId)
}

// 发送消息
const sendMessage = async () => {
  if (!input.value.trim()) return

  const userMessage = input.value.trim()
  input.value = ''

  // 添加用户消息
  addMessage('user', userMessage)

  // 如果是第一条消息，切换到聊天界面
  if (isFirstMessage.value) {
    isFirstMessage.value = false
  }

  // 滚动到底部
  await nextTick()
  scrollToBottom()

  // 模拟小安回复
  const assistantMessage = addMessage('assistant', '')

  // 模拟回复内容
  const responses = [
    '我理解您的问题，让我来帮助您分析一下...',
    '这是一个很有趣的问题！根据我的了解...',
    '感谢您的提问，我想从几个方面来回答您...',
    '您提到的这个问题确实值得深入探讨...',
  ]

  const randomResponse = responses[Math.floor(Math.random() * responses.length)] || responses[0]

  // 打字机效果
  await typewriterEffect(assistantMessage.id, randomResponse, 30)

  // 再次滚动到底部
  await nextTick()
  scrollToBottom()
}

// 自动滚动到底部
const scrollToBottom = () => {
  const container = getCurrentChatContainer()
  if (container) {
    container.scrollTop = container.scrollHeight
  }
}

// 回车发送
const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    sendMessage()
  }
}
</script>
<template>
  <div class="basecolor flex flex-col h-screen w-full overflow-hidden">
    <!-- 小屏幕：聊天内容区域 -->
    <div class="flex-1 p-4 md:hidden">
      <!-- 初始欢迎界面 -->
      <div v-if="isFirstMessage" class="flex flex-col justify-center items-center min-h-full">
        <div class="flex flex-col gap-5 text-center p-4">
          <div class="flex justify-center items-center">
            <img src="@/assets/xiaoan/xiaoanopeneye.svg" alt="people" class="w-[120px]" />
          </div>
          <span class="font-bold text-2xl">
            <i><b>嗨！我是小安</b></i>
          </span>
          <span class="font-bold text-base text-gray-400">
            我可以帮你搜索，答疑，如果你遇到了什么问题，请放心求助我吧~
          </span>
        </div>
      </div>

      <!-- 聊天界面 -->
      <div v-else class="flex flex-col h-full">
        <!-- 聊天消息区域 -->
        <div ref="chatContainerMobile" class="flex-1 overflow-y-auto space-y-4 mb-4">
          <div v-for="message in messages" :key="message.id" class="flex gap-3">
            <!-- 用户消息 -->
            <div v-if="message.type === 'user'" class="flex-1 flex justify-end">
              <div class="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-2 max-w-[80%]">
                {{ message.content }}
              </div>
            </div>

            <!-- 小安消息 -->
            <div v-else class="flex-1 flex gap-3">
              <div
                class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0"
              >
                <img src="@/assets/xiaoan/xiaoanopeneye.svg" alt="小安" class="w-6 h-6" />
              </div>
              <div class="bg-white rounded-2xl rounded-bl-md px-4 py-2 max-w-[80%] shadow-sm">
                <div class="text-gray-800">
                  {{ message.content }}
                  <span
                    v-if="message.isTyping"
                    class="inline-block w-2 h-4 bg-purple-500 ml-1 animate-pulse"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 大屏幕：聊天界面 -->
    <div class="hidden md:flex flex-col h-full w-full pb-20 justify-center items-center">
      <!-- 初始欢迎界面 -->
      <div v-if="isFirstMessage" class="flex flex-col gap-7 justify-center items-center h-full p-8">
        <div class="text-center mb-8 flex items-center justify-center gap-8">
          <div>
            <img src="@/assets/xiaoan/xiaoanopeneye.svg" alt="people" class="h-[80px]" />
          </div>
          <span class="font-bold text-3xl text-gray-700">
            <b><i>嗨！我是小安</i></b>
          </span>
        </div>

        <div class="bgcolor flex flex-col w-full max-w-2xl rounded-3xl gap-4 p-6">
          <el-input
            class="bginput"
            v-model="input"
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            @keydown="handleKeyPress"
          />
          <div class="flex gap-4 mt-2 justify-between">
            <div class="flex gap-4">
              <Breadcrumb>
                <span>深度思考</span>
              </Breadcrumb>
              <Breadcrumb>
                <span>联网搜索</span>
              </Breadcrumb>
            </div>
            <div class="pr-3">
              <img
                @click="sendMessage"
                src="@/assets/iconfont/chat/send.svg"
                alt="send"
                class="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 聊天界面 -->
      <div v-else class="flex flex-col h-full w-full max-w-4xl">
        <!-- 聊天消息区域 -->
        <div ref="chatContainerDesktop" class="flex-1 overflow-y-auto p-6">
          <div class="max-w-2xl mx-auto space-y-4">
            <div v-for="message in messages" :key="message.id" class="flex gap-4">
              <!-- 用户消息 -->
              <div v-if="message.type === 'user'" class="flex-1 flex justify-end">
                <div class="bg-blue-500 text-white rounded-2xl rounded-br-md px-6 py-3 max-w-[70%]">
                  {{ message.content }}
                </div>
              </div>

              <!-- 小安消息 -->
              <div v-else class="flex-1 flex gap-4">
                <div
                  class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0"
                >
                  <img src="@/assets/xiaoan/xiaoanopeneye.svg" alt="小安" class="w-8 h-8" />
                </div>
                <div class="bg-white rounded-2xl rounded-bl-md px-6 py-3 max-w-[80%] shadow-sm">
                  <div class="text-gray-800">
                    {{ message.content }}
                    <span
                      v-if="message.isTyping"
                      class="inline-block w-2 h-4 bg-purple-500 ml-1 animate-pulse"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 底部输入区域 -->
        <div class="flex justify-center w-full mb-4 px-6">
          <div
            class="bgcolor w-full max-w-2xl rounded-3xl gap-4 p-6 border border-gray-200 shadow-sm"
          >
            <div class="flex gap-4 justify-between items-end">
              <div class="flex-1">
                <el-input
                  class="bginput"
                  v-model="input"
                  type="textarea"
                  :rows="3"
                  placeholder="请输入内容"
                  @keydown="handleKeyPress"
                />
              </div>
              <div class="flex gap-4 ml-4">
                <Breadcrumb>
                  <span>深度思考</span>
                </Breadcrumb>
                <Breadcrumb>
                  <span>联网搜索</span>
                </Breadcrumb>
                <div class="ml-2">
                  <img
                    @click="sendMessage"
                    src="@/assets/iconfont/chat/send.svg"
                    alt="send"
                    class="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 小屏幕：底部输入框 -->
    <div
      class="md:hidden bgcolor w-full h-[180px] flex flex-col justify-start rounded-t-3xl gap-4 p-4 flex-shrink-0"
    >
      <el-input
        class="bginput"
        v-model="input"
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        @keydown="handleKeyPress"
      />
      <div class="flex gap-2 mt-2 justify-between">
        <div class="flex gap-4">
          <Breadcrumb>
            <span>深度思考</span>
          </Breadcrumb>
          <Breadcrumb>
            <span>联网搜索</span>
          </Breadcrumb>
        </div>
        <div class="pr-3">
          <img
            @click="sendMessage"
            src="@/assets/iconfont/chat/send.svg"
            alt="send"
            class="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.basecolor {
  background-color: #f4f4fb;
}
.bgcolor {
  background-color: #ffffff;
  box-shadow: 0 -10px rgba(233, 231, 231, 0.2);
  border-top: 1px solid #c8c4c4;
}
.bginput :deep(.el-input__wrapper) {
  border: 0 !important;
  border-style: none !important;
  border-width: 0 !important;
  border-color: transparent !important;
  box-shadow: none !important;
  background-color: transparent !important;
}

.bginput :deep(.el-input__wrapper):focus,
.bginput :deep(.el-input__wrapper):hover {
  border: 0 !important;
  border-style: none !important;
  border-width: 0 !important;
  border-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}

.bginput :deep(.el-textarea__inner) {
  border: 0 !important;
  border-style: none !important;
  border-width: 0 !important;
  border-color: transparent !important;
  outline: none !important;
  box-shadow: none !important;
}

.bginput :deep(.el-textarea__inner) {
  resize: none !important;
  min-height: 50px !important;
  max-height: 50px !important;
  overflow-y: hidden !important;
}

@media (min-width: 768px) {
  .bgcolor {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: none;
  }
}
</style>
