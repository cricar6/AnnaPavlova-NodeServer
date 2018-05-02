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


