<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>Home</h1>
  <div>
    <RouterLink class="nav-link" to="/users/1">Go to User 1</RouterLink>
    <RouterLink class="nav-link" to="/users/2">Go to User 2</RouterLink>
  </div>
</template>

<style scoped>
.nav-link {
  padding: 0 6px;
}
.nav-link + .nav-link {
  border-left: 1px solid #333;
}
</style>
