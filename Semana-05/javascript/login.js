import {checkEmail, checkPassword, showErrorOnBlur} from "./common.js";

window.onload = function() {
    var emailInput = document.getElementById('email');
    var submitButton = document.getElementById('log-in');
    var passwordInput = document.getElementById ('password');
    var checkbox = document.getElementById('show-password');
    var emailBoolean;
    var passwordBoolean;

    checkbox.addEventListener ('change', function (event) {
        if (event.target.checked) {
            passwordInput.type = 'text';
        }
        else {
            passwordInput.type = 'password';
        }
    });

    emailInput.onfocus = function () {
        if (document.getElementById('mail-error-message') != null){
            document.getElementById('mail-error-message').remove();
        }
    }

    emailInput.onblur =  function (){
        showErrorOnBlur (checkEmail, emailInput, 'mailError', 'mail-error-message' ,'input-label-mail')
    }

    passwordInput.onfocus = function () {
        if (document.getElementById('password-error-message') != null){
            document.getElementById('password-error-message').remove();
        }
    }

    passwordInput.onblur = function () {
            showErrorOnBlur (checkPassword, passwordInput, 'passwordError', 'password-error-message',
            'input-label-password')
        }

    submitButton.onclick = function (event) {
        event.preventDefault();
        if (checkPassword(passwordInput.value) && checkEmail(emailInput.value)){
            alert('Mail: '+ emailInput.value + ' Password: ' + passwordInput.value);
        }
        else {
            alert ('The email or the password that you’ve entered are incorrect.');
        };
    };
}