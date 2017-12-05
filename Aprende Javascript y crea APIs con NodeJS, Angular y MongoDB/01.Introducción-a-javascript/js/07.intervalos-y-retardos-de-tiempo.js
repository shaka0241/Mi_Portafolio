var tiempo = document.querySelector("#tiempo");
var segundos = 0;

/*=============================================
= SET INTERVAL (INTERVALO DE TIEMPO)
setInterval(funcion, tiempo)		          =
=============================================*/

 var intervalo = setInterval(function(){

		segundos++;

		tiempo.innerHTML = segundos;
		

},1000)

/*=============================================
= SET TIMEOUT (RETARDO DE TIEMPO)
setTimeout(funcion, tiempo)		          =
=============================================*/
setTimeout(function(){
	//alert("Se cumplio el tiempo")

	clearInterval(intervalo);

}, 6000)









