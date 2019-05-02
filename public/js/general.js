
function actualizarCarrito (){
    //alert(arreglo);

    //Visualmente el cosito carrito lo transforma en el tamaño del arreglo, osea cuantos elementos hay
    document.querySelector('.carrito').innerHTML = arreglo.length;
}

var arreglo = JSON.parse(localStorage.getItem('arreglo'));
if(arreglo == null) arreglo = [];

actualizarCarrito();

