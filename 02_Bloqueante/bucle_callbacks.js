const lineas = ['1','2','3','4']
let n = 0

function doNext(delay, txt, callback) {
    setTimeout(() => {
        console.log(txt)
        callback()
    }, delay)
}

// Bucle asíncrono en serie
serie = (time, textos, mainfunction, finalCallback) => {
    if (n === textos.length) {
        finalCallback()
        return
    }
    doNext(time, textos[n], () => {
        serie(time,textos, mainfunction, finalCallback)
    })
    n++
}

console.log('Inicio')
serie(1000, lineas, doNext, () => {
    console.log('fin')
})