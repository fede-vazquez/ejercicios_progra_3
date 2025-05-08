// ## 5. Marcar tareas completadas

// Dado un array de tareas ({ id, descripcion, completada }), devolver un nuevo array donde todas las tareas estén marcadas como completadas (completada: true).

const tareas = [
    {
        id: 1,
        descripcion: "Aprender los fundamentos de JavaScript",
        completada: false,
    },
    {
        id: 2,
        descripcion: "Practicar estructuras de control (if, for, while)",
        completada: false,
    },
    {
        id: 3,
        descripcion: "Crear una función que sume dos números",
        completada: false,
    },
    {
        id: 4,
        descripcion: "Hacer una solicitud fetch a una API pública",
        completada: false,
    },
];

const tareasCompletadas = tareas.map(t => ({ ...t, completada: true }));

console.log(tareasCompletadas);
