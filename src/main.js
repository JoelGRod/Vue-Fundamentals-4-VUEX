import { createApp } from 'vue'
import App from './App.vue'
// Vuex
import store from './store/index'

createApp(App)
    .use(store)
    .mount('#app')
