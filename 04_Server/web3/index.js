// Cargamos el modulo http
const http = require('http')
const fs = require('fs')
const port = 3002

// Creamos el servidor Web
const server = http.createServer((req, res) => {

    let file = ''

    // Recogemos del request la URL
    switch (req.url) {
        case '/':
            file = 'index.html'
            break;
        case '/about':
            file = 'about.html'
            break;
        default:
            res.writeHead(404, {'Content-Type':'text/html'})
            res.end('<header><h1>Error 404</h1></header>')
            return
    }

    // Tengo que hacer una lectura asincrona pues cada petición que llegase pararia el servidor hasta que terminase
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(err.code, {'Content-Type':'text/html'})
            res.end(err.message)
        }
        else {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(data)
        }
    })
})

// Arrancamos el servidor (nodemon)
server.listen(port)
console.log('Escuchando en puerto', port)

// Abrimos navegador http://localhost:3001/
