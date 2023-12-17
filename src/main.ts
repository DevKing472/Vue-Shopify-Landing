import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore
import { MotionPlugin } from '@vueuse/motion'
// @ts-ignore
import { GesturePlugin } from '@vueuse/gesture'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(GesturePlugin)
app.mount('#app')
