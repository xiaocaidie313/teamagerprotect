import { defineStore } from 'pinia'
import { ref } from 'vue'
import mockradio from '@/mock/radio/index'

const useRadioStore = defineStore('radio', () => {
  const currRadioList = ref(mockradio)
  const currIdex = ref(0)
  const getCurrIdx = () => {
    return currIdex.value
  }
  const setCurrIdx = (index: number) => {
    currIdex.value = index
  }
  const getCurrRadio = () => {
    return currRadioList.value[currIdex.value]
  }
  return {
    getCurrIdx,
    setCurrIdx,
    getCurrRadio,
  }
})

export default useRadioStore
