import { reactive } from 'vue'
import { defineStore } from 'pinia'

// Setup Stores
export const useListStore = defineStore('list', () => {
    const strings = reactive(["a", "b", "c"])

    function set(v: string[]) {
        strings.splice(0, strings.length)
        strings.push(...v)
    }
    function update(v: string) {
        strings[0] = v
    }

    return {
        strings,
        set,
        update,
    }
})
