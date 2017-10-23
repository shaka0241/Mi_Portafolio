import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Contacto from './Contacto.vue'

Vue.component('home', Home);
Vue.component('contacto', Contacto);

new Vue({
  el: '#app',
  render: h => h(App)
})
