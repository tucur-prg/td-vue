import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Setup Stores
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    const double = computed(() => {
        return count.value * 2
    })

    function increment() {
        count.value++
    }
    function decrement() {
        count.value--
    }

    function get() {
        return count.value
    }
    function set(v: number) {
        count.value = v
    }
    function err() {
        throw new Error("error message")
    }

    return {
        count,
        double,
        increment,
        decrement,
        get,
        set,
        err,
    }
})

export type counterCallback = (value: number) => void 

export function useCounterSubscribe(callback: counterCallback) {
    return useCounterStore().$subscribe((_, state) => {
        callback(state.count)
    })
}
