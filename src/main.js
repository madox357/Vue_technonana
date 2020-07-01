import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'
//import { AtomSpinner } from 'epic-spinners'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


