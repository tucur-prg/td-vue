import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vuetify } from '@/plugins/vuetify'
import { custom } from '@/plugins/custom'

const app = createApp(App)

app.use(vuetify)
app.use(custom, { log: true })

app.mount('#app')
