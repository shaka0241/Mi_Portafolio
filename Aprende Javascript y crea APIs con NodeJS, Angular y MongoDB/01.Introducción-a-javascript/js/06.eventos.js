var recuadro = document.querySelector("#recuadro");

/*=============================================
=            EVENTOS DESDE EL DOM            =
=============================================*/

function cambiarColor() {
	recuadro.style.background = "red";
}

/*=============================================
=            EVENTOS DESDE EL JAVASCRIPT      =
=============================================*/

var boton = document.querySelector("#boton");

boton.addEventListener("click", moverCaja)

function moverCaja(){
	recuadro.style.width = "500px";
	recuadro.style.transition = "1s width ease";
}

