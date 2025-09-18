<script setup lang="ts">
import { ref } from 'vue'

import DialogCropper from './dialog/DialogCropper.vue'
import NoImage from '../assets/vue.svg'

const isActive = ref(false)
const img = ref(NoImage)
const selectedUrl = ref('')
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
  const croppedData = canvas.toDataURL('image/png')

  canvas.toBlob((blob) => {
    if (blob) {
      if (blob.size > 100000) {
        console.log('Image size over.')
        return
      }
      console.log('size', blob.size)
      const url = URL.createObjectURL(blob)
      const tmpImg = new Image()
      tmpImg.onload = () => {
        console.log('w/h', tmpImg.width, tmpImg.height)
        URL.revokeObjectURL(url)
      }
      tmpImg.src = url
      img.value = croppedData
    }
  }, 'image/png')

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

  <div>{{ img }}</div>
</template>
