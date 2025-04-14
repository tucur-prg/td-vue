<script setup lang="ts">
defineProps<{
  items: any[]
  itemTitle?: string | undefined
  itemValue?: string | undefined
  rules?: ((value: any) => boolean | string)[]
}>()

const model = defineModel()
</script>

<template>
  <v-select
    v-model="model"
    :items
    :item-title="itemTitle"
    :item-value="itemValue"
    :rules="rules"
  >
    <template #message="{ message }"> Custom: {{ message }} </template>
    <template #prepend-item>
      <slot name="prepend-item" />
    </template>
    <template #append-item>
      <slot name="append-item" />
    </template>
  </v-select>
</template>
