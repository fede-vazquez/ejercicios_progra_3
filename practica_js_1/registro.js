// Ejercicio 10: Registro con cierre
// Crea una función crearLogger() que devuelva una función que almacene mensajes internamente. Otra función debe permitir obtener todos los mensajes logueados.

function crearLogger() {
    const mensajes = [];

    function escribir(mensaje) {
        mensajes.push(mensaje);
    }

    const leerMensajes = () => console.log(mensajes);

    return { escribir, leerMensajes };
}

const { escribir, leerMensajes } = crearLogger();

escribir("Hola esto es un log");
escribir("Esto es otro log");

leerMensajes();

document.querySelector("a").removeEventListener("click");
