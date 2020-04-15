// Una promesa es como en una hamburgueseria. Pedimos, nos dan un ticket, esperamos a que se resuelva y recibimos el resultado.
// En función del resultado del proceso podemos ir por un lado o por otro 'Resuelta', 'Rechazada'
function hacerAlgo() {
    // resolve y reject son funciones
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let n = Math.random()
            if (n < 0.5) {
                resolve(n)
            }
            else {
                reject(new Error(n))
            }
        }, 1000);
    })
}

const promesa = hacerAlgo()

// ¿Como hacemos la recuperación del resultado al hilo principal ya que es asincrono? Esto es como AJAX

/*******************
* En ES6 -- ES2015 *
*******************/

promesa.then((result) => {
    console.log(`OK ${result}`)
}).catch((error) => {
    console.log(`ERROR ${error.message}`)
});

/********************************************************
* ES 2017 -- async await -- solo funcionan con promesas *
********************************************************/

// Esto. función tradicional
// function main() {}
// main()

// Es igual que esto. función autoinvocada
// (function main() {})()

// Es igual que esto. función anónima autoinvocada arrow
// (() => {})()

// Es igual que esto. función anónima autoinvocada arrow async
(async () => {
    try {
        const result = await hacerAlgo()
        console.log(`OK ${result}`)
    }
    catch(error) {
        
        console.log(`ERROR ${error.message}`)
    }
})()