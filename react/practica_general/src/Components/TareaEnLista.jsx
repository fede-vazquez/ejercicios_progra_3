function TareaEnLista({ tarea, handleRemoveTask, handleChangeCompleted }) {
    return (
        <li>
            {tarea.nombre} {tarea.isCompleted && <h1>fiumba</h1>}
            <div>
                <button onClick={() => handleRemoveTask(tarea.nombre)}>
                    Eliminar
                </button>
                <button onClick={() => handleChangeCompleted(tarea.nombre)}>
                    Completar
                </button>
            </div>
        </li>
    );
}

export default TareaEnLista;
