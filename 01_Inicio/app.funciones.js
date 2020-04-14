//EM6 no tiene tipos
// Referencia variable
let x

// Referencia constante
const ob = {}
ob.name = 'pepe'
//ob = [] no puedo hacerlo

// esto me funciona
console.log(sum(2, 3))

// Funciones (hace hosting) se eleva al principio, puedo llamarlo antes de declararlo
function sum(a = 1, b = 2) {
    return a + b
}

console.log(sum(2, 3))

// esto no me funciona
// console.log(res(5, 3))

// Funciones por asignación
const res = function (a = 0, b = 0) {
    return a - b
}

// esto funciona
console.log(res(5, 3))

//ES 6 funciones arrow o lambda solo las podemos utilizar por asignación
const prod = (a = 1, b = 1) => { return a * b }
console.log(prod(5, 3))
const div = (a = 1, b = 1) => a / b //una única línea
console.log(div(5, 3))
const cuad = a => a * a //un único parámetro y una única línea
console.log(cuad(5, 3))
//Le podemos asignar a la funcion un valor 
cuad.desc = 'test'
console.log(cuad.desc)

//Las lambdas las vamos a utilizar para los callbakcs (funciones callback)
//Ejecuta suma despues de un tiempo. Pasarle una funcion a otra funcion
setTimeout(sum, 1000)

//Pasamos una función anónima que se ejecuta dentro del bucle de eventos
setTimeout(() => {
    console.log(sum(5,5))
}, 1000)