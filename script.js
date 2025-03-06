let boton = document.getElementById("boton");

boton.addEventListener('click', cambiar);

function cambiar(){
    let div = document.getElementById("div");
    div.style.backgroundColor="red";
}
