var buttons = document.getElementsByClassName("seeMore");

for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("mouseover", doBigger(i));
};

function doBigger(i) {

	return function () {
		buttons[i].innerHTML = "Leer más";
		buttons[i].style.width = "150px";
		buttons[i].style.transition = "all ease-out .3s"
	};
}

//Este mouseover se utiliza para disminuir el tamaño de los botones al hacer hover
for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("mouseout", doSmaller(i));
};

function doSmaller(i) {
	return function () {
		buttons[i].innerHTML = "+";
		buttons[i].style.width = "50px";
		buttons[i].style.transition = "all ease-in .3s"
	}
}

var activatorp = document.querySelector("#activatorPrice");
var popToShowp = document.querySelector("#precioPop");
var closerp = document.querySelector("#pricePopCloser");

var activatore = document.querySelector("#activatorEstilo");
var popToShowe = document.querySelector("#estiloPop");
var closere = document.querySelector("#estiloPopCloser");

var activatort = document.querySelector("#activatorTematica");
var popToShowt = document.querySelector("#tematicaPop");
var closert = document.querySelector("#tematicaPopCloser");

funciones (activatorp, popToShowp, closerp);
funciones (activatore, popToShowe, closere);
funciones (activatort, popToShowt, closert);

function funciones (activador, pop, closer){
	
	activador.addEventListener("click", function(){
		pop.style.display = "inline-block";
	});
	closer.addEventListener("click", function(){
		pop.style.display = "none";
	});

	document.addEventListener("keyup", function(e){
		if (e.keyCode == 27) {
			pop.style.display = "none";
		}
	});
}


