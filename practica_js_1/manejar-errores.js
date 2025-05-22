// Ejercicio 6: Manejador de errores
// Crea una función ejecutarConManejo(callback, errorCallback) que ejecute callback y, si ocurre una excepción, llame a errorCallback con el error.

function ejecutarConManejo(cb, errorCb) {
    try {
        cb();
    } catch (err) {
        errorCb(err);
    }
}

ejecutarConManejo(
    () => {
        throw new Error("Algo salio mal");
    },
    error => console.error("error manejado: ", error.message)
);
