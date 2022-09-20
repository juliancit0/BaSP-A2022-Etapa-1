console.log('-- EXERCISE 6: FUNCTIONS');
/*
a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/

console.log ('--Exercise 6.a')
function sum (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log(sum (1,2))

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el
valor NaN como resultado.
*/


console.log ('--Exercise 6.b')
function verifiedSum(firstNumber, secondNumber) {
    if (typeof firstNumber === 'number' && typeof secondNumber=== 'number') {
        return sum(firstNumber,secondNumber);
      }
    else {
        alert('One or more parameters are not numbers!');
        return NaN;
      }
}
console.log (verifiedSum(4,5));
console.log (verifiedSum(4,'d'));

/*
c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero
si es un número entero.
*/
console.log ('--Exercise 6.c')
function validateInteger(number) {
    return number === Math.trunc(number);
}
console.log (validateInteger(2));
console.log (validateInteger(2.5));
console.log (validateInteger('d'));

/*
d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c) y que valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido
a entero (redondeado).
*/

console.log ('--Exercise 6.d')
function verifiedIntegerSum(firstNumber, secondNumber) {
    if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {
        if (!validateInteger(firstNumber)){
            alert ('The first number is not an integer');
            return Math.trunc(firstNumber);
        }
        else if (!validateInteger(secondNumber)){
            alert ('The second number is not an integer');
            return Math.trunc(secondNumber);
        }
        return sum(firstNumber,secondNumber);
    }
    else {
        alert('One or more parameters are not numbers!');
        return NaN;
    }
}

verifiedIntegerSum(2.3,3)

/*
e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función
suma probando que todo siga funcionando igual.
*/
console.log ('--Exercise 6.e')
function validateNumber(number) {
    return typeof number === 'number';
}
function validateIntegerNumber (number) {
    if (validateNumber(number)){
        if (!validateInteger(number)){
            alert ('The number is not an integer');
            return Math.trunc(number);
        }
        else {
            return number;
        }
    }
    else {
        alert('One of the parameters is not a number');
        return NaN;
    }
}
function secondSum(firstNumber, secondNumber){
    return validateIntegerNumber(firstNumber) + validateIntegerNumber(secondNumber);
}
console.log(secondSum(4,'d'))