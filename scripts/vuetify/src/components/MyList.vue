<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { title: 'Osaka' },
  { type: 'divider' },
  { title: 'Nagoya' },
  { title: 'fukuoka' }
])
</script>

<template>
  <v-container>
    <v-list :items="items" class="w-50" elevation="3"> </v-list>

    <v-list class="w-50" elevation="2">
      <v-list-item title="Osaka" prepend-icon="mdi-home"> </v-list-item>
      <v-list-item title="Nagoya" append-icon="mdi-file"> </v-list-item>
      <v-list-item title="Fukuoka" prepend-icon="mdi-home" append-icon="mdi-file"> </v-list-item>
    </v-list>
  </v-container>
</template>
