// Ejercicio 3: Closure contador
// Crea una función crearContador() que devuelva una función que incremente un contador interno cada vez que se llame.

function crearContador() {
    let n = 0;

    function sumarContador() {
        n++;
        console.log(n);
        return;
    }

    return sumarContador;
}

const sumarContador = crearContador();

sumarContador();
sumarContador();
