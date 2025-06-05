const KEY = "tasks";
//1. Obtener los elementos del dom
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

//2. Agregar un evento al formulario, para saber cuando se envían esos datos
form.addEventListener("submit", e => {
    e.preventDefault(); //Previene el comportamiento por defecto
    const taskText = input.value.trim();
    if (taskText === "") return;

    createLiElement({ text: taskText, completed: false });

    //8. limpiar el input
    input.value = "";

    //9. agregar tarea al localStorage
    updateLocalStorage();
    // agregarTareaLocalStorage(taskText); // Mio
});

function updateLocalStorage() {
    let tasks = [];

    const taskList = [...list.children];

    taskList.forEach(li => {
        const completed = li.classList.contains("completed");
        const text = li.firstChild.textContent;

        tasks.push({ text, completed });
    });

    localStorage.setItem(KEY, JSON.stringify(tasks));
}

// el ?? solo verifica si es null o undefined.
const tasksLS = JSON.parse(localStorage.getItem(KEY)) ?? [];

if (tasksLS.length > 0) {
    // inferido de datos, pasa el dato por atrás.
    // en este caso es lo mismo que (el)=>{createLiElement(el)}
    tasksLS.forEach(createLiElement);
}

function createLiElement({ text, completed }) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${text}</span>`;

    li.oncontextmenu = e => {
        e.preventDefault();
        li.classList.toggle("completed");
        updateLocalStorage();
    };

    if (completed) {
        li.classList.add("completed");
    } else {
        li.classList.remove("completed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Eliminar";

    deleteBtn.addEventListener("click", () => {
        list.removeChild(li);
        updateLocalStorage();
    });

    li.appendChild(deleteBtn);

    list.appendChild(li);
}

// --------- Mio ---------

/* function agregarTareaLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem(KEY)) || [];
    tasks.push({ name: taskText, isCompleted: false });

    localStorage.setItem(KEY, JSON.stringify(tasks));
}

function cargarTareasLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem(KEY)) || [];
    if (!tasks) return;

    for (const task of tasks) {
        const li = document.createElement("li");
        li.textContent = task.name;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";

        deleteBtn.addEventListener("click", () => {
            list.removeChild(li);
            deleteTareaLocalStorage(task.name);
        });

        li.appendChild(deleteBtn);

        list.appendChild(li);
    }
}

cargarTareasLocalStorage();

function deleteTareaLocalStorage(tasksToDelete) {
    let tasks = JSON.parse(localStorage.getItem(KEY)) || [];

    if (!tasks) return;

    tasks = tasks.filter(t => {
        return t.name != tasksToDelete;
    });

    localStorage.setItem(KEY, JSON.stringify(tasks));
} */

/*
function cargar() {
    let tasks = JSON.parse(localStorage.getItem(KEY)) || [];

    if (!tasks) return;

    for (const task of tasks) {
        displayTask(task);
    }
}

cargar();
 */
