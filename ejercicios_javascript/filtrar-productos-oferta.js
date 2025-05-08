// ## 1. Filtrar productos en oferta y calcular precios finales

// Dado un array de productos ({ nombre, precio, descuento }), quedate solo con los que tengan un descuento mayor a 0. Luego calcular el precio final de cada uno (restando el descuento).

const productos = [
    { nombre: "Laptop", precio: 800000, descuento: 0 },
    { nombre: "Celular", precio: 300000, descuento: 30000 },
    { nombre: "Computadora", precio: 1200000, descuento: 200000 },
    { nombre: "Radio", precio: 30000, descuento: 0 },
];

const productosConDescuento = productos.filter(p => p.descuento > 0);

const productoConPrecioFinal = productosConDescuento.map(p => ({
    nombre: p.nombre,
    precio: p.precio - p.descuento,
}));

console.log(productoConPrecioFinal);
