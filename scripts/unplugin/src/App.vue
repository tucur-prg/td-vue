<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">/Go to About</RouterLink>
    <RouterLink to="/empty">/Go to 404 Not Found</RouterLink>
  </div>
  <main>
    <RouterView />
  </main>
</template>
