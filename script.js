let contenedor = document.querySelector("#contenedor");
let cambiador = document.querySelector("#cambiador");

function randomColorNumber () {
    return Math.floor(Math.random() * 256 + 0);
}

function addCuadrito (argContenedor) {
    let cuadrito = document.createElement("div");
    cuadrito.classList.add("cuadrito");
    cuadrito.addEventListener("mouseover", () => {
        const colorRandom = [];
        for (let k = 0; k < 3; k++){
            colorRandom[k] = randomColorNumber();
        }
        cuadrito.style.backgroundColor = `rgb(${colorRandom.toString()})`;
    })
    return argContenedor.appendChild(cuadrito)
}

//Medidas de cada cuadrito: 56x56

for (let i = 0; i < 256; i++){
    addCuadrito(contenedor);
}
cambiador.addEventListener("click", () => {
    let numCuadritos = parseInt(prompt("¿Cuántos cuadritos quieres por fila? (No puede ser más de 100)"));
    if (numCuadritos > 100 || !numCuadritos){
        alert("Respuesta no válida.");
    }

    else{
        contenedor.textContent = '';
        
    }
    
    
})