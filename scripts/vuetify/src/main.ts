import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vuetify } from '@/plugins/vuetify'

import { Cropper, Preview, CircleStencil } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

const app = createApp(App)

app.component('Cropper', Cropper)
app.component('Preview', Preview)
app.component('CircleStencil', CircleStencil)

app.use(vuetify)

app.mount('#app')
