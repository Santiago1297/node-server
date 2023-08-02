const readline = require('readline');

// Se crea una interfaz para leer y escribir en la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Se crea un array para almacenar las tareas
const tasks = [];

// Función para mostrar la lista de tareas
function showTasks() {
  if (tasks.length === 0) {
    console.log('La lista de tareas está vacía.');
  } else {
    console.log('Lista de tareas:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.estado}] ${task.descripcion}`);
    });
  }
  rl.prompt();
}

// Función para añadir una nueva tarea
function addTask() {
  rl.question('Indica la descripción de la nueva tarea: ', (descripcion) => {
    tasks.push({ descripcion, estado: 'pendiente' });
    console.log('Tarea añadida correctamente.');
    showTasks();
  });
}

// Función para marcar una tarea como completada
function completeTask() {
  showTasks();
  rl.question('Indica el número de tarea que quieres marcar como completada: ', (numTarea) => {
    const index = parseInt(numTarea) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].estado = 'completada';
      console.log('Tarea marcada como completada correctamente.');
    } else {
      console.log('El número de tarea es inválido.');
    }
    showTasks();
  });
}

// Función para eliminar una tarea
function deleteTask() {
  showTasks();
  rl.question('Indica el número de tarea que quieres eliminar: ', (numTarea) => {
    const index = parseInt(numTarea) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log('Tarea eliminada correctamente.');
    } else {
      console.log('El número de tarea es inválido.');
    }
    showTasks();
  });
}

// Función para mostrar las opciones disponibles
function showMenu() {
  console.log(`
    Opciones:
    1. Mostrar lista de tareas
    2. Añadir nueva tarea
    3. Marcar tarea como completada
    4. Eliminar tarea
    5. Salir
  `);
  rl.prompt();
}

// Evento que se da cuando se introduce una línea de texto en la consola
rl.on('line', (input) => {
  const option = parseInt(input);
  switch (option) {
    case 1:
      showTasks();
      break;
    case 2:
      addTask();
      break;
    case 3:
      completeTask();
      break;
    case 4:
      deleteTask();
      break;
    case 5:
      rl.close();
      break;
    default:
      console.log('Opción inválida.');
      showMenu();
      break;
  }
});

// Se muestra el menú inicial
showMenu();
