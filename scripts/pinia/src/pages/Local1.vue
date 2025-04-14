<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useLocalStore } from '@/store/local'

console.log("local: setup")

const local = useLocalStore()

local.$onAction(({ name, args }) => {
  console.log("local.onAction:", name, args)
})

const unsubscribe = local.$subscribe((_, state) => {
  console.log(state.name)
})

local.$subscribe((mutation) => {
  console.log("not unsubscribe", mutation.storeId)
})

// lifecycle
onUnmounted(() => {
  console.log("onUnmounted")
  unsubscribe()
})
</script>

<template>
  <div>
    <input v-model="local.name">
    <div>name: {{ local.name }}</div>
    <input @input="local.onInput">
    <div>get(): {{ local.get() }}</div>
    <button type="button" @click="console.log(local.get())">get</button>
    <button type="button" @click="console.log(local.localName)">localName</button>
  </div>
</template>
