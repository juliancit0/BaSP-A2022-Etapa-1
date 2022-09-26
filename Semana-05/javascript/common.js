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

export {checkEmail, checkPassword};