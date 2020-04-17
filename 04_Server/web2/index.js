// Cargamos el modulo http
const http = require('http')
const port = 3001

// Creamos el servidor Web
const server = http.createServer((req, res) => {
    // console.log(req)
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<header><h1>Hola mundo</h1></header>')
})

// Arrancamos el servidor (nodemon)
server.listen(port)
console.log('Escuchando en puerto', port)

// Abrimos navegador http://localhost:3001/
