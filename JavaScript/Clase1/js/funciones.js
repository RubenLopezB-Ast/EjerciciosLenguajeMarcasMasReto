//FUNCIONES - > Es un bloque de código que solo se ejecuta cuando es llamado

//FUNCIONES SIN PARÁMETROS

function saludo(){
    console.log("Hola mundo");
}

saludo();
//FUNCIONES CON PARÁMETROS
function operacion(num1, num2){
    let resultado =num1 + num2;
    console.log("Resultado: ", resultado);
}

operacion(23,32);

//FUNCIONES CON RETURN Y SIN PARÁMETROS

function retorno1(){
    let numero = 5;
    return numero;
}

console.log(retorno1());
//FUNCIONES CON RETURN Y CON PARÁMETROSlet nombre = "Antonio";

function retorno2(numero){
    return numero;
}

console.log(retorno2(20));

function testScope(){
    if(tue){
        var x = 10;
        let y = 20;
    }

    console.log(x); // x=10
    console.log(y); // y= ReferenceError y no está definido

}


console.log(a);
var a = 5;

console.log(b);
let b = 10;

var x =1;
var x =2; // Permitido en var

//let y = 1; // Da error estamos nombrando con valores diferentes y
//let y = 2; // Da error estamos nombrando con valores diferentes y