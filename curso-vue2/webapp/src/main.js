import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Contacto from './Contacto.vue'
import MapaTop from './MapaTop.vue'
import MapasList from './MapasList.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/mapa-top/:id', name:'mapa-top', component:MapaTop},
    {path: '/contacto', component:Contacto},
    {path: '/home', component:Home},
    {path: '/mapas', component:MapasList},
    {path: '/', component:Home}
]

const router = new VueRouter({
   routes,
    mode: 'history'
});

Vue.component('home', Home);
Vue.component('mapas', MapasList);
Vue.component('mapa-top', MapaTop);
Vue.component('contacto', Contacto);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
