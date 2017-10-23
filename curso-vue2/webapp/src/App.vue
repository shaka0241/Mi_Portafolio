<template>
  <div id="app">
    <img class="logo_min" src="./assets/logo.png">
    
    <h2>{{msg}}</h2>
    
    
    <ul>
      <li><router-link to="/home">Inicio</router-link></li>
      <li><router-link to="/mapas">Mapas</router-link></li>
      <li><router-link :to="{name:'mapa-top', params:{id:16}}">Mapa Destacado</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
    
    <router-view></router-view>
    
    <!--Cargar componente 
    <home></home>
    -->
  
  </div>
  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Mapas App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.logo_min{
  width: 70%;
  height: 70%;
}
</style>
