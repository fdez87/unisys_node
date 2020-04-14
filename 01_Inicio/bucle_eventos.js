//3. se va a ejecutar la 4ª debido a que esta en el bucle de eventos
setTimeout(() => {console.log('Linea 1')}, 0)
//1. Colocamos en bucle de ejecución
setTimeout(() => {console.log('Linea 2')}, 2000)
console.log('Linea 3')
//2. Se coloca en el bucle de eventos, aparecen en el callback
setTimeout(() => {console.log('Linea 4')}, 2000)
console.log('Linea 5')
console.log('Linea 6')