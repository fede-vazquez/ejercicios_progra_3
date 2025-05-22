// Ejercicio 4: Acceso restringido
// Crea una función crearAcceso(claveCorrecta) que devuelva otra función que solo permita el acceso si se le pasa la clave correcta.

function crearAcceso(claveCorrecta) {
    function validacion(claveDada) {
        if (claveDada === claveCorrecta) {
            console.log("Acceso permitido");
        } else {
            console.log("Acceso denegado");
        }
    }

    return validacion;
}

const acceso = crearAcceso("Pepito123");

acceso("p");
acceso("pepito123");
acceso("Pepito123");
