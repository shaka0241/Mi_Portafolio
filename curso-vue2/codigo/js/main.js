new Vue ({
	el:'main',
	data: {
		texto: 'Hola mundo desde VUE2',
		nombre: 'Nombre por defecto',
        nota:5,
        peliculas: ['Batman vs Superman','La verdad duele', 'Los mercenarios', 'Spiderman 3'],
        frutas: [
            {nombre: 'Manzana', temporada: 'Invierno', precio: 'Bajo'},
            {nombre: 'Naranja', temporada: 'Otoño', precio: 'Medio'},
            {nombre: 'Cereza', temporada: 'Primeravera', precio: 'Alto'},
            {nombre: 'Sandia', temporada: 'Verano', precio: 'Medio'}
        ],
        
        superfruta: {nombre: 'Mandarina', temporada: 'Verano', precio: 'Medio'},
        peliculaNueva:null
	},
    
    methods: {
        crearPelicula(){
            //alert(this.peliculaNueva);
            this.peliculas.unshift(this.peliculaNueva);
            this.peliculaNueva = null;
        },
        borrarPelicula(indice){
            this.peliculas.splice(indice, 1);
        }
    }
});
