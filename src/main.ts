import { createApp } from 'vue';

import App from '@/App.vue';
import globalComponent from '@/components';
import pinia from '@/store';
import router from '@/router';
import '@/router/permission';

import ElementPlus from 'element-plus';
import zhTW from 'element-plus/dist/locale/zh-tw.mjs'; //@ts-expect-error import lang mjs file
import 'element-plus/dist/index.css';

import 'virtual:svg-icons-register';

import '@/styles/index.scss';

const app = createApp(App);
app.use(globalComponent);
app.use(router);
app.use(pinia);
app.use(ElementPlus, { locale: zhTW });

app.mount('#app');
