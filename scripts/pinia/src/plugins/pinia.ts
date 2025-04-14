import { createPinia } from 'pinia'

export const pinia = createPinia()

pinia.use((context) => {
  console.log('Add Plugin')

  const { store } = context

  store.$subscribe(() => {
    console.log(`[PINIA] Store ${store.$id}`)
  })
})
