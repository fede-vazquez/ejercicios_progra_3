function TareaEnLista({ tarea, handleRemoveTask, handleChangeCompleted }) {
    return (
        <li className={tarea.isCompleted ? "completada" : ""}>
            <span>{tarea.nombre}</span>
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
