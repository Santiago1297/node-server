# Primer Script (app.js) - Gestor de Tareas por Consola:
Este primer script es un programa de línea de comandos que actúa como un gestor de tareas. Sus principales características y funciones son las siguientes:

**-Interfaz de Línea de Comandos:** Utiliza el módulo readline de Node.js para crear una interfaz que permite al usuario interactuar con el programa mediante comandos de texto.

**-Almacenamiento de Tareas:** Mantiene una lista de tareas en memoria, donde cada tarea tiene una descripción y un estado (pendiente o completada).

## Funciones Principales:
**-showTasks():** Muestra la lista de tareas en la consola.
**-addTask():** Permite al usuario agregar una nueva tarea a la lista.
**-completeTask():** Permite al usuario marcar una tarea como completada.
**-deleteTask():** Permite al usuario eliminar una tarea de la lista.
**-Menú de Opciones:** Proporciona un menú que permite al usuario seleccionar una de las opciones anteriores.
**-Ciclo Principal:** Ejecuta un bucle principal que muestra el menú de opciones y espera la entrada del usuario para realizar las acciones correspondientes.
**-Salida y Cierre:** El programa se puede cerrar seleccionando la opción "Salir". Además, se puede mostrar un mensaje de error si se ingresa una opción inválida.

# Segundo Script (app2.js) - Servidor HTTP de Tareas:
Este segundo script es un servidor HTTP que expone una API REST para gestionar una lista de tareas. Sus principales características y funciones son las siguientes:

**-Servidor HTTP:** Utiliza el módulo http de Node.js para crear un servidor web que escucha en el puerto 3000.
**-Lista de Tareas:** Almacena una lista de tareas en formato JSON. Cada tarea tiene un identificador único, un título, una descripción y un estado de completado.
**-Rutas y Métodos HTTP:**
**--/tasks (GET):** Permite a los usuarios obtener la lista de tareas en formato JSON.
**-Respuestas HTTP:** El servidor responde con JSON que contiene la lista de tareas cuando se realiza una solicitud GET válida a la ruta /tasks.
**-Manejo de Errores:** Si se intenta acceder a una ruta no definida, el servidor responde con un código de estado 404 y un mensaje de "Ruta no encontrada".
**-Escucha en un Puerto Específico:** El servidor escucha en el puerto 3000 y muestra un mensaje en la consola cuando se inicia.

## Funcionalidades Importantes:

**-Obtener Tareas:** Los usuarios pueden hacer una solicitud GET a /tasks para obtener la lista de tareas actualizada.

**Uso por Parte de los Usuarios:**
**-Consulta de Tareas:** Los usuarios pueden utilizar este servidor para consultar la lista de tareas almacenadas.


Ambos scripts tienen funcionalidades relacionadas con la gestión de tareas, pero se utilizan en diferentes contextos. El primer script se ejecuta en la consola y proporciona una interfaz interactiva para administrar tareas localmente, mientras que el segundo script actúa como un servidor web que permite a los usuarios acceder y consultar una lista de tareas a través de solicitudes HTTP. Los usuarios pueden usar el primer script para administrar sus propias tareas locales, mientras que el segundo script podría ser utilizado por aplicaciones cliente para acceder y mostrar tareas almacenadas en un servidor central.