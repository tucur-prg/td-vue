<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <v-number-input
    v-model="count"
    :reverse="false"
    controlVariant="default"
    label=""
    :hideInput="false"
    :inset="false"
  ></v-number-input>

</template>

<style scoped>
</style>
