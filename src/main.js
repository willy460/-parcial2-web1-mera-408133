import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import '../styles.css'   // 👈 IMPORTANTE: sube un nivel, no './styles.css'

createApp(App).use(router).mount('#app')
