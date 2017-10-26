<template>
    <div>
        
        <ul id="restaurantes-list" v-if="restaurantes != null">
            <li v-for="restaurante in restaurantes">
                <strong>{{restaurante.nombre}}</strong>
            </li>
        </ul>
        <span v-else>Cargando Restaurantes...</span>
    </div>
</template>


<script>
    import axios from 'axios';
export default {
  name: 'mapas-list',
    mounted(){
        this.getRestaurantes();
    },
  data () {
    return {
      texto: 'Lista de Mapas',
        restaurantes: null
        
    }
  },
    methods: {
        getRestaurantes(){
            axios.get('http://localhost/slim/restaurantes-api.php/restaurantes')
                .then((respuesta) =>{
                    this.restaurantes = respuesta.data.data; 
            });
        }
    }
}
</script>