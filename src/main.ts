import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { create } from 'naive-ui'
import { NUiInstance } from 'naive-ui/lib/create'


const app = createApp(App)

const naive: NUiInstance = create({

})

app.use(router)
app.use(naive)

app.mount('#app')

