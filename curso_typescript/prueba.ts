function holaMundo(nombre) {
	return "Hola mundo!! Soy "+nombre
}

var nombre ="Alberto Rojas";
var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement>document.getElementById("container");

etiqueta.innerHTML = resultado;

// variables y tipos

var nombretwo:string="Alberto Rojas";
var edad:number= 29;
var programador:boolean=true;
var langs:Array<string>=["PHP","JavaScript","CSS"]

etiqueta.innerHTML= nombre+" - "+edad;

var a = 7;
var b = 12;

if(a==7) {
	let a = 4;
	var b = 1;

	console.log("Dentro del if:"+a+ " - "+b);
}

console.log("Fuera del if"+a+" - "+b);


// funciones y tipado

function devuelveNumero(num:number):string{
	return "Numero devuelto: "+num;
}

function devuelveString(texto:string):boolean {
	if(texto == "hola"){
		var num = true;
	} else {
		var num = false;
	}
		return num;
}

alert(devuelveNumero(34));
alert(devuelveString("holaaa"));



