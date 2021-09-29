let meses = [
    { mes: "Enero", dias: 31 },
    { mes: "Febrero", dias: 28 },
    { mes: "Marzo", dias: 31 },
    { mes: "Abril", dias: 30 },
    { mes: "Mayo", dias: 31 },
    { mes: "Junio", dias: 30 },
    { mes: "Julio", dias: 31 },
    { mes: "Agosto", dias: 31 },
    { mes: "Septiembre", dias: 30 },
    { mes: "Octubre", dias: 31 },
    { mes: "Noviembre", dias: 30 },
    { mes: "Diciembre", dias: 31 },
];

function mostrarMes(mes, dias) {
    console.log("hola");
    console.log(mes + " " + dias);
    // Creaciones de elementos / nodos en el DOM
    // Fila de la tabla
    let fila = document.createElement("tr");
    // Columnas de la tabla
    let columnames = document.createElement("td");
    let columnadias = document.createElement("td");
    // Agregar las columnas a la fila
    fila.appendChild(columnames);
    fila.appendChild(columnadias);
    // Definir mes y dia a partir del array
    let mess = document.createTextNode(mes);
    let diass = document.createTextNode(dias);
    //Asociar cada valor con su columna respectiva
    columnames.appendChild(mess);
    columnadias.appendChild(diass);
    // Unir a la tabla
    document.getElementById("tablademeses").appendChild(fila);
}


let index = 0;
let timer = 2000;
function mostrarMeses() {
    for (let i = 0; i < meses.length; i++) {
        setTimeout(() => mostrarMes(meses[i].mes, meses[i].dias), timer);
        timer += 1000;
    }
}




