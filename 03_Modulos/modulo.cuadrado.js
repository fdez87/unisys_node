//Modulo 
function cuadrado() {
    return {
        area: (l) => {
            return l * l
        },
        perimetro: (l) => {
            return 4 * l
        }
    }
}

module.exports = cuadrado()