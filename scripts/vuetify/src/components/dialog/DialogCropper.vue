<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  image: string
  confirmed: Function
}>()

const cropperRef = ref()

const confirmed = () => {
  const canvas = cropperRef.value?.getResult()?.canvas
  if (canvas) {
    props.confirmed(canvas)
  }
}
</script>

<template>
  <v-dialog max-width="480">
    <template #default="{ isActive }">
      <v-card class="px-6 py-6">
        <div>Cropper</div>
        <cropper
          class="cropper"
          backgroundClass="cropper-background"
          foregroundClass="cropper-foreground"
          :src="props.image"
          stencil-component="CircleStencil"
          :minWidth="64"
          :minHeight="64"
          :maxWidth="256"
          :maxHeight="256"
          :stencil-props="{ aspectRatio: 1 }"
          ref="cropperRef"
        />
        <v-btn @click="confirmed">確定</v-btn>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
.cropper {
  height: 600px;
  width: 600px;
}
</style>

<style>
.vue-circle-stencil {
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
}
</style>
