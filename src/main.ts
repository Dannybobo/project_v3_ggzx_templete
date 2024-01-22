import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App)
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-expect-error import lang mjs file
import zhTW from 'element-plus/dist/locale/zh-tw.mjs'
app.use(ElementPlus, { locale: zhTW })

import 'virtual:svg-icons-register'
import globalComponent from '@/components'
app.use(globalComponent)

import '@/styles/index.scss'

app.mount('#app')
