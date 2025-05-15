const buscadorEl = document.getElementById("buscador");

const itemsEl = document.querySelectorAll(".nombres li");

const listaEl = document.querySelector(".nombres");

const listaItems = [...itemsEl];

const nombres = listaItems.map(item => item.textContent.toLocaleLowerCase());

buscadorEl.addEventListener("input", () => {
    const palabraBuscada = buscadorEl.value.toLowerCase();

    // profe ------------------------------------
    const filtrados = nombres.filter(nombre => nombre.includes(palabraBuscada));

    listaEl.innerHTML = "";
    filtrados.forEach(nombre => {
        const li = document.createElement("li");
        li.innerText = nombre.replace(nombre[0], nombre[0].toUpperCase());
        listaEl.appendChild(li);
    });

    // mio ------------------------------------
    // nombres.forEach((nombre, index) => {
    //     if (nombre.includes(palabraBuscada) && palabraBuscada != "") {
    //         itemsEl[index].style.border = "2px solid red";
    //     } else {
    //         itemsEl[index].style.border = "none";
    //     }
    // });
});

// debounce <- lo que hacen algunas páginas de hacer peticiones con cierto tiempo de espera.

// productos ------------------------------------
const productos = [
    {
        id: 1,
        titulo: "Mouse",
        descripcion: "Un mouse re piola",
        precio: 1500,
        descuento: 10,
    },
    {
        id: 2,
        titulo: "Teclado",
        descripcion: "Alto teclado",
        precio: 2000,
        descuento: 15,
    },
    {
        id: 3,
        titulo: "Mousepad",
        descripcion: "Mousepad flama",
        precio: 500,
        descuento: 50,
    },
];

const calcularPrecioFinal = (precio, descuento) =>
    precio - (precio * descuento) / 100;

// cuando devolvamos un objeto en un map, es necesario poner => ( {atributos} )

const generarCards = productos =>
    productos.map(elProducto => {
        const precioFinal = calcularPrecioFinal(
            elProducto.precio,
            elProducto.descuento
        );

        const card = document.createElement("div");
        card.innerHTML = `
    <h3>${elProducto.titulo}</h3>
    <p>${elProducto.descripcion}</p>
    <span>Precio: $${elProducto.precio}</span>
    <span>Descuento: %${elProducto.descuento}</span>
    <span>PrecioFinal: $${precioFinal}</span>
    `;

        return card;
    });

const contenedorEl = document.getElementById("product-container");

const cards = generarCards(productos);

cards.forEach(card => {
    contenedorEl.appendChild(card);
});

// tarea -- aplicarle estilos.
// (opcional) aplicar estilos desde javascript.
