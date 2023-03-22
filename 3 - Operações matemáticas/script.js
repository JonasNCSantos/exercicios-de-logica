/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let numberOne = prompt("Digite o primeiro numero:")
let numeroTwo = prompt("Digite o segundo numero:")

numberOne = Number(numberOne)
numeroTwo = Number(numeroTwo)

let sum = numberOne + numeroTwo
let subtraction = numberOne - numeroTwo
let multiplication = numberOne * numeroTwo
let division = numberOne / numeroTwo
let restOfDivision = numberOne % numeroTwo

alert("A Soma é: " + sum)
alert("A Subtração é: " + subtraction)
alert("A Multiplicação é: " + multiplication)
alert("A Divisão é: " + division)
alert("O resto da divisão é: " + restOfDivision)
