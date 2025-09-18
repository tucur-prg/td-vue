<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

import SelectBox from '@/components/inputs/SelectBox.vue'

const id = ref('')
const items = ref([
  {
    id: '0000-0001',
    name: 'select 1'
  },
  {
    id: '0000-0002',
    name: 'select 2'
  },
  {
    id: '0000-0003',
    name: 'select 3'
  }
])

function onUpdate(v: string) {
  id.value = v
}
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
  />

  <SelectBox
    :items="items"
    itemTitle="name"
    itemValue="id"
    v-model="id"
    prepend-inner-icon="mdi-vector-arrange-below"
    @update:modelValue="onUpdate"
  >
    <template #append-item>
      <v-divider></v-divider>
      <v-list-item @click="" class="add-item" color="primary">
        <div class="d-flex align-center">
          <v-icon class="mr-2" color="primary">mdi-plus</v-icon>
          <div>
            <div class="primary--text font-weight-medium">新しい項目を追加</div>
          </div>
        </div>
      </v-list-item>
    </template>
  </SelectBox>
  <div>{{ id }}</div>
</template>

<style scoped>
.add-item:hover {
  background-color: #e3f2fd;
  cursor: pointer;
}
</style>
