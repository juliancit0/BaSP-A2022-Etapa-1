console.log('-- EXERCISE 2: STRINGS');

/* Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase). */

console.log ('--Exercise 2.a')
var firstString = 'Hello World!';
firstString = firstString.toUpperCase();
console.log(firstString);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log ('\n--Exercise 2.b')
var secondString = 'Example text', result;
result = secondString.substring(0,5);
console.log(result);


/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log ('\n--Exercise 2.c')
var thirdString = 'Another example text';
result = thirdString.substring(thirdString.length-3);
console.log(result)