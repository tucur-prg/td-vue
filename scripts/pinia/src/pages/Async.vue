<script setup lang="ts">
import { useLoadingStore } from '@/store/loading'

const store = useLoadingStore()

async function onSeriesClick() {
  await fetchData1()
  await wait(100)
  await fetchData2()
}
async function onParallelClick() {
  await Promise.all([fetchData1(), fetchData2()])
}

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(''), ms))
}

async function fetchData1() {
  store.enqueue()
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('1')
      resolve('data1')
      store.dequeue()
    }, 1000)
  })
}

async function fetchData2() {
  store.enqueue()
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('2')
      resolve('data2')
      store.dequeue()
    }, 1000)
  })
}
</script>

<template>
  <h1>Async</h1>
  <button type="button" @click="onSeriesClick">GET</button> /
  <button type="button" @click="onParallelClick">GET</button>
</template>
