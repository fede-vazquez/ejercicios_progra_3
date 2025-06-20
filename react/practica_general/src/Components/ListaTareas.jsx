// Lista de tareas agregar y eliminar tareas

import { useState } from "react";
import TareaEnLista from "./TareaEnLista";

function ListaTareas() {
    const [tareas, setTareas] = useState([]);
    const [nombreTarea, setNombreTarea] = useState("");

    const handleChange = e => setNombreTarea(e.target.value);

    const handleAddTask = () => {
        if (nombreTarea.trim()) {
            setTareas(prev => [
                ...prev,
                { nombre: nombreTarea, isCompleted: false },
            ]);
            setNombreTarea("");
        }
    };

    const handleRemoveTask = tareaParaEliminar => {
        setTareas(prev => prev.filter(t => t.nombre !== tareaParaEliminar));
    };

    // Cuando uso la callback en el setTareas no funca.

    const handleChangeCompleted = tareaParaCambiar => {
        const copiaTareas = [...tareas];
        const tarea = copiaTareas.find(t => t.nombre === tareaParaCambiar);

        tarea.isCompleted = !tarea.isCompleted;

        setTareas(copiaTareas);
    };

    return (
        <section>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="nombreTarea">Escribe una tarea</label>
                <input
                    type="text"
                    id="nombreTarea"
                    value={nombreTarea}
                    onChange={handleChange}
                />

                <button onClick={handleAddTask}>Agregar tarea</button>
            </form>

            {tareas.length ? (
                <ul>
                    {tareas.map(t => (
                        <TareaEnLista
                            key={t}
                            tarea={t}
                            handleRemoveTask={handleRemoveTask}
                            handleChangeCompleted={handleChangeCompleted}
                        />
                    ))}
                </ul>
            ) : (
                <h2>Todavía no hay tareas.</h2>
            )}
        </section>
    );
}

export default ListaTareas;
