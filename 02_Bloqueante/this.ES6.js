class pruebaThisES6 {
    constructor(name, surname, years) {
        this.name = name
        this.surname = surname
        this.years = years
    }

    saludar () {
        console.log(`
        Hola soy ${this.name} ${this.surname}. 
        Tengo ${this.years} años`)
    }
}

const pb1 = new pruebaThisES6('Javier', 'Fernández', 32)
pb1.saludar()