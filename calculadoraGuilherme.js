var numero1 = 0
var operador
var numero2 = 0

function calcular(numero1, numero2, operador) {
    switch (operador) {
        case "+": return numero1 + numero2
        case "-": return numero1 - numero2
        case "*": return numero1 * numero2
        case "/": return numero1 / nemero2
        case "%": return numero1 % numero2
    }
}

function setarNumero(numero) {
    var div = document.getElementById("visor").innerText
    if (!operador) {
        numero1 = div + numero
    }
    else {
        numero2 = numero2 + "" + numero
    }
    document.getElementById("visor").innerHTML = div + numero
}

function setaroperador(operadordigitado) {
    if (!operador) {
        operador = operadordigitado
    }
    else {
        setarResultado()
        operador = operadordigitado
    }

    document.getElementById("visor").innerHTML += operadordigitado
}

function setarResultado() {
    var resultado
    console.log([numero1, numero2])
    if (numero1 && numero2 && operador) {
        resultado = calcular(parseFloat(numero1), parseFloat(numero2), operador)
    }
    else {
        resultado = 0
    }
    document.getElementById("visor").innerHTML = resultado
    numero1 = resultado
    numero2 = 0
    operador = ""
}
