//VARIABLES let + nombre

//VAR / Let se usa siempre let

//varibles numéricas
let numero = 20;

//variables de texto

let palabra = "Palabras";
console.log("Palabra: ", palabra);

//Variables booleanas

let booleana = true;
console.log("Boolena", booleana);

//Variables de tipo Array
let colores = ["Rojo", "Amarillo","Azul"];
console.log("Colores",colores[1]);

//Variables de tipo objeto (Object: propiedad:valor)

let zumo ={
    ingrediente1:"Fresa",
    ingrediente2:"Naranja",
    ingrediente3:"Plátano"
};

console.log("Zumo",zumo.ingrediente1);

//Variables DOM: Modelo de Objetos del Documento
/*El DOM es la estructura de objetos que genera 
el navegador cuando se carga un documento y se pude alterar mediante JS para cambiar dinamincamente los contenidos y aspectos de la página */

let caja = document.querySelector("#caja");
console.log("Caja",caja);

caja.style.width = "200px";
caja.style.height =  "200px";
caja.style.background = "red";

let cajas = document.querySelectorAll(".cajas");
console.log("cajas",cajas);


