function holaMundo(nombre) {
    return "Hola mundo!! Soy " + nombre;
}
var nombre = "Alberto Rojas";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
// variables y tipos
var nombretwo = "Alberto Rojas";
var edad = 29;
var programador = true;
var langs = ["PHP", "JavaScript", "CSS"];
etiqueta.innerHTML = nombre + " - " + edad;
var a = 7;
var b = 12;
if (a == 7) {
    var a_1 = 4;
    var b = 1;
    console.log("Dentro del if:" + a_1 + " - " + b);
}
console.log("Fuera del if" + a + " - " + b);
// funciones y tipado
function devuelveNumero(num) {
    return "Numero devuelto: " + num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = true;
    }
    else {
        var num = false;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString("holaaa"));
