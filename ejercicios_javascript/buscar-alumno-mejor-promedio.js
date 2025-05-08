// ## 2. Buscar al estudiante con mejor promedio

// Dado un array de estudiantes ({ nombre, notas: [números] }), calculá el promedio de cada uno y obtené al estudiante con el promedio más alto.

const estudiantes = [
    { nombre: "Ana López", notas: [8, 9, 7, 8, 9] },
    { nombre: "Carlos Pérez", notas: [6, 7, 8, 7, 6] },
    { nombre: "Lucía Gómez", notas: [9, 9, 9, 8, 9] },
    { nombre: "Miguel Torres", notas: [5, 6, 6, 7, 5] },
    { nombre: "Sofía Ramírez", notas: [7, 8, 7, 8, 7] },
];

let estudianteMejorPromedio = {};
let mejorPromedio = 0;

estudiantes.forEach(e => {
    const totalNotas = e.notas.reduce((prev, act) => prev + act);
    const promedio = totalNotas / e.notas.length;

    if (promedio > mejorPromedio) {
        estudianteMejorPromedio = e;
        mejorPromedio = promedio;
    }
});

console.log(estudianteMejorPromedio);
