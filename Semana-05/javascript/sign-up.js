import { showErrorOnBlur, checkPassword, checkEmail , deleteErrorOnFocus, checkAlphanumeric } from "./common.js";

function checkLetters (text) {
    for (var i = 0; i< text.length; i++) {
        if (!((text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90) ||
        (text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 122))) {
            return false;
        }
    }
    return true;
}


function checkName (name) {
    return name.length >= 3 && checkLetters(name);
}

function checkNumbers (text) {
    for (var i = 0; i< text.length; i++) {
        if (!(text[i].charCodeAt(0) >= 48 && text[i].charCodeAt(0) <= 57)) {
            return false;
        }
    }
    return true;
}

function checkDni (dni) {
    return checkNumbers(dni) && dni.length > 7;
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
    return checkDay(list[0]) && checkMonth(list[1]) && checkYear(list[2]);
}

function checkPhone (phone) {
    return checkNumbers(phone) && phone.length == 10;
}

function checkAddress (address) {
    var totalCharacters = 0;
    var containLetters =  false
    var containNumber = false
    if (address.includes(' ')) {
        var list = address.split(' ');
        for (var i = 0; i < list.length; i++) {
            totalCharacters += list[i].length;
            if (list[i] != '') {
                if (checkNumbers(list[i])) {
                    containNumber = true;
                }
                if (checkLetters(list[i])) {
                    containLetters = true;
                }
            }
            if ((!checkNumbers(list[i]))) {
                if (!checkLetters(list[i])) {
                    return false;
                }
            }
        }
        return containNumber && containLetters && totalCharacters > 5;
    }
}

function countLetters (text) {
    var quantityLetters = 0;
    for (var i = 0; i< text.length; i++) {
        if ((text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90) ||
        (text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 122)) {
            quantityLetters ++;
        }
    }
    return quantityLetters;
}

function checkAlphanumericWithSpaces (text) {
    for (var i = 0; i< text.length; i++) {
        if (!((text[i].charCodeAt(0) >= 48 && text[i].charCodeAt(0) <= 57) ||
        (text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90) ||
        (text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 122) || text[i]==' ')) {
            return false;
        }
    }
    return true;
}

function checkLocality (locality){
    return countLetters(locality) > 3 && checkAlphanumericWithSpaces(locality);
}

function checkZip (zip) {
    return checkNumbers(zip) && (zip.length == 4 ||
    zip.length == 5);
}


window.onload = function () {
    var nameInput = document.getElementById('name');
    var lastNameInput = document.getElementById('last-name');
    var dniInput = document.getElementById('dni');
    var dateInput = document.getElementById('date');
    var phoneInput = document.getElementById('phone-input');
    var addresInput = document.getElementById('address-input');
    var localityInput = document.getElementById('locality');
    var zipInput = document.getElementById('zip');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var repeatPasswordInput = document.getElementById('repeat-password');
    var submitButton = document.getElementById('create-account');
    var focusedField = false;

    nameInput.onblur = function () {
        showErrorOnBlur (checkName, nameInput, 'nameError', 'name-error-message', 'input-name');
    }

    nameInput.onfocus = function () {
        deleteErrorOnFocus ('name-error-message');
        focusedField = true;
    }

    lastNameInput.onblur = function () {
        showErrorOnBlur (checkName, lastNameInput, 'lastNameError', 'last-name-error-message', 'input-last-name');
    }

    lastNameInput.onfocus = function () {
        deleteErrorOnFocus ('last-name-error-message');
        focusedField = true;
    }

    dniInput.onblur = function () {
        showErrorOnBlur (checkDni, dniInput,'dniError', 'dni-error-message', 'input-dni');
    }

    dniInput.onfocus = function () {
        deleteErrorOnFocus ('dni-error-message');
        focusedField = true;
    }

    dateInput.onblur = function () {
        showErrorOnBlur (checkDate, dateInput, 'dateError', 'date-error-message', 'input-date');
    }

    dateInput.onfocus = function () {
        deleteErrorOnFocus ('date-error-message');
        focusedField = true;
    }

    phoneInput.onblur = function () {
        showErrorOnBlur (checkPhone, phoneInput, 'phoneError', 'phone-error-message', 'input-phone');
    }

    phoneInput.onfocus = function () {
        deleteErrorOnFocus ('phone-error-message');
        focusedField = true;
    }

    addresInput.onblur = function () {
        showErrorOnBlur (checkAddress, addresInput, 'addressError', 'address-error-message', 'input-address')
    }

    addresInput.onfocus = function () {
        deleteErrorOnFocus ('address-error-message');
        focusedField = true;
    }

    localityInput.onblur = function () {
        showErrorOnBlur (checkLocality, localityInput, 'localityError', 'locality-error-message', 'input-locality')
    }

    localityInput.onfocus = function () {
        deleteErrorOnFocus ('locality-error-message');
        focusedField = true;
    }

    zipInput.onblur = function () {
        showErrorOnBlur (checkZip, zipInput, 'zipError', 'zip-error-message', 'input-zip');
    }

    zipInput.onfocus = function () {
        deleteErrorOnFocus ('zip-error-message');
        focusedField = true;
    }

    emailInput.onblur =  function () {
        showErrorOnBlur (checkEmail, emailInput, 'mailError', 'mail-error-message' ,'input-label-mail')
    }

    emailInput.onfocus = function () {
        deleteErrorOnFocus ('mail-error-message');
        focusedField = true;
    }

    passwordInput.onblur = function () {
        showErrorOnBlur (checkPassword, passwordInput, 'passwordError', 'password-error-message',
        'input-label-password');
    }

    passwordInput.onfocus = function () {
        deleteErrorOnFocus ('password-error-message');
        focusedField = true;
    }

    repeatPasswordInput.onblur = function () {
        showErrorOnBlur (checkPassword, repeatPasswordInput, 'repeatPasswordError', 'repeat-password-error-message',
        'input-label-repeat-password');
        if (passwordInput.value != repeatPasswordInput.value) {
        repeatPasswordInput.classList.add('error');
        var notMatchError = document.createElement('p');
        notMatchError.innerText = 'Passwords don’t match.';
        notMatchError.id = "not-match-error-message";
        document.getElementById("input-label-repeat-password").appendChild(notMatchError);
    }
        else {
            passwordInput.classList.remove('error');
        }
    }

    repeatPasswordInput.onfocus = function () {
        deleteErrorOnFocus ('repeat-password-error-message');
        deleteErrorOnFocus ('not-match-error-message');
        var focusedField = true;
    }

    submitButton.onclick = function (event) {
        event.preventDefault();
        var errorLists = document.getElementsByClassName('error');
        if (errorLists.length==0 && focusedField) {
            alert ('Name:' + nameInput.value + '\n Last name:' +lastNameInput.value + '\nDNI:' +
            dniInput.value +  '\n Date:' + dateInput.value + '\nPhone:' + phoneInput.value +
            '\n Address:' +addresInput.value + '\nLocality:' + localityInput.value
            +'\nZip code:' + zipInput.value + '\n Email:' +emailInput.value +
            '\n Password:' + passwordInput.value + '\n Repeat password:' +
            repeatPasswordInput.value)
        }
        else if (errorLists.length==0) {
            alert ('You must complete the form.')
        }
        else {
            alert ('One or more fields are incorrects.')
        }
}

}