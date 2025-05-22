// Ejercicio 8: Multiplicador con closure
// Crea una función crearMultiplicador(factor) que devuelva otra función que multiplique su argumento por factor.

function crearMultiplicador(factor) {
    function multiplicador(n) {
        return n * factor;
    }

    return multiplicador;
}

const multiplicarPorDos = crearMultiplicador(2);

console.log(multiplicarPorDos(2));
console.log(multiplicarPorDos(5));
