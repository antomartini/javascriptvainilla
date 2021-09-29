var productos = [
    { nombre: "harina", precio: 35 },
    { nombre: "pan", precio: 25 },
    { nombre: "papa", precio: 52 },
    { nombre: "palta", precio: 55 },
    { nombre: "fideos", precio: 85 },
    { nombre: "aceite", precio: 350 },
    { nombre: "sopa", precio: 86 },
    { nombre: "mermelada", precio: 108 },
    { nombre: "porotos", precio: 69 },
    { nombre: "lentejas", precio: 85 },
    { nombre: "mandarina", precio: 43 },
    { nombre: "banana", precio: 79 },
    { nombre: "leche de almendras", precio: 145 },
    { nombre: "papel higiénico", precio: 147 },
    { nombre: "lavandina", precio: 55 },
    { nombre: "alcohol en gel", precio: 123 },
    { nombre: "shampoo", precio: 400 },
    { nombre: "arroz", precio: 66 },
    { nombre: "harina", precio: 35 },
    { nombre: "salsa de tomate", precio: 35 }
];

let carrito = [];

function mostrarProductos() {
    let fila1 = document.createElement("tr");

    //Boton Comprar
    let buttonComprar = document.createElement("button")
    buttonComprar.type = 'button';
    buttonComprar.innerText = 'Comprar'
    buttonComprar.addEventListener("click", () => comprarProductos());

    for (let i = 0; i < productos.length; i++) {
        // Creaciones de elementos / nodos en el DOM
        // Fila de la tabla
        let fila = document.createElement("tr");
        // Columnas de la tabla
        let columnaproducto = document.createElement("td");
        let columnaprecio = document.createElement("td");
        let columnaboton = document.createElement("td");
        //Boton Agregar
        let button = document.createElement("button")
        button.type = 'button';
        button.innerText = 'Agregar'
        button.addEventListener("click", () => {
            button.innerText = 'Agregado',
            carrito.push({producto: productos[i].nombre, precio: productos[i].precio });
        });
        // Agregar las columnas a la fila
        fila.appendChild(columnaproducto);
        fila.appendChild(columnaprecio);
        fila.appendChild(columnaboton);
        // Definir precio y producto a partir del array
        let producto = document.createTextNode(productos[i].nombre);
        let precio = document.createTextNode("$" + productos[i].precio);
        //Asociar cada valor con su columna respectiva
        columnaprecio.appendChild(precio);
        columnaproducto.appendChild(producto);
        columnaboton.appendChild(button);
        // Unir a la tabla
        document.getElementById("listadeproductos").appendChild(fila);
    }

    document.getElementById("listadeproductos").appendChild(buttonComprar);
}


function comprarProductos() {
    let sumaTotal = 0;
    let tabladecompras = document.createElement("table");
    let thtabla = document.createElement("th");
    let thtexto = document.createTextNode("Productos a comprar:");
    thtabla.appendChild(thtexto);
    tabladecompras.appendChild(thtabla);
    document.body.appendChild(tabladecompras);
    for (let i = 0; i < carrito.length; i++) {
        sumaTotal += carrito[i].precio;
        // Creaciones de elementos / nodos en el DOM
        // Fila de la tabla
        let fila = document.createElement("tr");
        // Columnas de la tabla
        let columnaproducto = document.createElement("td");
        let columnaprecio = document.createElement("td");
        // Agregar las columnas a la fila
        fila.appendChild(columnaproducto);
        fila.appendChild(columnaprecio);
        // Definir precio y producto a partir del array
        let producto = document.createTextNode(carrito[i].producto);
        let precio = document.createTextNode(carrito[i].precio);
        //Asociar cada valor con su columna respectiva
        columnaprecio.appendChild(precio);
        columnaproducto.appendChild(producto);
        // Unir a la tabla
        tabladecompras.appendChild(fila);
        // document.getElementById("carritodeproductos").appendChild(fila);
    }

    let importeTotal = document.createElement("h3");
    let precio = document.createTextNode("El importe total es de: $" + sumaTotal);
    importeTotal.appendChild(precio);
    document.body.appendChild(importeTotal);
    carrito = [];
}