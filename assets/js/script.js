let listaDeGastos = [];
let guardar = document.getElementById("guardarCambios");
guardar.style.display = "none";

function clickBoton() {
    let nombre = document.getElementById("nombreGasto").value;
    let valor = Number(document.getElementById("valorGasto").value);
    let descripcion = document.getElementById("descripcionGasto").value;
    valor = valor.toFixed(2);

    if (nombre == "" || valor == 0) {
        alert("Debes llenar todos los campos");
        return;
    }if (valor > 150) {
        alert("Alerta el gasto supera los 150 USD");
        
    }

    let gasto = [nombre, valor, descripcion];
    listaDeGastos.push(gasto);
    console.log(listaDeGastos);
    actualizarListaDeGastos();


}

function actualizarListaDeGastos() {
    let listaElementos = document.getElementById("listaDeGastos");
    let totalDeGastos = document.getElementById("totalGastos");
    let htmlLista = '';
    let total = 0;

    listaDeGastos.forEach((elemento, posicion) => {
        htmlLista += `<li>
                            <span class="gastosSpan">Gasto: ${elemento[0]} - Valor: ${elemento[1]} US$</span>
                           
                            <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                            <button onclick="editarGasto(${posicion});">Editar</button>
                        
                    </li> <p class="descipcionGasto">Descripción: ${elemento[2]}</p>
                    `;
        total += Number(elemento[1]);

    });
    totalDeGastos.innerHTML = total;  
    listaElementos.innerHTML = htmlLista;
    limpiar();
}

function limpiar() {
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";
    document.getElementById("descripcionGasto").value = "";
}

function eliminarGasto(posicion) {
    console.log(posicion);
    listaDeGastos.splice(posicion, 1);
    actualizarListaDeGastos();
}

function editarGasto(posicion) {
    document.getElementById("nombreGasto").value = listaDeGastos[posicion][0];
    document.getElementById("valorGasto").value = listaDeGastos[posicion][1];
    document.getElementById("descripcionGasto").value = listaDeGastos[posicion][2];

    document.getElementById("guardarCambios").setAttribute("data-posicion", posicion);
    let guardar = document.getElementById("botonFormulario");
    guardar.style.display = "none";
    let boton = document.getElementById("guardarCambios");
    boton.style.display = "block";
    
}


function guardarCambios() {

    let posicion = document.getElementById("guardarCambios").getAttribute("data-posicion");
    let nuevoNombre = document.getElementById("nombreGasto").value;
    let nuevoValor = Number(document.getElementById("valorGasto").value).toFixed(2);
    let nuevoDescripcion = document.getElementById("descripcionGasto").value;

    
    if (nuevoNombre == "" || nuevoNombre == null) {
        alert("Debe llenar el campo nombre");
        return;
    } 
    if (nuevoValor == 0 || nuevoValor == null) {
        alert("El valor no puede ser 0");
        return;
    } 
    if (nuevoDescripcion == "" || nuevoDescripcion == null) {
        alert("Debe llenar el campo descripcion");
        return;
    }

   
    listaDeGastos[posicion] = [nuevoNombre, nuevoValor, nuevoDescripcion];
    actualizarListaDeGastos();

    let guardar = document.getElementById("botonFormulario");
    guardar.style.display = "block";
    let boton = document.getElementById("guardarCambios");
    boton.style.display = "none";
   
    limpiar();
    document.getElementById("guardarCambios").removeAttribute("data-posicion");
}
