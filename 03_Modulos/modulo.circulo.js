const pi = Math.PI

const area = function (r) {
    return pi * r * r
}

const perimetro = function (r) {
    return 2 * pi * r
}

module.exports.area = area
module.exports.perimetro = perimetro