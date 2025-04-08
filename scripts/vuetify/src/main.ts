import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerVuetify } from '@/plugins/vuetify'

const app = createApp(App)

registerVuetify(app)

app.mount('#app')
