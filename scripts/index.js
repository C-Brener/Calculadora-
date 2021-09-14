import { calculadora } from './functionCalc.js';
let calc = calculadora;
let finalResult;
let firstValue = Number(prompt("Digite um numero"))
let secondValue = Number(prompt("Digite outro numero"))
let operationValue = prompt(`Selecione uma opção:
(1) Adição
(2) Subtração
(3) Multiplicação
(4) Divisão
(5) Sair
`)

if (operationValue == 1) {
    finalResult = (`${firstValue}+${secondValue}=${calc.somar(firstValue, secondValue)}`)
} else if (operationValue == 2) {
    finalResult = (`${firstValue}-${secondValue}=${calc.subtrair(firstValue, secondValue)}`)
} else if (operationValue == 3) {
    finalResult = (`${firstValue}x${secondValue}=${calc.multiplicar(firstValue, secondValue)}`)
} else if (operationValue == 4) {
    finalResult = (`${firstValue}/${secondValue}=${calc.dividir(firstValue, secondValue)}`)
} else {
    finalResult = ("Bye")
}


document.getElementById("result").innerHTML = finalResult;