import {checkAlphanumeric , checkPassword ,  showErrorOnBlur, deleteErrorOnFocus, checkEmail} from "./common.js";
import { checkName } from "./sign-up.js";

function checkSelect(text) {
    console.log (text);
    return !text == '';
}
function checkText (text) {
    return checkAlphanumeric(text) && text.length >= 3;
}

window.onload = function () {
    var nameInput = document.getElementById('name-input');
    var emailInput = document.getElementById('email-input');
    var selectInput = document.getElementById('select-input');
    var textInput =  document.getElementById('text-input');
    var focusedField = false;
    var submitButton = document.getElementById('send-message');

    nameInput.onblur = function () {
        showErrorOnBlur (checkName, nameInput, 'nameError', 'name-error-message', 'input-name-box');
    }

    nameInput.onfocus = function () {
        deleteErrorOnFocus('name-error-message');
        focusedField = true;
    }

    emailInput.onblur = function () {
        showErrorOnBlur (checkEmail, emailInput, 'emailError', 'email-error-message', 'input-email-box')
    }

    emailInput.onfocus = function () {
        deleteErrorOnFocus ('email-error-message');
        focusedField = true;
    }

    selectInput.onblur = function () {
        showErrorOnBlur (checkSelect, selectInput, 'selectError', 'select-error-message', 'title-button')
    }

    selectInput.onfocus = function () {
        deleteErrorOnFocus ('select-error-message');
    }

    textInput.onblur = function () {
        showErrorOnBlur (checkName, textInput, 'textError', 'text-error-message', 'input-text-box');
    }

    textInput.onfocus = function () {
        deleteErrorOnFocus ('text-error-message');
        focusedField = true;
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
        if (errorLists.length==0 && focusedField) {
            alert ('Name:' + nameInput.value + '\nEmail: ' + emailInput.value + '\nContact area: ' + selectInput.value +
            '\n Message: ' + textInput.value);
        }
        else {
            alert ('One or more fields are incorrects.')
        }
}


}