#¿Qué sucedio al usar async y await?

Al utilizar async/await en el código, se ha transformado el flujo de control asincrónico en una estructura más similar a la programación secuencial, lo que hace que el código sea más legible y fácil de entender, y evita que se lleve a cabo un anidamiento excesivo de callbacks que pueden dificultar la comprensión del flujo del programa.


#¿Qué sucedio al usar el método then()?

Al usar el método then() para esperar a que se resuelvan las promesas en lugar de async/await, el código sigue funcionando de manera asincrónica, pero el estilo de programación cambia.

En este código, las funciones addTask(), completeTask() y deleteTask() hacen uso de then() para encadenar las promesas y gestionar el flujo de control. Como resultado, el código se vuelve más anidado y puede ser menos legible que el código que utiliza async/await.


#¿Qué diferencias encontraste entre async, await y el método then()?

Teniendo en cuenta lo aprendido y lo observado en el código, considero que async/await ofrece una sintaxis más simple y legible, lo que puede ser una ventaja en el desarrollo de código asincrónico más complejo. Por otro lado, el uso del método then() puede ser preferido por algunos desarrolladores o en entornos donde se requiera un soporte más amplio para navegadores o versiones de Node.js que no soporten async/await.