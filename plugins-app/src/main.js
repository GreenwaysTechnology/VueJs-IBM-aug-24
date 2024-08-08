// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { myPlugin } from './plugins/Myplugin'

createApp(App).use(myPlugin).mount('#app')
