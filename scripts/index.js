import * as calculadora from './calcFunctions.js'
const calc = calculadora
let finalResult;
let firstValue = Number(prompt("Digite o primeiro valor"));
let secondValue = Number(prompt("Digite o segundo valor"));
let operationCalc = prompt(`
Selecione uma opção:
(1) Soma
(2) Subtração
(3) Multiplicação
(4) Divisão
`);
if (operationCalc == 1) {
    finalResult = (`${firstValue}+${secondValue}=${calc.soma(firstValue, secondValue)}`) 
    
}else if(operationCalc == 2){
    finalResult = (`${firstValue}-${secondValue}=${operationResult}`)
}else if(operationCalc == 3){
    operationResult = firstValue * secondValue;
    finalResult = (`${firstValue}x${secondValue}=${operationResult}`)
}else{
    operationResult = firstValue / secondValue;
    finalResult = (`${firstValue}/${secondValue}=${operationResult}`)
}
document.getElementById("result").innerHTML = finalResult; // Faz a substituição do conteudo

// document.write(`<h2>${finalResult} </h2>`) - O document.write não faz a substituição caso haja conteudo na tag
