import type { App } from 'vue'

import { Cropper, Preview, CircleStencil } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

export const custom = {
  install(app: App, options?: any) {
    app.config.globalProperties.$myValue = 'Custom Plugin!'

    app.component('Cropper', Cropper)
    app.component('Preview', Preview)
    app.component('CircleStencil', CircleStencil)

    if (options?.log) {
      console.log('MyPlugin installed with options:', options)
    }
  }
}
