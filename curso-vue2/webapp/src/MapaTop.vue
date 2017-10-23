<template>
    <h2>Esto es la {{texto}}: {{id_mapa}}</h2>
</template>


<script>
export default {
  name: 'mapas-top',
  mounted(){
      this.id_mapa = this.$route.params.id;
  },
    
  data () {
    return {
      texto: 'Pagina de Mapa Destacado',
        id_mapa: null
    }
  }
}
</script>