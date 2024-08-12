function randomColorNumber () {
    return Math.random() * 255
}

let contenedor = document.querySelector("#contenedor");


//Medidas de cada cuadrito: 56x56

for (let i = 0; i < 256; i++){
    let cuadrito = document.createElement("div");
    cuadrito.classList.add("cuadrito");
    contenedor.appendChild(cuadrito);
}