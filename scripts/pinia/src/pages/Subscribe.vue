<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useCounterStore, useCounterSubscribe } from '@/store/counter'

const counter = useCounterStore()
useCounterSubscribe((v: number) => {
  console.log("useCounterSubscribe:", v)
})

// これだと ref(count), computed(double) が更新されない
const { count, double, increment, decrement, get, set, err } = counter

// 分割代入する場合
const { count: count2, double: double2 } = storeToRefs(counter)

counter.$subscribe((mutation, state) => {
  console.log("subscribe:", mutation.storeId, mutation.type, "state:", state.count)
})

counter.$onAction(({ name, args, after, onError, }) => {
  console.log("onAction:", name, args)

  after((res) => {
    console.log("after", res)
  })

  onError((err) => {
    console.log("onError", err)
  })
})
</script>

<template>
  <div>
    <button type="button" @click="increment()">up</button>
    <button type="button" @click="decrement()">down</button>
    <br>
    <button type="button" @click="get()">get</button>
    <button type="button" @click="set(100)">set 100</button>
    <button type="button" @click="err()">err</button>
    <div>
      NG: {{ count }} . {{ double }}<br>
      OK: {{ count2 }} . {{ double2 }}<br>
    </div>
  </div>
</template>
