// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import StatusBar from './components/StatusBar.vue'

const app = createApp(App)
//Global Component
app.component('StatusBar', StatusBar)

app.mount("#app")

//createApp(App).mount('#app')
