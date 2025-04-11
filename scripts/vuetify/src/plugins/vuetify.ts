// Types
import type { App } from 'vue'

// style
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export const vuetify = createVuetify({
    components: {
    },
    defaults: {
      VTextField: { density: 'compact', variant: 'outlined', color: 'primary' },
      VSelect: { density: 'compact', variant: 'outlined' },
      VNumberInput: { density: 'compact', variant: 'outlined', controlVariant: 'split' }
    }
})
