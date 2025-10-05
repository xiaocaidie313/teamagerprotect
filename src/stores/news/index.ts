import { defineStore } from 'pinia'
import mocknewsList from '@/mock/news/index.ts'
import { ref } from 'vue'

const useNewstore = defineStore('news', () => {
  const tempNewsInfo = ref(mocknewsList)
  const tempNewsLen = ref(mocknewsList.length)
  const currIndex = ref(0)

  const setCurrIndex = (curridx: number) => {
    currIndex.value = curridx
  }
  const getCurrIndex = (): number => {
    return currIndex.value
  }
  return {
    tempNewsInfo,
    tempNewsLen,
    setCurrIndex,
    getCurrIndex,
  }
})

export default useNewstore
