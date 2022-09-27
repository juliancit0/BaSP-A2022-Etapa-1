import { showErrorOnBlur, checkPassword, checkEmail , deleteErrorOnFocus } from "./common.js";

function checkLetters (text) {
    for (var i = 0; i< text.length; i++) {
        if (!((text[i].charCodeAt(0) >= 48 && text[i].charCodeAt(0) <= 57) ||
        (text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90) ||
        (text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 122))) {
            return false;
        }
    }
    return true;
}

function checkName (name) {
    return name.length >= 3 && checkLetters(name);
}

function checkDni (dni) {
    return typeof dni == 'number' && dni.toString.length > 7;
}

function checkDay (dd) {
    return dd >= 1 && dd <= 31;
}

function checkMonth (mm) {
    return mm >= 1 && mm <= 12;
}

function checkYear (aaaa) {
    return aaaa >= 1900 && aaaa <= 2004;
}

function checkDate (date) {
    var list = date.split('/');
    console.log(date);
    return checkDay(list[0]) && checkMonth(list[1]) && checkYear(list[2]);
}

function checkPhone (phone) {
    return typeof phone == 'number' && phone.toString.length == 10;
}

function checkZipCode (zip) {
    return typeof zip == 'number' && (zip.toString.length == 4 ||
    zip.toString.length == 5);
}



window.onload = function () {
    var nameInput = document.getElementById('name');
    var lastNameInput = document.getElementById('last-name');
    var dateInput = document.getElementById('date');
    var passwordInput = document.getElementById('password');
    var submitButton = document.getElementById('sign-up');

    nameInput.onblur = function () {
        showErrorOnBlur (checkName, nameInput, 'nameError', 'name-error-message', 'input-name');
    }

    nameInput.onfocus = function () {
        deleteErrorOnFocus ('name-error-message');
    }

    lastNameInput.onblur = function () {
        showErrorOnBlur (checkName, lastNameInput, 'lastNameError', 'last-name-error-message', 'input-last-name');
    }

    lastNameInput.onfocus = function () {
        deleteErrorOnFocus ('last-name-error-message');
    }

    passwordInput.onblur = function () {
        showErrorOnBlur (checkPassword, passwordInput, 'passwordError', 'password-error-message',
        'input-label-password');
    }

    passwordInput.onfocus = function () {
        deleteErrorOnFocus ('password-error-message');
    }

    submitButton.onclick = function (event) {
        event.preventDefault();
        if (emailBoolean && passwordBoolean){
            alert('Mail: '+ emailInput.value + ' Password: ' + passwordInput.value);
        }
        else {
            alert ('The email or the password that you’ve entered are incorrect.');
        };
    };
}