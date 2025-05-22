// Ejercicio 1: Callback simple
// Crea una función saludarUsuario(nombre, callback) que salude al usuario y luego ejecute un callback que muestre un mensaje adicional.

function mensaje() {
    console.log("Bienvenido");
}

function saludarUsuario(nombre, cb) {
    console.log(`Hola ${nombre}`);
    cb();
}

saludarUsuario("Fede", mensaje);
