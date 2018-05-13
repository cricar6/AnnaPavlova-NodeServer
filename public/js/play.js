var clasificatorA1 = `
<span class="helper"></span>
    <div>
        <h6>Información general</h6>
        <div class="data">
            <span class="dataTitle">Basado en:</span>
            <span class="dataContent">basedIn</span>
        </div>
        <div class="data">
            <span class="dataTitle">
                Estilo
            </span>
            <span class="dataContent">style</span>
        </div>
        <div class="data">
            <span class="dataTitle">
                Géneros
            </span>
            <span class="dataContent">
                genders
            </span>
        </div>
    </div>
`;

var clasificatorA2 = `
<span class="helper"></span>
<div>
    <h6>Ubicación</h6>
    <p>publicationUbication</p>
</div>
`;

var clasificatorB1 = `
<span class="helper"></span>
<div>
    <h6>Musica</h6>
    <p>music</p>
</div>
`;

var clasificatorB2 = `
<span class="helper"></span>
<div>
    <h6>Teatro</h6>
    <p>placePremiere</p>
</div>
`;
var clasificatorC1 = `
<span class="helper"></span>
<div>
    <h6>Coreografía</h6>
    <p>choreo</p>
</div>
`;

var clasificatorC2 = `<span class="helper"></span>
<div>
    <h6>Fecha</h6>
    <p>14 de enero, 2018</p>
</div>`;

var clasificatorD1 = `<span class="helper"></span>
<div>
    <h6>Personajes</h6>
    <p>personajes</p>
</div>`;
var clasificatorD2 = `<span class="helper"></span>
<div>
    <h6>Directores</h6>
    <p>directores</p>
</div>`;


var obraClasifier = document.getElementById("obraClasifier");
var functionClasifier = document.getElementById("functionClasifier");
var casificatorTitle = document.getElementById("clasificatorTitle");

var cA = document.getElementById("cA");
var cpA = document.getElementById("cpA");
var cB = document.getElementById("cB");
var cpB = document.getElementById("cpB");
var cC = document.getElementById("cC");
var cpC = document.getElementById("cpC");
var cD = document.getElementById("cD");
var cpD = document.getElementById("cpD");

var cA1Icon = '<img src="" alt="" width="30px" height="30px">',
    cB1Icon = '<img src="" alt="" width="30px" height="30px">',
    cC1Icon = '<img src="" alt="" width="30px" height="30px">',
    cD1Icon = '<img src="" alt="" width="30px" height="30px">',
    cA2Icon = '<img src="" alt="" width="30px" height="30px">',
    cB2Icon = '<img src="" alt="" width="30px" height="30px">',
    cC2Icon = '<img src="" alt="" width="30px" height="30px">',
    cD2Icon = '<img src="" alt="" width="30px" height="30px">';

    casificatorTitle.innerHTML = "Sobre la obra";
    obraClasifier.style.opacity = "1";
    functionClasifier.style.opacity = "0.2";
    cA.innerHTML = cA1Icon;
    cpA.innerHTML = clasificatorA1;

    cB.innerHTML = cB1Icon;
    cpB.innerHTML = clasificatorB1;

    cC.innerHTML = cC1Icon;
    cpC.innerHTML = clasificatorC1;

    cD.innerHTML = cD1Icon;
    cpD.innerHTML = clasificatorD1;


obraClasifier.addEventListener("click", function () {
    casificatorTitle.innerHTML = "Sobre la obra";
    obraClasifier.style.opacity = "1";
    functionClasifier.style.opacity = "0.2";
    cA.innerHTML = cA1Icon;
    cpA.innerHTML = clasificatorA1;

    cB.innerHTML = cB1Icon;
    cpB.innerHTML = clasificatorB1;

    cC.innerHTML = cC1Icon;
    cpC.innerHTML = clasificatorC1;

    cD.innerHTML = cD1Icon;
    cpD.innerHTML = clasificatorD1;

});

functionClasifier.addEventListener("click", function () {
    obraClasifier.style.opacity = "0.2";
    functionClasifier.style.opacity = "1";
    casificatorTitle.innerHTML = "Sobre la función";

    cA.innerHTML = cA2Icon;
    cpA.innerHTML = clasificatorA2;

    cB.innerHTML = cB2Icon;
    cpB.innerHTML = clasificatorB2;

    cC.innerHTML = cC2Icon;
    cpC.innerHTML = clasificatorC2;

    cD.innerHTML = cD2Icon;
    cpD.innerHTML = clasificatorD2;
});


var activatorA = document.querySelector("#cA");
var popToShowA = document.querySelector("#cpA");
var closerA = document.querySelector("#cCPA");

var activatorB = document.querySelector("#cB");
var popToShowB = document.querySelector("#cpB");
var closerB = document.querySelector("#cCPB");

var activatorC = document.querySelector("#cC");
var popToShowC = document.querySelector("#cpC");
var closerC = document.querySelector("#cCPC");

var activatorD = document.querySelector("#cD");
var popToShowD = document.querySelector("#cpD");
var closerD = document.querySelector("#cCPD");

funciones (activatorA, popToShowA, closerA);
funciones (activatorB, popToShowB, closerB);
funciones (activatorC, popToShowC, closerC);
funciones (activatorD, popToShowD, closerD);

function funciones (activador, pop, closer){
	
	activador.addEventListener("click", function(){
		pop.style.display = "inline-block";
	});
	pop.addEventListener("click", function(){
		pop.style.display = "none";
	});

	document.addEventListener("keyup", function(e){
		if (e.keyCode == 27) {
			pop.style.display = "none";
		}
	});
}