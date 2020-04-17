const express = require ('express')
const app = express()
const port = 3000

// Middlewares
app.get('/', (req, res, next) => {
    res.send('Hola Mundo desde express')
})

// Middlewares
app.get('/user', (req, res, next) => {
    let user = req.param('name') ? req.param('name') : 'usuario...'
    // let user = req.params.name
    // console.log(req.params.name)
    res.send(`Hola ${user}`)
})

app.get('*', (req, res, next) => {
    res.send('Aquí no hay nada')
})

app.listen(port, () => {
    console.log('Escuchando en el puerto', port)
})

// REST (API REST)
// app.get
// app.post
// app.put
// app.delete