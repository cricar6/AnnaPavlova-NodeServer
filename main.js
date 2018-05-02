var buttons = document.getElementsByClassName("watchButton");
var buttonWatch = document.getElementById("watchSwanLake");
var repertoryDescription = document.querySelector(".generalRepertoryInformation");

var backgrounder = document.getElementById("principalBanner");
var interval = 5000;
var index = 0;
var indexTwo = 0;

var backArray = ["../imgs/background-00.png", "../imgs/background-01.png", "../imgs/background-02.png"];
var copyBanner = document.getElementById("copyBanner");
var listCopies = ["Elegancia", "Fuerza", "Gracia"];

//Este set interval se utiliza para que las imagenes y palabras en el banner cambien cada interval
setInterval(function () {
	//console.log("ha entrado");
	index >= backArray.length - 1 ? index = 0 : index++;
	backgrounder.style.backgroundImage = "url(" + backArray[index] + ")";
	copyBanner.innerHTML = listCopies[index];
}, interval);

//Este mouseover se utiliza par aumentar el tamaño de los botones al hacer hover
for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("mouseover", doBigger(i));
};

//Esta es la funcion que se usa para hacerlo grande
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

//Esta es la funcion que se usa para disminuir el tamaño de los botones
function doSmaller(i) {
	return function () {
		buttons[i].innerHTML = "+";
		buttons[i].style.width = "50px";
		buttons[i].style.transition = "all ease-in .3s"
	}
}

//Estos son los listener que se agregan para abrir o cerrar una descripcion general del producto
buttonWatch.addEventListener("click", function () {
	repertoryDescription.style.opacity = "1";
});

repertoryDescription.addEventListener("click", function () {
	repertoryDescription.style.opacity = "0";
});

//Esta es la definicion del arreglo para cada elemento en la galería de repertorios, es posible aumentarla en cuanto se plazca
var repertoryArray = [{
	name: "El lago de los cisnes",
	description: "El lago de los cisnes es una composición de ballet en danza clásica, hace su debút en el teatro Bolshoi en Rusia, por lo que tiene una fuerte influencia europea y nórdica",
	basedIn: "El velo robado. Cuento Alemán",
	publicationUbication: "Bogotá, Colombia",
	music: "Piotr Ilich Chaikovski",
	choreo: "Julius Reisinger",
	placePremiere: "Teatro nacional de Colombia",
	datePremiere: "12 y 14 de diciembre, 2014",
	personajes: ["Odette", "Principe Sigfrido", "Reina madre", "Rothbart", "Odile"],
	bailarines: "Anna Pavlova Ballet",
	directores: ["Ana Consuelo Gómez", "Caballero Jaime Díaz"],
	image: "imgs/lago-de-los-cisnes-background.png"
}, {
	name: "El cascanueces",
	description: "El cascanueces es un cuento de hadas-ballet, encargado por el director de los 'Teatros imperiales' Iván Vsévolozhsy. Se trata de la op. 71 de Piotr Ilich Chaikovsy, un mùsico ruso",
	basedIn: "El cascanueces y el rey de los ratones",
	publicationUbication: "Bogotá, Colombia",
	music: "Piotr Ilich Chaikovski",
	choreo: "Marius Petipa",
	placePremiere: "Teatro nacional de Colombia",
	datePremiere: "18 de diciembre, 2016",
	personajes: ["Clara", "Drosselmeyer", "Príncipe Cascanueces", "Rey Ratón", "Sugar Plum Fairy"],
	bailarines: "Anna Pavlova Ballet",
	directores: ["Ana Consuelo Gómez", "Caballero Jaime Díaz"],
	image: "imgs/el-cascanueces.png"

}];

//Se declara la funcion para cambiar de elemento de repertorio, cambiando cada elemento uno por uno
function cambiarRepertorio(name, image, description, basedIn, publicationUbication, music, choreo, placePremiere, datePremiere, personajes, bailarines, directores) {
	
	indexTwo >= repertoryArray.length - 1 ? indexTwo = 0 : indexTwo++;

	var titlesReper = document.querySelectorAll("h5");
	titlesReper.forEach(element => {
		element.innerHTML = name;
	});

	var reperImg = document.querySelectorAll(".reperImg");
	reperImg.forEach(element => {
		element.style.backgroundImage = 'url(' + image + ')';
	});

	document.getElementById("reperDescription").innerHTML = description;
	document.getElementById("reperBasedIn").innerHTML = basedIn;
	document.getElementById("reperUbication").innerHTML = publicationUbication;
	document.getElementById("reperCompositor").innerHTML = music;
	document.getElementById("reperChoreo").innerHTML = choreo;
	document.getElementById("reperPremierePlace").innerHTML = placePremiere;
	document.getElementById("reperPremiereDate").innerHTML = datePremiere;
	var characters = personajes.join("<br>");
	document.getElementById("reperCharacter").innerHTML = characters;
	document.getElementById("repeDancers").innerHTML = bailarines;
	var directors = directores.join("<br>");
	document.getElementById("reperDirectores").innerHTML = directors;
}

//Aqui se aplica de acuerdo a la posicion de la index que va a ir cambiando.
setInterval(cambiarRepertorio(repertoryArray[indexTwo].name, repertoryArray[indexTwo].image,
	repertoryArray[indexTwo].description, repertoryArray[indexTwo].basedIn,
	repertoryArray[indexTwo].publicationUbication, repertoryArray[indexTwo].music,
	repertoryArray[indexTwo].choreo, repertoryArray[indexTwo].placePremiere,
	repertoryArray[indexTwo].datePremiere, repertoryArray[indexTwo].personajes,
	repertoryArray[indexTwo].bailarines, repertoryArray[indexTwo].directores), interval);



//Estas son las variables que se van a usar para poder hacer los productos interactivos
var draggable = document.querySelectorAll("#interaction img")[0];
var draggable1 = document.querySelectorAll("#interaction img")[1];
var draggable2 = document.querySelectorAll("#interaction img")[2];
var draggable3 = document.querySelectorAll("#interaction img")[3];

interact(draggable). //se aplica el interact.js al elemento dragable
draggable({ //se abren las propiedades
	inertia: true,
	restrict: { //se restringe al padre
		restriction: "parent",
		endOnly: true,
		elementRect: {
			top: 0,
			left: 0,
			bottom: 1,
			right: 1
		}
	},
	autoScroll: true,
	onmove: dragMoveListener // se moverá segun esta funcion enunciada más adelante

});
interact(draggable1).
draggable({
	inertia: true,
	restrict: {
		restriction: "parent",
		endOnly: true,
		elementRect: {
			top: 0,
			left: 0,
			bottom: 1,
			right: 1
		}
	},
	autoScroll: true,
	onmove: dragMoveListener

});
interact(draggable2).
draggable({
	inertia: true,
	restrict: {
		restriction: "parent",
		endOnly: true,
		elementRect: {
			top: 0,
			left: 0,
			bottom: 1,
			right: 1
		}
	},
	autoScroll: true,
	onmove: dragMoveListener

});
interact(draggable3).
draggable({
	inertia: true,
	restrict: {
		restriction: "parent",
		endOnly: true,
		elementRect: {
			top: 0,
			left: 0,
			bottom: 1,
			right: 1
		}
	},
	autoScroll: true,
	onmove: dragMoveListener

});


function dragMoveListener(event) {
	var target = event.target,
		x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
		y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
	target.style.webkitTransform =
		target.style.transform =
		'translate(' + x + 'px, ' + y + 'px)';
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
}
