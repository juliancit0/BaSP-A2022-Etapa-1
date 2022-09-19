console.log('-- EXERCISE 2: STRINGS');

/*
a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase).
*/

console.log ('--Exercise 2.a')
var firstString = 'Hello World!';
firstString = firstString.toUpperCase();
console.log(firstString);

/*
b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

console.log ('\n--Exercise 2.b')
var secondString = 'Example text', result;
result = secondString.substring(0,5);
console.log(result);


/*
c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

console.log ('\n--Exercise 2.c')
var thirdString = 'Another example text';
result = thirdString.substring(thirdString.length-3);
console.log(result)

/*
d.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
toUpperCase, toLowerCase y el operador +).
*/

console.log ('\n--Exercise 2.d')
var fourthString = 'aNOTHER EXAMPLE TEXT', result;
result =  fourthString.substring(0,1).toUpperCase() + fourthString.substring(1).toLocaleLowerCase();
console.log(result)

/*
e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la
posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

console.log ('\n--Exercise 2.e')
var fifthString = secondString, result;
result = fifthString.indexOf(' ');
console.log(result)

/*
f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
toLowerCase y el operador +).
*/

console.log ('\n--Exercise 2.f')
var sixthString = 'aNoThEr eXaMPLE', spacePosition = sixthString.indexOf(' '), result;
result = sixthString[0].toUpperCase() + sixthString.substring(1, spacePosition + 1).toLowerCase() +
sixthString[spacePosition+1].toUpperCase() + sixthString.substring(spacePosition+2).toLowerCase();
console.log(result)

