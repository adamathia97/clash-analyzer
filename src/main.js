import { createApp } from 'vue'
import { createPinia } from 'pinia' // Import Pinia
import './style.css'
import App from './App.vue'

const pinia = createPinia() // Create the Pinia instance
const app = createApp(App)

app.use(pinia) // Register the plugin
app.mount('#app')