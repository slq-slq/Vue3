import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'
import globalComponent from './components/index';
import'@/styles/index.scss';
import router from './router'
import pinia from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';


const app = createApp(App)

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
app.use(ElementPlus, {
    locale: zhCn
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(Antd)
app.use(globalComponent);
app.use(router)
app.use(pinia)
import "./permission.js"
app.mount('#app')
