
console.log(arreglo);
// fetch ingresa al localhost en productosPorIds?ids+los elementos en el arreglo, obtiene un req y un res
fetch('http://localhost:3000/obtenerObjectID?ids='+arreglo)
.then(function(res){
    return res.json();
    //De lo que responde entonces lo convierte en un json
})
//Entonces con esa respuesta
.then(function(res){
    console.log(res);
    //de la lista en el checkout
    var lista = document.querySelector('.lista');
    //Crea una funcion que por cada elemento añade un elemento de lista con una imagen y todo lo demas.
    res.forEach(function(elem){
        lista.innerHTML += "<li>"+elem.name+"</li>";
    });
});

