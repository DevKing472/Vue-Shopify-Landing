import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { GesturePlugin } from '@vueuse/gesture'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(GesturePlugin)
app.mount('#app')
