<template>
  <div id="app">
    <img src="./assets/logo.png">
      <h2>{{msg}}</h2>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
         <li><router-link :to="{name:'crear-restaurante'}">Crear restaurante</router-link></li>
        <li><router-link to="/restaurantes">Restaurantes</router-link></li>
        <li><router-link :to="{name:'restaurante-destacado', params: {id: 16}}">Restaurante destacado</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
      </ul>
      <hr/>

      <router-view></router-view>

      <!-- Cargar componente -->
     <!-- <home></home>
     <contacto></contacto> -->

    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'RestaurantesAPP'
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
</style>
