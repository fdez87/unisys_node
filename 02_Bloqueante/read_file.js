const fs = require('fs')
const data = fs.readFileSync('prueba.txt', {encoding: 'utf-8'})
console.log(data)

let data2

//Esto es un proceso asincrono por lo tanto mi variable vale lo que valia al principio
fs.readFile('prueba2.txt', {encoding: 'utf-8'},(err, data) => {
    if (err) {
        console.log(err)
        return
    }
    data2 = data
    console.log(data2)
})

console.log('Lectura de ficheros')
