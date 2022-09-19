console.log('-- EXERCISE 1: VARIABLES AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números
 en una 3er variable. */

console.log ('--Exercise 1.a')
var firstNumber=1, secondNumber=2, result;
result = firstNumber + secondNumber;
console.log (result);

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */

console.log ('/n --Exercise 1.b')
var firstString='Hello ', secondString='world!', result;
result = firstString + secondString;
console.log(result)

/* Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
+guardando el resultado de la suma en una 3er variable (utilizar length). */

var totalCharacters;
totalCharacters = firstString.length + secondString.length;
console.log (totalCharacters);