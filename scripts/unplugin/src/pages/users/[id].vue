<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = String(route.params.id)
</script>

<template>
  <h1>User</h1>
  <div>{{ id }}</div>
</template>
