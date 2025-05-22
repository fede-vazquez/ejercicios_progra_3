// Ejercicio 7: Filtro personalizado
// Escribe una función filtrarArray(arr, callback) que devuelva un nuevo arreglo con los elementos para los que callback devuelva true.

function filtrarArray(arr, cb) {
    const resultado = [];

    for (const elemento of arr) {
        if (cb(elemento)) resultado.push(elemento);
    }

    return resultado;
}

function filtroMayorQueCero(elemento) {
    return elemento > 0;
}

const nuevoArray = filtrarArray(
    [-1, -2, -3, -4, 1, 2, 3, 4, 5, 6, 7],
    filtroMayorQueCero
);

console.log(nuevoArray);
