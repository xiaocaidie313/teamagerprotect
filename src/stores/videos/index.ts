import { defineStore } from 'pinia'
import { ref } from 'vue'
import mockvideos from '@/mock/vedio/index'

const useVideosStore = defineStore('videos', () => {
  const tempVideos = ref(mockvideos)
  const tempVideosLen = ref(tempVideos.value.length)
  const currVideoId = ref(1) // 改为存储视频ID

  const setCurrVideoId = (id: number) => {
    currVideoId.value = id
  }

  const getCurrVideoId = (): number => {
    return currVideoId.value
  }

  const getCurrVideo = () => {
    return tempVideos.value.find((video) => video.id === currVideoId.value)
  }

  return {
    currVideoId,
    tempVideos,
    tempVideosLen,
    setCurrVideoId,
    getCurrVideoId,
    getCurrVideo,
  }
})

export default useVideosStore
