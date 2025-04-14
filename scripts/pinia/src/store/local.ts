import { ref } from 'vue'
import { defineStore } from 'pinia'

// Setup Stores
export const useLocalStore = defineStore('local', () => {
    const name = ref<string | null>(null)
    var localName: string = "default"

    // $subscribe を発火させない変更
    function onInput(ev: Event) {
        const target = ev.target as HTMLInputElement
        localName = target.value
    }
    function get() {
        return localName
    }

    return {
        name,
        localName, // このやり方は初期値しかとれない
        onInput,
        get,
    }
})
