let caja = document.querySelector("#caja");
let boton = document.querySelector("#boton");

boton.addEventListener("click", cambiarColor);

function cambiarColor(){
    if(caja.style.backgroundColor==="blue"){
        caja.style.backgroundColor = "red";
    }else{
        caja.style.backgroundColor = "blue";
    }

}