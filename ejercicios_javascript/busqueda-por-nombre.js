// ## 2. Buscar un producto por nombre

// Dado un array de productos ({ id, nombre, precio }), obtener el producto que tenga la categoría "Laptop"

const productos = [
    { id: 1, categoria: "Laptop", precio: 800000 },
    { id: 2, categoria: "Celular", precio: 300000 },
    { id: 3, categoria: "Computadora", precio: 1200000 },
    { id: 4, categoria: "Radio", precio: 30000 },
];

const productoEncontrado = productos.find(
    p => p.categoria.toLowerCase() == "laptop"
);

console.log(productoEncontrado);
