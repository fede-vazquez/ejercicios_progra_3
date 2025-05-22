ChatGPT
Dijiste:
Quiero que hagas 3 niveles de dificultad con 5 ejercicios de programación en cada nivel. Los temas que quiero ver en esos ejercicios son callbacks y closure
ChatGPT dijo:
Claro, aquí tienes una lista de 15 ejercicios de programación distribuidos en 3 niveles de dificultad (básico, intermedio, avanzado), enfocados en los temas de callbacks y closures. Todos los ejercicios están pensados en JavaScript, pero pueden adaptarse fácilmente a otros lenguajes que soporten funciones de orden superior.

🔹 Nivel 1: Básico
Objetivo: Comprender qué son los callbacks y closures, e implementarlos en situaciones simples.

Ejercicio 1: Callback simple
Crea una función saludarUsuario(nombre, callback) que salude al usuario y luego ejecute un callback que muestre un mensaje adicional.

Ejercicio 2: Usando un callback para sumar
Crea una función operar(a, b, callback) que reciba dos números y un callback. El callback deberá definir la operación a realizar (suma, resta, etc.).

Ejercicio 3: Closure contador
Crea una función crearContador() que devuelva una función que incremente un contador interno cada vez que se llame.

Ejercicio 4: Acceso restringido
Crea una función crearAcceso(claveCorrecta) que devuelva otra función que solo permita el acceso si se le pasa la clave correcta.

Ejercicio 5: Mensaje personalizado
Crea una función crearMensajeSaludo(nombre) que devuelva otra función que al ser llamada devuelva un mensaje como “Hola, [nombre], ¡bienvenido de nuevo!”.

🔸 Nivel 2: Intermedio
Objetivo: Aplicar callbacks y closures en estructuras más complejas como arrays, lógica condicional, y gestión de estado.

Ejercicio 6: Manejador de errores
Crea una función ejecutarConManejo(callback, errorCallback) que ejecute callback y, si ocurre una excepción, llame a errorCallback con el error.

Ejercicio 7: Filtro personalizado
Escribe una función filtrarArray(arr, callback) que devuelva un nuevo arreglo con los elementos para los que callback devuelva true.

Ejercicio 8: Multiplicador con closure
Crea una función crearMultiplicador(factor) que devuelva otra función que multiplique su argumento por factor.

Ejercicio 9: Temporizador con callback
Crea una función temporizador(ms, callback) que ejecute el callback luego de ms milisegundos.

Ejercicio 10: Registro con cierre
Crea una función crearLogger() que devuelva una función que almacene mensajes internamente. Otra función debe permitir obtener todos los mensajes logueados.

🔺 Nivel 3: Avanzado
Objetivo: Usar closures para ocultar lógica interna y callbacks para extender funcionalidad en patrones más abstractos.

Ejercicio 11: Event Emitter básico
Crea una función crearEventEmitter() que permita registrar eventos (on), emitir eventos (emit) y remover escuchadores (off), usando closures.

Ejercicio 12: Memoización con closure
Implementa una función memoizar(fn) que retorne una versión de fn que cachee los resultados de llamadas previas.

Ejercicio 13: Secuenciador de funciones
Crea una función ejecutarEnOrden(funciones, callbackFinal) que reciba un array de funciones asíncronas (que usan callback) y las ejecute en orden.

Ejercicio 14: Sistema de autenticación
Crea un closure crearAutenticador(usuario, contraseña) que retorne una función que verifique credenciales y otra para cambiar la contraseña.
