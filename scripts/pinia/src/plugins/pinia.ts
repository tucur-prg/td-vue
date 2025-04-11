import { createPinia } from 'pinia';

export const pinia = createPinia()

pinia.use(() => {
    console.log("Add Plugin")
})
