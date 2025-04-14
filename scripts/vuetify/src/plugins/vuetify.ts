import { createVuetify } from 'vuetify'

// style
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export const vuetify = createVuetify({
    components: {
    },
    defaults: {
      VTextField: { density: 'compact', variant: 'outlined', color: 'primary' },
      VSelect: { density: 'compact', variant: 'outlined' },
      VNumberInput: { density: 'compact', variant: 'outlined', controlVariant: 'split' }
    }
})
