var helado=20;
var precio =0;

var topping = prompt("Elige topping (oreo - kitkat - kinder)");

if(topping == "oreo"){
    precio=10;
}else if(topping=="kitkat"){
    precio=15;
}else if(topping=="kinder"){
    precio=25;
}else{
    alert("No tenemos ese topping");
}


if(precio!=0){
var preciofinal=helado+precio;
alert("El helado cuesta = " + helado+ " Precio total = " +preciofinal);
}


var pedido = prompt("Elige pedido del menú (carne - pescado - verdura)");

switch(pedido){
    case "carne":
        alert("Sugerencia de bebida: vino tinto");
        break;
    case "pescado":
        alert("Sugerencia de bedida: vino blanco");
        break;
    case "verdura":
        alert("Sugerencia de bebida: agua"); 
        break;
    default:
        alert("Elige carne, pescado o verdura");
}

var arrayparticipantes=["Bruno","Belen","Marcos","Juan","Marcia"];
var puntero=0;
var agregado=false;
for(puntero;puntero<arrayparticipantes.length;puntero++){
    alert("nombre de participante "+(puntero+1)+" : "+arrayparticipantes[puntero]);
    if(puntero==arrayparticipantes.length-1 && agregado==false){
        arrayparticipantes[5]=prompt("Ingrese nombre de nuevo participante");
        agregado=true;
        puntero =-1;
    }
}

var numero=0;
while(numero<11){
    alert("El numero "+numero+" es menor a 11");
    numero++;
}