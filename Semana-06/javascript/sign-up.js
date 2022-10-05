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

function checkLocality (locality){
    return countLetters(locality) > 3 && checkAlphanumericWithSpaces(locality);
}

function checkZip (zip) {
    return checkNumbers(zip) && (zip.length == 4 ||
    zip.length == 5);
}

function changeDateFormat (date) {
    var dateAsList =  date.split('/');
    var newDate = '';
    newDate = dateAsList[1]+ '/' + dateAsList [0] + '/' + dateAsList [2];
    return newDate;
}

function completeField (inputType, itemKey) {
    if (localStorage.getItem(itemKey)) {
        inputType.value = localStorage.getItem(itemKey);
    }

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
    var inputList = document.querySelectorAll('input');
    var modal = document.getElementById('sign-up-modal');
    var cross = document.getElementsByClassName('close')[0];
    var message = document.getElementById('msg');
    var info = document.getElementById('info');

    completeField (nameInput, 'name');
    completeField (lastNameInput, 'lastName');
    completeField (dniInput, 'dni');
    completeField (dateInput, 'dob');
    completeField (phoneInput, 'phone');
    completeField (addresInput, 'address');
    completeField (localityInput, 'city');
    completeField (zipInput, 'zip');
    completeField (emailInput, 'email');
    completeField (passwordInput, 'password');

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

    dniInput.onblur = function () {
        showErrorOnBlur (checkDni, dniInput,'dniError', 'dni-error-message', 'input-dni');
    }

    dniInput.onfocus = function () {
        deleteErrorOnFocus ('dni-error-message');
    }

    dateInput.onblur = function () {
        showErrorOnBlur (checkDate, dateInput, 'dateError', 'date-error-message', 'input-date');
    }

    dateInput.onfocus = function () {
        deleteErrorOnFocus ('date-error-message');
    }

    phoneInput.onblur = function () {
        showErrorOnBlur (checkPhone, phoneInput, 'phoneError', 'phone-error-message', 'input-phone');
    }

    phoneInput.onfocus = function () {
        deleteErrorOnFocus ('phone-error-message');
    }

    addresInput.onblur = function () {
        showErrorOnBlur (checkAddress, addresInput, 'addressError', 'address-error-message', 'input-address')
    }

    addresInput.onfocus = function () {
        deleteErrorOnFocus ('address-error-message');
    }

    localityInput.onblur = function () {
        showErrorOnBlur (checkLocality, localityInput, 'localityError', 'locality-error-message', 'input-locality')
    }

    localityInput.onfocus = function () {
        deleteErrorOnFocus ('locality-error-message');
    }

    zipInput.onblur = function () {
        showErrorOnBlur (checkZip, zipInput, 'zipError', 'zip-error-message', 'input-zip');
    }

    zipInput.onfocus = function () {
        deleteErrorOnFocus ('zip-error-message');
    }

    emailInput.onblur =  function () {
        showErrorOnBlur (checkEmail, emailInput, 'mailError', 'mail-error-message' ,'input-label-mail')
    }

    emailInput.onfocus = function () {
        deleteErrorOnFocus ('mail-error-message');
    }

    passwordInput.onblur = function () {
        showErrorOnBlur (checkPassword, passwordInput, 'passwordError', 'password-error-message',
        'input-label-password');
    }

    passwordInput.onfocus = function () {
        deleteErrorOnFocus ('password-error-message');
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
    }

    submitButton.onclick = function (event) {
        event.preventDefault();
        var errorLists = document.getElementsByClassName('error');
        if (passwordInput.value != repeatPasswordInput.value){
            modifyText(message, 'Passwords must match');
            modifyText(info, '');
            showModal(modal);
            passwordInput.classList.add('error');
            repeatPasswordInput.classList.add('error');
        }
        else if (checkAllFields(inputList)) {
            if (errorLists.length==0) {
                var urlWithQP = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?' +
                'name=' + nameInput.value +
                '&lastName=' + lastNameInput.value +
                '&email=' + emailInput.value +
                '&password=' + passwordInput.value +
                '&dni=' + dniInput.value +
                '&dob=' + changeDateFormat(dateInput.value) +
                '&phone=' + phoneInput.value +
                '&address=' + addresInput.value +
                '&city=' + localityInput.value +
                '&zip=' + zipInput.value;
                fetch(urlWithQP)
                    .then (function (response){
                        return response.json();
                    })
                    .then (function (object) {
                        var alertMsg = '';
                        if (object.success) {
                            modifyText(message, object.msg);
                            for (var property in object.data) {
                                if (property != 'dob') {
                                    alertMsg += property + ': ' + object.data[property] + '\n';
                                    localStorage.setItem(property, object.data[property]);
                                }
                                else {
                                    alertMsg += property + ': ' + changeDateFormat(object.data[property]) + '\n';
                                    localStorage.setItem(property, changeDateFormat(object.data[property]));
                                }
                            }
                        }
                        else {
                            for (var property in object.errors) {
                                alertMsg += object.errors[property].msg + '\n';
                            }
                        }
                        modifyText(info, alertMsg);
                        showModal(modal);
                    })
                    .catch (function (error) {
                        modifyText(message, error);
                        modifyText(info, '');
                        showModal(modal);
                    })
            }
            else {
                modifyText(message, 'One or more fields are incorrects.')
                modifyText(info, '');
                showModal(modal);
            }
        }
        else {
            modifyText(message,'You must complete the form.');
            modifyText(info, '');
            showModal(modal);
        }
    }

    cross.onclick = function () {
        closeModal(modal);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
          closeModal(modal);
        }
      }
}