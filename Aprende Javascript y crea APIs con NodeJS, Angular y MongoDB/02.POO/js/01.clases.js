/*=============================================
CLASES

Las clases, son funciones constructoras y siempre las vamos a iniciar con Mayúscula

ejemplo: new String()
=============================================*/

/*=============================================
CLASES PRIMITIVAS
=============================================*/

//Clase String

var string = new String("esto es un string")
console.log("string", string);

// Clase number
var number = new Number(23);
console.log("number", number);

/*=============================================
CLASES COMPUESTAS
=============================================*/
//clase array
var array = new Array("rojo", "amarillo", "azul");
console.log("array", array);

//clase object
var object = new Object({
	nombre: "Pedro",
	edad: 30
});

/*=============================================
CLASES CREADAS POR EL PROGRAMADOR
=============================================*/

function Persona() {
	// Propiedades publicas
	this.nombre;
	this.edad;
}

var yo = new Persona();
yo.nombre = "Alberto";
yo.edad= 30;

console.log("yo", yo);

//Clases con Parametros

function Animales(tipo, raza) {
	this.tipo = tipo;
	this.raza = raza;
}

var mascota = new Animales("perro", "boldog");
console.log("mascota", mascota);






