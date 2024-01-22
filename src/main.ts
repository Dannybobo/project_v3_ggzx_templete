import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhTW from 'element-plus/dist/locale/zh-tw.mjs'

const app = createApp(App)
app.use(ElementPlus, { locale: zhTW })
app.mount('#app')
