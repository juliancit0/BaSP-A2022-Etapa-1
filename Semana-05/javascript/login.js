import {checkEmail, checkPassword} from "./common.js";

window.onload = function() {
    var emailInput = document.getElementById('email');
    var submitButton = document.getElementById('log-in');
    var passwordInput = document.getElementById ('password');
    var checkbox = document.getElementById('show-password');

    checkbox.addEventListener ('change', function (event) {
        if (event.target.checked) {
            passwordInput.type = 'text';
        }
        else {
            passwordInput.type = 'password';
        }
    });

    emailInput.onfocus = function () {
        if (document.getElementById("mail-error-message") != null){
            document.getElementById("mail-error-message").remove();
        }
    }

    emailInput.onblur = function () {
        if (!checkEmail(emailInput.value)) {
            emailInput.classList.add('error');
            var mailError = document.createElement('p');
            mailError.innerText = 'Incorrect mail';
            mailError.id = "mail-error-message";
            document.getElementById("input-label-mail").appendChild(mailError);
        }
        else {
            emailInput.classList.remove('error');
        }
    }

    passwordInput.onfocus = function () {
        if (document.getElementById("password-error-message") != null){
            document.getElementById("password-error-message").remove();
        }
    }

    passwordInput.onblur = function () {
        if (!checkPassword(passwordInput.value)) {
            passwordInput.classList.add('error');
            var passwordError = document.createElement('p');
            passwordError.innerText = 'Incorrect password';
            passwordError.id = "password-error-message";
            document.getElementById("input-label-password").appendChild(passwordError);
        }
        else {
            passwordInput.classList.remove('error');
        }
    }

    submitButton.onclick = function (event) {
        event.preventDefault();
        if (checkEmail(emailInput.value) && checkPassword(passwordInput.value)){
            alert('Mail: '+ emailInput.value + ' Password: ' + passwordInput.value);
        }
        else {
            alert ('One or more are incorrect');
        };
    };
}