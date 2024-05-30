/*let reservaasiento;
let bombonera=["x","x","x","x","x","x","x","x","x","x","x","x"];

function freservar(){
    reservaasiento=prompt('Elija número de asiento:');
    alert("Asiento reservado:"+reservaasiento);
    reservaasiento--;
    bombonera[reservaasiento]="r";
    //alert(bombonera[1]);
    alert(bombonera);
    

}*/
let bombonera=["l","l","l","l","l","l","l","l","l","l","l","l"];
let reservas=0;
let precio=20000;
let cuenta=0;
let conteo = document.getElementById('reservas');
let monto = document.getElementById('precio');
conteo.innerHTML = cuenta;

const boton1 = document.getElementById("btn1"); 
boton1.addEventListener("click", ()=>{ 
    if(bombonera[0]=="l"){
        boton1.style.color = "white"; 
        boton1.style.backgroundColor = "green";
        cuenta++;
        conteo.innerHTML = cuenta;
        bombonera[0]="r"; }else{
        boton1.style.color = "white"; 
        boton1.style.backgroundColor = "grey";
        cuenta--;
        conteo.innerHTML = cuenta;
        bombonera[0]="l";
        
        }monto.innerHTML = precio*cuenta;});

        const boton2 = document.getElementById("btn2"); 
boton2.addEventListener("click", ()=>{ 
    if(bombonera[1]=="l"){
        boton2.style.color = "white"; 
        boton2.style.backgroundColor = "green";
        cuenta++;
        conteo.innerHTML = cuenta;
        bombonera[1]="r"; }else{
        boton2.style.color = "white"; 
        boton2.style.backgroundColor = "grey";
        cuenta--;
        conteo.innerHTML = cuenta;
        bombonera[1]="l";
        }monto.innerHTML = precio*cuenta;});

        const boton3 = document.getElementById("btn3"); 
boton3.addEventListener("click", ()=>{ 
    if(bombonera[2]=="l"){
        boton3.style.color = "white"; 
        boton3.style.backgroundColor = "green";
        cuenta++;
        conteo.innerHTML = cuenta;
        bombonera[2]="r"; }else{
        boton3.style.color = "white"; 
        boton3.style.backgroundColor = "grey";
        cuenta--;
        conteo.innerHTML = cuenta;
        bombonera[2]="l";
        }monto.innerHTML = precio*cuenta;});

        const boton4 = document.getElementById("btn4"); 
boton4.addEventListener("click", ()=>{ 
    if(bombonera[3]=="l"){
        boton4.style.color = "white"; 
        boton4.style.backgroundColor = "green";
        cuenta++;
        conteo.innerHTML = cuenta;
        bombonera[3]="r"; }else{
        boton4.style.color = "white"; 
        boton4.style.backgroundColor = "grey";
        cuenta--;
        conteo.innerHTML = cuenta;
        bombonera[3]="l";
        }monto.innerHTML = precio*cuenta;});

        const boton5 = document.getElementById("btn5"); 
boton5.addEventListener("click", ()=>{ 
    if(bombonera[4]=="l"){
        boton5.style.color = "white"; 
        boton5.style.backgroundColor = "green";
        cuenta++;
        conteo.innerHTML = cuenta;
        bombonera[4]="r"; }else{
        boton5.style.color = "white"; 
        boton5.style.backgroundColor = "grey";
        cuenta--;
        conteo.innerHTML = cuenta;
        bombonera[4]="l";
        }monto.innerHTML = precio*cuenta;});

        const boton6 = document.getElementById("btn6"); 
boton6.addEventListener("click", ()=>{ 
    if(bombonera[5]=="l"){
        boton6.style.color = "white"; 
        boton6.style.backgroundColor = "green";
        cuenta++;
        conteo.innerHTML = cuenta;
        bombonera[5]="r"; }else{
        boton6.style.color = "white"; 
        boton6.style.backgroundColor = "grey";
        cuenta--;
        conteo.innerHTML = cuenta;
        bombonera[5]="l";
        }monto.innerHTML = precio*cuenta;});

        const boton7 = document.getElementById("btn7"); 
boton7.addEventListener("click", ()=>{ 
    if(bombonera[6]=="l"){
        boton7.style.color = "white"; 
        boton7.style.backgroundColor = "green";
        cuenta++;
        conteo.innerHTML = cuenta;
        bombonera[6]="r"; }else{
        boton7.style.color = "white"; 
        boton7.style.backgroundColor = "grey";
        cuenta--;
        conteo.innerHTML = cuenta;
        bombonera[6]="l";
        }monto.innerHTML = precio*cuenta;});

        const boton8 = document.getElementById("btn8"); 
boton8.addEventListener("click", ()=>{ 
    if(bombonera[7]=="l"){
        boton8.style.color = "white"; 
        boton8.style.backgroundColor = "green";
        cuenta++;
        conteo.innerHTML = cuenta;
        bombonera[7]="r"; }else{
        boton8.style.color = "white"; 
        boton8.style.backgroundColor = "grey";
        cuenta--;
        conteo.innerHTML = cuenta;
        bombonera[7]="l";
        }monto.innerHTML = precio*cuenta;});

        const boton9 = document.getElementById("btn9"); 
boton9.addEventListener("click", ()=>{
        if(bombonera[8]=="l"){
        boton9.style.color = "white"; 
        boton9.style.backgroundColor = "green";
        cuenta++;
        conteo.innerHTML = cuenta;
        bombonera[8]="r"; }else{
        boton9.style.color = "white"; 
        boton9.style.backgroundColor = "grey";
        cuenta--;
        conteo.innerHTML = cuenta;
        bombonera[8]="l";
        }monto.innerHTML = precio*cuenta;});


        function comprar(){
            cuenta=0;
            conteo.innerHTML = cuenta;
            monto.innerHTML = precio*cuenta;
            if(bombonera[0]=="r"){
                boton1.style.color = "white"; 
                boton1.style.backgroundColor = "red";
            }
            if(bombonera[1]=="r"){
                boton2.style.color = "white"; 
                boton2.style.backgroundColor = "red";
            }
            if(bombonera[2]=="r"){
                boton3.style.color = "white"; 
                boton3.style.backgroundColor = "red";
            }
            if(bombonera[3]=="r"){
                boton4.style.color = "white"; 
                boton4.style.backgroundColor = "red";
            }
            if(bombonera[4]=="r"){
                boton5.style.color = "white"; 
                boton5.style.backgroundColor = "red";
            }
            if(bombonera[5]=="r"){
                boton6.style.color = "white"; 
                boton6.style.backgroundColor = "red";
            }
            if(bombonera[6]=="r"){
                boton7.style.color = "white"; 
                boton7.style.backgroundColor = "red";
            }
            if(bombonera[7]=="r"){
                boton8.style.color = "white"; 
                boton8.style.backgroundColor = "red";
            }
            if(bombonera[8]=="r"){
                boton9.style.color = "white"; 
                boton9.style.backgroundColor = "red";
            }

        }
