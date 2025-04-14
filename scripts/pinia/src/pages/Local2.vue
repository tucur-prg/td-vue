<script setup lang="ts">
import { useLocalStore } from '@/store/local'

console.log('local: setup')

const local = useLocalStore()
</script>

<template>
  <div>
    <input v-model="local.name" />
    <div>name: {{ local.name }}</div>
  </div>
</template>
