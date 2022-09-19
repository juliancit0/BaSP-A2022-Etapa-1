console.log('-- EXERCISE 3: ARRAYS');

/*
a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

console.log ('--Exercise 3.a');
var months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];
console.log(months[4], months[10]);

/*
b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

console.log ('\n--Exercise 3.b');
orderedMonths = months.sort();
console.log(orderedMonths);

/*
c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

console.log ('\n--Exercise 3.c');
orderedMonths.unshift('First element');
orderedMonths.push('Last element');
console.log(orderedMonths);

/*
d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

console.log ('\n--Exercise 3.d');
orderedMonths.shift();
orderedMonths.pop();
console.log(orderedMonths);

/*
e. Invertir el orden del array (utilizar reverse).
*/
console.log ('\n--Exercise 3.e');
orderedMonths.reverse();
console.log(orderedMonths);

/*
f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/
console.log ('\n--Exercise 3.f');
var orderedMonthsString;
orderedMonthsString = orderedMonths.join('-');
console.log(orderedMonthsString);

/*
g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
console.log ('\n--Exercise 3.g');
var months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];
var newArray = months.slice(4,11);
console.log (newArray);




