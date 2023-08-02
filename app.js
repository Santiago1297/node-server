const readline = require("readline");

// Se crea una interfaz para leer y escribir en la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Se crea un array para almacenar las tareas
const tasks = [];

// /// Usando el método Then()

// // Función para mostrar la lista de tareas
// function showTasks() {
//   return new Promise((resolve) => {
//     if (tasks.length === 0) {
//       console.log("La lista de tareas está vacía.");
//     } else {
//       console.log("Lista de tareas:");
//       tasks.forEach((task, index) => {
//         console.log(`${index + 1}. [${task.estado}] ${task.descripcion}`);
//       });
//     }
//     resolve();
//   });
// }

// // Función para añadir una nueva tarea
// function addTask() {
//   return new Promise((resolve) => {
//     rl.question("Indica la descripción de la nueva tarea: ", (descripcion) => {
//       tasks.push({ descripcion, estado: "pendiente" });
//       console.log("Tarea añadida correctamente.");
//       resolve();
//     });
//   });
// }

// // Función para marcar una tarea como completada
// function completeTask() {
//   return new Promise((resolve) => {
//     showTasks().then(() => {
//       rl.question(
//         "Indica el número de tarea que quieres marcar como completada: ",
//         (numTarea) => {
//           const index = parseInt(numTarea) - 1;
//           if (index >= 0 && index < tasks.length) {
//             tasks[index].estado = "completada";
//             console.log("Tarea marcada como completada correctamente.");
//           } else {
//             console.log("El número de tarea es inválido.");
//           }
//           resolve();
//         }
//       );
//     });
//   });
// }

// // Función para eliminar una tarea
// function deleteTask() {
//   return new Promise((resolve) => {
//     showTasks().then(() => {
//       rl.question(
//         "Indica el número de tarea que quieres eliminar: ",
//         (numTarea) => {
//           const index = parseInt(numTarea) - 1;
//           if (index >= 0 && index < tasks.length) {
//             tasks.splice(index, 1);
//             console.log("Tarea eliminada correctamente.");
//           } else {
//             console.log("El número de tarea es inválido.");
//           }
//           resolve();
//         }
//       );
//     });
//   });
// }

// // Función para mostrar las opciones disponibles
// function showMenu() {
//   return new Promise((resolve) => {
//     console.log(`
//     Opciones:
//     1. Mostrar lista de tareas
//     2. Añadir nueva tarea
//     3. Marcar tarea como completada
//     4. Eliminar tarea
//     5. Salir
//   `);
//     resolve();
//   });
// }

// // Evento que se da cuando se introduce una línea de texto en la consola
// rl.on("line", (input) => {
//   const option = parseInt(input);
//   switch (option) {
//     case 1:
//       showTasks().then(showMenu);
//       break;
//     case 2:
//       addTask().then(showMenu);
//       break;
//     case 3:
//       completeTask().then(showMenu);
//       break;
//     case 4:
//       deleteTask().then(showMenu);
//       break;
//     case 5:
//       rl.close();
//       break;
//     default:
//       console.log("Opción inválida.");
//       showMenu();
//       break;
//   }
// });

// // Se muestra el menú inicial
// showMenu();


/// Usando async y await

// Función para mostrar la lista de tareas
function showTasks() {
  return new Promise((resolve) => {
    if (tasks.length === 0) {
      console.log('La lista de tareas está vacía.');
    } else {
      console.log('Lista de tareas:');
      tasks.forEach((task, index) => {
        console.log(`${index + 1}. [${task.estado}] ${task.descripcion}`);
      });
    }
    resolve();
  });
}


function getInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      resolve(input);
    });
  });
}

// Función para añadir una nueva tarea
async function addTask() {
  const descripcion = await getInput('Indica la descripción de la nueva tarea: ');
  tasks.push({ descripcion, estado: 'pendiente' });
  console.log('Tarea añadida correctamente.');
}

// Función para marcar una tarea como completada
async function completeTask() {
  await showTasks();
  const numTarea = await getInput('Indica el número de tarea que quieres marcar como completada: ');
  const index = parseInt(numTarea) - 1;
  if (index >= 0 && index < tasks.length) {
    tasks[index].estado = 'completada';
    console.log('Tarea marcada como completada correctamente.');
  } else {
    console.log('El número de tarea es inválido.');
  }
}

// Función para eliminar una tarea
async function deleteTask() {
  await showTasks();
  const numTarea = await getInput('Indica el número de tarea que quieres eliminar: ');
  const index = parseInt(numTarea) - 1;
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada correctamente.');
  } else {
    console.log('El número de tarea es inválido.');
  }
}

// Función para mostrar las opciones disponibles
async function showMenu() {
  console.log(`
    Opciones:
    1. Mostrar lista de tareas
    2. Añadir nueva tarea
    3. Marcar tarea como completada
    4. Eliminar tarea
    5. Salir
  `);
}

// Evento que se da cuando se introduce una línea de texto en la consola
async function main() {
  while (true) {
    await showMenu();
    const input = await getInput('Selecciona una opción: ');
    const option = parseInt(input);
    switch (option) {
      case 1:
        await showTasks();
        break;
      case 2:
        await addTask();
        break;
      case 3:
        await completeTask();
        break;
      case 4:
        await deleteTask();
        break;
      case 5:
        rl.close();
        return;
      default:
        console.log('Opción inválida.');
        break;
    }
  }
}

main().catch((error) => console.error(error));

