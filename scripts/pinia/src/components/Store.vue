<script setup lang="ts">
import { useCounterStore } from '@/store/counter'

const counter = useCounterStore()
</script>

<template>
  <button type="button" @click="counter.increment()">count is {{ counter.count }}</button>
</template>
