import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia";

export const vFocus = {
    updated: (el:HTMLInputElement) => el.value = el.value.toUpperCase()
  }
const pinia = createPinia()
createApp(App).use(pinia).use(router).mount('#app')
