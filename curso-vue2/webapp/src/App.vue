<template>
  <div id="app">
    <img class="logo_min" src="./assets/logo.png">
    
    <h2>{{msg}}</h2>
    
    
    <ul>
      <li><a href="" target="_blank">Inicio</a></li>
      <li><a href="" target="_blank">Mapas</a></li>
      <li><a href="" target="_blank">Mapa Destacado</a></li>
      <li><a href="" target="_blank">Contacto</a></li>
    </ul>
    
    
    <!--Cargar componente -->
    <home></home>
  
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
