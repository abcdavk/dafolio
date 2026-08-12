import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vue3Marquee from 'vue3-marquee'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiStarFill,
  BiStar,
  FaCrown,
  PxCheck,
  PxShoppingBag,
  ViFileTypeJsOfficial,
  ViFileTypeCpp3,
  ViFileTypeGoLightblue,
  ViFileTypeCsharp2,
  ViFileTypeJava,
  ViFileTypeRust,
  ViFileTypeReactjs,
  ViFileTypeVue,
} from 'oh-vue-icons/icons'

addIcons(
  BiStarFill,
  BiStar,
  FaCrown,
  PxCheck,
  PxShoppingBag,
  ViFileTypeJsOfficial,
  ViFileTypeCpp3,
  ViFileTypeGoLightblue,
  ViFileTypeCsharp2,
  ViFileTypeJava,
  ViFileTypeRust,
  ViFileTypeReactjs,
  ViFileTypeVue,
)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(Vue3Marquee)
app.use(router)
app.mount('#app')
