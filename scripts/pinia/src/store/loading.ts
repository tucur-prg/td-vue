import { ref } from 'vue'
import { defineStore } from 'pinia'

// Setup Stores
export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)

  function enqueue() {
    isLoading.value = true
  }
  function dequeue() {
    isLoading.value = false
  }

  return {
    isLoading,
    enqueue,
    dequeue
  }
})
