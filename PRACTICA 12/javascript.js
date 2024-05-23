function saludo(nombre){
    alert("Bienvenid@ "+nombre);
}

var varnombre = prompt("Ingrese su nombre");
if(varnombre != ""){
    saludo(varnombre);
}else{
    alert("Ingrese su nombre");
}

