// ## 4. Filtrar películas recomendadas

// Dado un array de películas ({ titulo, puntaje }), quedate solo con las que tienen puntaje mayor a 7.

const peliculas = [
    { titulo: "El señor de los anillos", puntaje: 9 },
    { titulo: "Mulan", puntaje: 5 },
    { titulo: "Jurassic park", puntaje: 10 },
    { titulo: "Buscando a Nemo", puntaje: 7 },
];

const mejoresValoradas = peliculas.filter(p => p.puntaje > 7);

console.log(mejoresValoradas);
