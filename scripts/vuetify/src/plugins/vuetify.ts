// Types
import type { App } from 'vue'

// style
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
    components: {
    },
    defaults: {
      VTextField: { density: 'compact', variant: 'outlined', color: 'primary' },
      VSelect: { density: 'compact', variant: 'outlined' },
      VNumberInput: { density: 'compact', variant: 'outlined', controlVariant: 'split' }
    }
})

export function registerVuetify(app: App) {
    app.use(vuetify)
}
