<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stamp = ref(Date.now())

await wait(1000)

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(''), ms))
}

onMounted(() => {
  console.log('mounted: Load.vue')
})
</script>

<template>
  <div>Hello World!! {{ stamp }}</div>
</template>
