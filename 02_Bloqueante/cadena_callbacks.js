// Asincronía a través de callbacks
// El parámetro callback indica un método que se ejecuta tras la lógica de esta función asíncrona
function doNext(delay, txt, callback) {
    setTimeout(() => {
        console.log(txt)
        callback()
    }, delay)
}

console.log('Start process')

// Esto es una especie de bucle asincrono
doNext(1000, '1', () => {
    doNext(1000, '2', () => {
        doNext(1000, '3', () => {
            console.log('End process')
        })
    })
})

// Siempre tiene prioridad las instrucciones bloqueantes/sincronas
// Si en el momento de alcanzar este delay siguen las instrucciones síncronas se espera a que terminen y vacía de golpe el bucle de eventos
// Para evitar el infierno de bucles podriamos llamar a una función recursiva