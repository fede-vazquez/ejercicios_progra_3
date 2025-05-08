// ## 1. Filtrar mayores de edad

// Dado un array de objetos con personas ({ nombre, edad }), obtener solo las personas mayores de 18 años.

const personas = [
    { nombre: "Juancito", edad: 15 },
    { nombre: "Pepito jr", edad: 8 },
    { nombre: "Pepito", edad: 28 },
    { nombre: "Pedro", edad: 24 },
];

const mayores = personas.filter(p => p.edad > 18);

console.log(mayores);
