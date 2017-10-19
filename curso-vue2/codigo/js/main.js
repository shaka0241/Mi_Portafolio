Vue.component('articulos', {
    template: `
    
    <div class="componente-articulos">
    <h1>COMPONENTE {{titulo}} </h1> 
        
        <h1>Listado</h1>
                
        <ol v-if="posts">
             <li v-for="(post, index) in posts">
                        {{post.title}}
             </li>
        </ol>
            <span v-else>Cargando listado por ajax...</span>
            </div>

    `,

    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((respuesta) => {
            this.posts=respuesta.data;
        });

    },

    data(){
        return{
            titulo:'ARTICULOS',
            posts: null,
        }
    }
    
});

Vue.component('frutas', {
    template: '<h1>COMPONENTE FRUTAS </h1>'
    
});

Vue.filter('mayusculas', (value) => value.toUpperCase());

new Vue ({
	el:'main',
    mounted(){
        
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((respuesta) => {
            this.posts=respuesta.data;
        });
        
    },
	data: {
        posts: null,
		texto: 'Hola mundo desde VUE2',
		nombre: 'Alberto',
		apellido: 'Rojas',
        nota:5,
        peliculas: ['Batman vs Superman','La verdad duele','Avengers','Zoolander', 'Los mercenarios', 'Spiderman 3'],
        frutas: [
            {nombre: 'Manzana', temporada: 'Invierno', precio: 'Bajo'},
            {nombre: 'Naranja', temporada: 'Otoño', precio: 'Medio'},
            {nombre: 'Cereza', temporada: 'Primeravera', precio: 'Alto'},
            {nombre: 'Sandia', temporada: 'Verano', precio: 'Medio'}
        ],
        
        superfruta: {nombre: 'Mandarina', temporada: 'Verano', precio: 'Medio'},
        peliculaNueva:null,
        busqueda: '',
        confirmado:null
	},
    
    methods: {
        crearPelicula(){
            //alert(this.peliculaNueva);
            this.peliculas.unshift(this.peliculaNueva);
            this.peliculaNueva = null;
        },
        borrarPelicula(indice){
            this.peliculas.splice(indice, 1);
        },
            
        marcar(index){
            this.confirmado = index;
        }
    },
    computed: {
    	nombreYapellidos(){

            var date = new Date();
            var year = date.getFullYear();

            return this.nombre+" "+this.apellido+" -Nota: "+this.nota+" - "+year+' '+date.getDate();

    	},
    	peliculasOrdenadas(){

            return this.peliculas.sort();

    	},

        buscarFruta(){
            return this.frutas.filter((fruta) => fruta.nombre.includes(this.busqueda));
        }
    }
});

const vue2 = new Vue({
   el: '#app',
    data: {
        texto: 'Segunda instancia vue'
    }
});

const vue3 = new Vue({
   el: '#tercera',
    data: {
        texto: 'Tercera instancia vue'
    }
});
