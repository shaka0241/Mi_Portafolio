/*=============================================
OBJETOS: Es una colección de propiedades y métodos
=============================================*/
var object = {

	// Una propiedad es una asociacion entre un nombre y un valor.
	nombre: "Alberto",
	edad: 31,

	//El metodo es una funcion dentro de un objeto.
	descripcion: function () {
		console.log(" Su nombre es "+object.nombre+" y tiene "+object.edad+" años. ")
	},

	saludar: function(saludo){
		console.log(saludo +" "+object.nombre);
	}

}

console.log("Nombre", object.nombre)
console.log("Edad", object.edad)
object.descripcion();
object.saludar("Hola");



/*=============================================
OBJETOS PRIMITIVOS
=============================================*/

//El objeto Date se utiliza para trabajar con fechas y horas.
// https://www.w3schools.com/jsref/jsref_prototype_date.asp



