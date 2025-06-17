//CONDICIONALES

let a = 5;
let b = 10;

//Escriba un programa en JS el cual tenga que calcular si a es mayor que b, o si b es
// mayor que a, o si a y b son iguales.


//= asignación
//== comparación debil numero y estring se convierten a lo mismo y luego se compraran
//también funciona con boleanos (hay que intentar evitar el doble igual)
//=== comparación fuerte o estricta se compraran solo entre mismos datos tiene 
//que ser exactamente igual


//> mayor
//< menor
//<= menor o igual
//>= mayor o igual 
//== igual
//=== estrictamente igual
//!= diferente
//!== estrictamente diferente
//&& and
//|| or

if(a>b){
    console.log("a es mayor que b");
}else if(a === b){
    console.log("a es lo mismo que b");
}else{
    console.log("a no es lo mismo que b, y a es menor que b");
}


let dia = "Lunes";

switch(dia){
    case "Lunes":
        console.log("vosy a estudiar JS");
        break;
    case "Martes":
        console.log("Voy a estudiar Java");
        break;
    case "Miercoles":
        console.log("Voy a estudiar SQL");
        break;
    default:
        console.log("Voy a descansar");
}