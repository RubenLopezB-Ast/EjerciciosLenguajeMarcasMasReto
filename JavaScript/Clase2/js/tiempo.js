let tiempo = document.querySelector("#tiempo");
let segundos = 0;

/*
SET INTERVAL (FUNCIÓN, TIEMPO (ms))
 */

let intervalo = setInterval(function(){
    segundos++;
    tiempo.innerHTML = segundos;
},1000);

/*SET TIMEOUT (Función, Tiempo(ms))*/

setTimeout(function(){
    clearInterval(intervalo)
},5000);

setTimeout(function(){
    alert("Se acabo el tiempo");
},8000);





