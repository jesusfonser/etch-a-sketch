function randomColorNumber () {
    return Math.floor(Math.random() * 256 + 0);
}

let contenedor = document.querySelector("#contenedor");


//Medidas de cada cuadrito: 56x56

for (let i = 0; i < 256; i++){
    let cuadrito = document.createElement("div");
    cuadrito.classList.add("cuadrito");
    cuadrito.addEventListener("mouseover", () => {
        const colorRandom = [];
        for (let k = 0; k < 3; k++){
            colorRandom[k] = randomColorNumber();
        }
        cuadrito.style.backgroundColor = `rgb(${colorRandom.toString()})`;

    })
    contenedor.appendChild(cuadrito);
}