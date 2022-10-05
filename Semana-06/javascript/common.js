function checkAlphanumeric (text) {
    for (var i = 0; i< text.length; i++) {
        if (!((text[i].charCodeAt(0) >= 48 && text[i].charCodeAt(0) <= 57) ||
        (text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90) ||
        (text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 122))) {
            return false;
        }
    }
    return true;
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

function checkEmail (mail) {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (mail.toLowerCase().match(emailExpression) == null){
        return false
    }
    else {
        return true
    }
}

function checkPassword (password) {

    return password.length >= 8 && checkAlphanumeric(password);

}

function showErrorOnBlur(check, inputType, errorType, errorTag, box) {
    if (!check(inputType.value)) {
        inputType.classList.add('error');
        var errorType = document.createElement('p');
        errorType.innerText = 'Invalid format.';
        errorType.id = errorTag;
        document.getElementById(box).appendChild(errorType);
    }
    else {
        inputType.classList.remove('error');
    }
}

function deleteErrorOnFocus (errorId) {
    if (document.getElementById(errorId) != null){
        document.getElementById(errorId).remove();
    }
}

function checkAllFields (inputList) {
    for (var input of inputList){
        if ('' == input.value){
            return false;
        }
    }
    return true;
}

function showModal (element) {
    element.classList.remove('nondisplayed');
    element.classList.add ('displayed');
  }

function closeModal (element) {
    element.classList.remove('displayed');
    element.classList.add ('nondisplayed');
}

function modifyText (element, text) {
    element.innerText = text;
}
