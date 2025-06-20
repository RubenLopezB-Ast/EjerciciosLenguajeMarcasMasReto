let numeroAleatorio = document.querySelector("#aleatorio");
let num = 0;

/*
El objeto Math permite realizar tareas matemáticas en los números 
Math.random = Devueleve un número aleatorio entre 0 (inclusive) y 1 (excluido)
Math.floor = Redondea al número menor del decimal
Math.ceil = Redondea al número mayor del decimal
Math.round = Devuelve el valor de x redondeado a su numero entero más próximo. 
*/

num = (Math.random()*96)+5;
numeroAleatorio.innerHTML = num;
