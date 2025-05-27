<script setup lang="ts">
import { ref } from 'vue'

import MyForm from './MyForm.vue'
import MyList from './MyList.vue'
import MyAvatar from './MyAvatar.vue'

const tab = ref(null)
</script>

<template>
  <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
    <v-tab :value="1">MyForm</v-tab>
    <v-tab :value="2">MyList</v-tab>
    <v-tab :value="3">MyAvatar</v-tab>
  </v-tabs>

  <v-tabs-window v-model="tab">
    <v-tabs-window-item :value="1">
      <MyForm />
    </v-tabs-window-item>

    <v-tabs-window-item :value="2">
      <MyList />
    </v-tabs-window-item>

    <v-tabs-window-item :value="3">
      <MyAvatar />
    </v-tabs-window-item>
  </v-tabs-window>
</template>
