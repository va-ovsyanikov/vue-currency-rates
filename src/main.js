import { createApp } from 'vue'
import { Button, Layout, Select, Table, Popconfirm, Spin } from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'


const app = createApp(App)
app.use(Button)
app.use(Layout)
app.use(Select)
app.use(Table)
app.use(Popconfirm)
app.use(Spin)
app.mount('#app')
