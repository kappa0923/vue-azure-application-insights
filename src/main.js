import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { appInsightsPlugin } from './plugins/application-insights'

const app = createApp(App)
app.use(appInsightsPlugin)
app.provide('appInsights', app.config.globalProperties.$appInsights)

app.mount('#app')
