// Ejercicio 5: Mensaje personalizado
// Crea una función crearMensajeSaludo(nombre) que devuelva otra función que al ser llamada devuelva un mensaje como “Hola, [nombre], ¡bienvenido de nuevo!”.

function crearMensajeSaludo(nombre) {
    function saludo() {
        console.log(`Hola ${nombre}, espero que tenga un lindo día`);
    }

    return saludo;
}

const saludar = crearMensajeSaludo("Fede");

saludar();
