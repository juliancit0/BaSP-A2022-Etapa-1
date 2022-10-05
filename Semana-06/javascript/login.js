
window.onload = function () {
    var emailInput = document.getElementById('email');
    var submitButton = document.getElementById('log-in');
    var passwordInput = document.getElementById ('password');
    var checkbox = document.getElementById('show-password');
    var inputList = document.querySelectorAll('input');
    var modal = document.getElementById('login-modal');
    var cross = document.getElementsByClassName('close')[0];
    var message = document.getElementById('msg');
    var userInfo = document.getElementById('user-info');

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

    emailInput.onblur =  function () {
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
        var errorLists = document.getElementsByClassName('error');
        var urlWithQP = 'https://basp-m2022-api-rest-server.herokuapp.com/login?' +
        'email=' + emailInput.value +
        '&password=' + passwordInput.value;
        var errorText = '';
        var succesText = '';
        if (checkAllFields(inputList)){
            if (errorLists.length==0) {
                fetch(urlWithQP)
                    .then (function(response) {
                        return response.json();
                    })
                    .then (function(data) {
                        if (data.msg) {
                            modifyText(message, data.msg)
                            if (data.success) {
                               succesText += 'Mail: '+ emailInput.value + ' Password: ' + passwordInput.value;
                            }
                            modifyText(userInfo, succesText);
                            showModal(modal);
                        }
                        else {
                            for (var error of data.errors) {
                                errorText += error.msg + '\n';
                            }
                            modifyText(message, errorText);
                            modifyText(userInfo, '');
                            showModal(modal);
                        }
                    })
                    .catch (function(error) {
                        modifyText(message, error);
                        modifyText(userInfo, '');
                        showModal(modal);
                    })
            }
            else {
                    modifyText(message, 'The email or the password that you’ve entered are incorrect.');
                    modifyText(userInfo, '');
                    showModal(modal);
            }
        }
        else {
            modifyText(message, 'You must complete all fields');
                    modifyText(userInfo, '');
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