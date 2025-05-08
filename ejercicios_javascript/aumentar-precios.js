// ## 3. Aumentar los precios un 10%
// Dado un array de productos, devolver un nuevo array donde todos los productos tengan el precio aumentado en un 10%.

const productos = [
    { id: 1, nombre: "Laptop", precio: 800000 },
    { id: 2, nombre: "Celular", precio: 300000 },
    { id: 3, nombre: "Computadora", precio: 1200000 },
    { id: 4, nombre: "Radio", precio: 30000 },
];

const productosAumentados = productos.map(p => {
    return {
        ...p,
        precio: p.precio + p.precio * 0.1,
    };
});

console.log(productosAumentados);
