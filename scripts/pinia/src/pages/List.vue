<script setup lang="ts">
import { useListStore } from '@/store/list'

const list = useListStore()
</script>

<template>
  <div>
    <button type="button" @click="list.set(['d', 'e', 'f'])">set d,e,f</button>
    <button type="button" @click="list.set(['a', 'a', 'a'])">set a,a,a</button>
    <br>
    <button type="button" @click="list.update('y')">update y</button>
    <button type="button" @click="list.update('Y')">update Y</button>
    <div>{{ list.strings }}</div>
  </div>
</template>
