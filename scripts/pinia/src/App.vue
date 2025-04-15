<script setup lang="ts">
import Loading from '@/components/Loading.vue'
import { useLoadingStore } from '@/store/loading'

const store = useLoadingStore()
</script>

<template>
  <Loading v-show="store.isLoading" />
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink class="nav-link" to="/">Home</RouterLink>
    <RouterLink class="nav-link" to="/state">State</RouterLink>
    <RouterLink class="nav-link" to="/subscribe">Subscribe</RouterLink>
    <RouterLink class="nav-link" to="/local1">Local 1</RouterLink>
    <RouterLink class="nav-link" to="/local2">Local 2</RouterLink>
    <RouterLink class="nav-link" to="/list">List</RouterLink>
    <RouterLink class="nav-link" to="/async">Async</RouterLink>
  </nav>
  <hr />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.nav-link {
  padding: 0 6px;
}
.nav-link + .nav-link {
  border-left: 1px solid #333;
}
</style>
