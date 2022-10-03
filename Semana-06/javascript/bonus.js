function checkSelect(text) {
    return !text == '';
}
function checkText (text) {
    return checkAlphanumericWithSpaces(text) && text.length >= 3;
}

window.onload = function () {
    var nameInput = document.getElementById('name-input');
    var emailInput = document.getElementById('email-input');
    var selectInput = document.getElementById('select-input');
    var textInput =  document.getElementById('text-input');
    var submitButton = document.getElementById('send-message');
    var inputList = document.querySelectorAll ('input');

    nameInput.onblur = function () {
        showErrorOnBlur (checkName, nameInput, 'nameError', 'name-error-message', 'input-name-box');
    }

    nameInput.onfocus = function () {
        deleteErrorOnFocus('name-error-message');
    }

    emailInput.onblur = function () {
        showErrorOnBlur (checkEmail, emailInput, 'emailError', 'email-error-message', 'input-email-box')
    }

    emailInput.onfocus = function () {
        deleteErrorOnFocus ('email-error-message');
    }

    selectInput.onblur = function () {
        showErrorOnBlur (checkSelect, selectInput, 'selectError', 'select-error-message', 'title-button')
    }

    selectInput.onfocus = function () {
        deleteErrorOnFocus ('select-error-message');
    }

    textInput.onblur = function () {
        showErrorOnBlur (checkText, textInput, 'textError', 'text-error-message', 'input-text-box');
    }

    textInput.onfocus = function () {
        deleteErrorOnFocus ('text-error-message');
    }

    selectInput.onblur = function () {
        if (selectInput.value != 'systems' && selectInput.value != 'commercialization' &&
        selectInput.value != 'human-resources') {
            selectInput.classList.add('error');
            var notMatchError = document.createElement('p');
            notMatchError.innerText = 'Please select area';
            notMatchError.id = "select-error-message";
            document.getElementById("title-area").appendChild(notMatchError);
        }
        else {
            selectInput.classList.remove('error');
        }
    }

    selectInput.onfocus = function () {
        deleteErrorOnFocus('select-error-message');
    }

    submitButton.onclick = function (event) {
        event.preventDefault();
        var errorLists = document.getElementsByClassName('error');
        if (checkAllFields(inputList) && selectInput.value != '' && textInput.value!= ''){
            if (errorLists.length==0) {
                alert ('Name:' + nameInput.value + '\nEmail: ' + emailInput.value + '\nContact area: ' + selectInput.value +
                '\n Message: ' + textInput.value);
            }
            else {
                alert ('One or more fields are incorrects.')
            }
        }
        else {
            alert('You must complete all the fields');
        }
    }
}