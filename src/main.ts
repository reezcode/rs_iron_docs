import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'

import 'highlight.js/styles/github-dark.css'
import hljs from 'highlight.js/lib/core'
import dart from 'highlight.js/lib/languages/dart'
import bash from 'highlight.js/lib/languages/bash'
import hljsVuePlugin from '@highlightjs/vue-plugin'

hljs.registerLanguage('dart', dart)
hljs.registerLanguage('bash', bash)

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.use(hljsVuePlugin)
app.mount('#app')
