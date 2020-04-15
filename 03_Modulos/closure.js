// Patron Closure / Factory

function crearUser(nombre, edad) {
    return {
        getNombre () {
            return nombre
        },
        getEdad () {
            return edad
        },
        saludar () {
            console.log(`Hola soy ${nombre} y tengo ${edad} años`)
        }
    }
}

const usuario1 = crearUser('Javi', 32)
usuario1.saludar()

const usuario2 = crearUser('Pedro', 40)

setTimeout(() => {
    usuario2.saludar()
}, 1000)