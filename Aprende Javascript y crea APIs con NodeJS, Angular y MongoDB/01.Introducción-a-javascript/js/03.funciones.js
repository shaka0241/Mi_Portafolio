/*=============================================
FUNCIONES SIN PARÁMETROS
=============================================*/

var globales = 10;
console.log("globales", globales);

// DECLARAMOS LA FUNCION

function saludo() {
	// tarea de la funcion

	console.log("saludo","hola");
}

//Ejecucion de la funcion

saludo();

/*=============================================
=           FUNCIONES CON PARAMETROS          =
=============================================*/

function operacion(digito1, digito2){

	var resultado = digito1 + digito2;
	globales = resultado;
	console.log("globales_operacion", globales);
	console.log("resultado", resultado);
}

// EJECUTAMOS LA FUNCION
operacion(5, 7);
operacion(10, 5);

/*============================================================
=            FUNCIONES CON RETORNO SIN PARAMETROS            =
============================================================*/
function retorno1(){
	var numero = 5;
	return numero;
}

console.log(retorno1());

/*============================================================
=            FUNCIONES CON RETORNO CON PARAMETROS            =
============================================================*/
function retorno2(numero){

	return numero;
}
console.log(retorno2(10));
console.log(retorno2(20));
console.log(retorno2(30));

