import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faThumbsUp, faGithub)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
