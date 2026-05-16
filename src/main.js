import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Notify, Loading } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import './assets/main.css'

import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: { Notify, Loading },
  config: {
    notify: { position: 'top-right', timeout: 3000 },
  },
})

app.mount('#app')
