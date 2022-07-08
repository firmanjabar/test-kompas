import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPenToSquare, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faPenToSquare, faGithub, faHeart)

createApp(App).use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
