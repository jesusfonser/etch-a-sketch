let contenedor = document.querySelector("#contenedor");
let cambiador = document.querySelector("#cambiador");

function randomColorNumber () {
    return Math.floor(Math.random() * 256 + 0);
}

function addCuadrito (argContenedor, interruptor) {
    let cuadrito = document.createElement("div");
    cuadrito.classList.add("cuadrito");
    cuadrito.addEventListener("mouseover", () => {
        const colorRandom = [];
        for (let k = 0; k < 3; k++){
            colorRandom[k] = randomColorNumber();
        }
        cuadrito.style.backgroundColor = `rgb(${colorRandom.toString()})`;
    })
    if (interruptor){
        cuadrito.style.height = "auto";
        cuadrito.style.width = "auto";
        cuadrito.style.flex = "1";
    }
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
        contenedor.style.flexDirection = "column"
        for (let i = 0; i < numCuadritos; i++){
            console.log("buenas");
            let miniCont = document.createElement("div");
            miniCont.classList.add("miniCont");
            contenedor.appendChild(miniCont);
            for (let k = 0; k < numCuadritos; k++){
                console.log("que tal");
                addCuadrito(miniCont, true);
            }
        }
    }
    
    
})