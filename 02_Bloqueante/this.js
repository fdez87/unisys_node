// A partir de EM5 los procesadores de JS da igual en Node o en navegador, admiten que les pasemos un 'strict'
// Modo estricto: Con esta instrucción nos aseguramos de que no puede haber variables sin ser declaradas
'use strict'

// Esto con 'strict' fallaria si no la declaramos con const
const ob = {
    nombre: 'Pepe',
    // funcion: function () {
    funcion () {
        console.log(this)
    }
}

// El this marca el objeto al que pertenece
ob.funcion()

// Esto con 'strict' fallaria si no la declaramos con const
const fuera = ob.funcion

// Esto con 'strict' devuelve el objeto global de Node equivalente al objeto Window de JS si no ponemos 
fuera()

// const nuevo = new fuera()

function pruebaThis(name) {
    this.name = name
    console.log(this)

    //1. Tradicional: El valor de this depende del momento en el que se ejecuta no cuando se define. Este this va a ser el setTimeout
    setTimeout(function () {
        console.log('Classic', this)
    }, 500)
    
    //2. Bind: este this si que va a ser el objeto pruebaThis porque le bindeamos el objeto pruebaThis
    setTimeout(function () {
        console.log('Bind', this)
    }.bind(this), 500)

    //3. Arrow function: Este this si va a tener el valor que tenga en el momento de la ejecución = pruebaThis
    setTimeout(() => {
        console.log('Arrow',this)
    }, 500)

    // Concatenación con comillas francesas (caracter después de la 'P'). Respeta los saltos de linea y variables
    this.saludar = function() {
        console.log(`Hola soy ${this.name}`)
    }

    // Con funcion Arrow creo que en Vue falla
    this.saludar = () => {
        console.log(`Hola soy ${this.name}`)
    }
}

// Usamos prototype para no repetir el conjunto de objetos instanciados con esta misma función
pruebaThis.prototype.saludar = function() {
    console.log(`Hola soy ${this.name}`)
}

// Si declaro una Arrow function como prototipo, no puedo jugar con el this pues entienden un this global para toda la clase en la cual 
// name no vale nada 
pruebaThis.prototype.saludar = () => {
    console.log(`Hola soy ${this.name}`)
}

const pb1 = new pruebaThis('Pepe')
pb1.saludar()