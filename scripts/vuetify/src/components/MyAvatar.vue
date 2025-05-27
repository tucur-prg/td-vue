<script setup lang="ts">
import { ref } from 'vue'

import DialogCropper from './dialog/DialogCropper.vue'
import NoImage from '../assets/vue.svg'

const isActive = ref(false)
const img = ref(NoImage)
const selectedUrl = ref()
const selectedFile = ref<File | null>(null)

const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files || input.files.length === 0) return

  const file = input.files[0]
  if (file && file.type.startsWith('image/')) {
    selectedFile.value = file
    selectedUrl.value = URL.createObjectURL(file)
    isActive.value = true
  } else {
    selectedFile.value = null
    selectedUrl.value = NoImage
    isActive.value = false
  }
}

const confirmed = (canvas: HTMLCanvasElement) => {
  const croppedData = canvas.toDataURL()
  img.value = croppedData
  isActive.value = false
}
const remove = () => {
  img.value = NoImage
}
</script>

<template>
  <DialogCropper :image="selectedUrl" :confirmed="confirmed" v-model="isActive" />

  <v-badge offset-x="40" offset-y="40" overlap color="rgba(0,0,0,0)" class="mt-8 mx-4">
    <template #badge>
      <v-btn small icon height="20" width="20" @click="remove">
        <v-icon small color="primary">mdi-close</v-icon>
      </v-btn>
    </template>

    <v-avatar size="256" class="mb-3 avatar" style="border: 1px solid #000" @click="">
      <v-img alt="sample" :eager="true" :src="img"></v-img>
    </v-avatar>
  </v-badge>

  <label>
    画像を選択
    <input type="file" accept="image/*" @change="onFileChange" style="display: none" />
  </label>
</template>
