// Ejercicio 2: Usando un callback para sumar
// Crea una función operar(a, b, callback) que reciba dos números y un callback. El callback deberá definir la operación a realizar (suma, resta, etc.).

function restar(a, b) {
    return a - b;
}

function operar(a, b, cb) {
    return cb(a, b);
}

console.log(operar(3, 2, restar));
