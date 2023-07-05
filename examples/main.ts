import { createApp } from 'vue'
import App from './App.vue'
import allTest from '~/index'
const app = createApp(App)
app.use(allTest)
app.mount('#app')
