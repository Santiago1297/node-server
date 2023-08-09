// Se importa http
const http = require("http");
const port = 3000;

  // Arreglo lista de tareas
  const tasks = [
    {
      id: 1,
      title: "Sacar al perro",
      description: "Sacar a pasear al perro en la mañana y en la noche",
      completed: false,
    },
    {
      id: 2,
      title: "Estudiar React",
      description: "Ver material y hacer ejercicios",
      completed: true,
    },
    {
      id: 3,
      title: "Hacer ejercicio",
      description: "Ir al gimnasio por 2 horas en la tarde",
      completed: false,
    },
  ];

const server = http.createServer((req, res) => {
  // Lógica para entregar recursos
  if (req.url === "/tasks" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(tasks));
  } else {
    res.statusCode = 404;
    res.end("Ruta no encontrada");
  }
});

server.listen(port, () => {
  console.log("Servidor corriendo");
});
