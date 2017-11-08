var tiempo = document.querySelector("#tiempo");
var segundos = 0;

/*=============================================
SET INTERVAL (Intervalo de tiempo)
setInterval(función, tiempo)
=============================================*/

var intervalo = setInterval(function(){

	segundos++;

	tiempo.innerHTML = segundos;

},1000)

/*=============================================
SET TIMEOUT (retardo de tiempo)
setTimeout(función, tiempo)
=============================================*/

setTimeout(function(){

	// alert("Se cumplió el tiempo")
	clearInterval(intervalo);

},5000)




