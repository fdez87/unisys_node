// Cargamos el modulo http
const http = require('http')
const port = 3000

// Creamos el servidor Web
const server = http.createServer((req, res) => {
    res.end('Hola mundo')
})

// Arrancamos el servidor (nodemon)
server.listen(port)
console.log('Escuchando en puerto', port)

// Abrimos navegador http://localhost:3000/
