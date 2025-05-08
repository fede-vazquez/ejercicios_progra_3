// ## 3. Agrupar personas por ciudad

// Dado un array de personas ({ nombre, ciudad }), escribí una función que devuelva un objeto donde las claves sean las ciudades y los valores arrays de nombres de personas que viven en cada ciudad.

const personas = [
    { nombre: "Ana Martínez", ciudad: "Madrid" },
    { nombre: "Luis Gómez", ciudad: "Barcelona" },
    { nombre: "Clara Ruiz", ciudad: "Madrid" },
    { nombre: "Jordi Soler", ciudad: "Barcelona" },
    { nombre: "Marta López", ciudad: "Madrid" },
    { nombre: "Carlos Ortega", ciudad: "Barcelona" },
    { nombre: "Elena Torres", ciudad: "Madrid" },
];

function agruparPorAtributo(personas) {
    const resultado = {};

    personas.forEach(persona => {
        const atributo = persona.ciudad.toLowerCase();
        if (!resultado[atributo]) {
            resultado[atributo] = [persona.nombre];
        } else {
            resultado[atributo].push(persona.nombre);
        }
    });

    return resultado;
}

const personasAgrupadas = agruparPorAtributo(personas);

console.log(personasAgrupadas);
