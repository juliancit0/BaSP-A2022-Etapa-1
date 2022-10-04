window.onload = function () {
    var emailInput = document.getElementById('email');
    var submitButton = document.getElementById('log-in');
    var passwordInput = document.getElementById ('password');
    var checkbox = document.getElementById('show-password');
    var inputList = document.querySelectorAll('input');

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
        if (checkAllFields(inputList)){
            if (errorLists.length==0) {
                fetch(urlWithQP)
                    .then (function(response) {
                        return response.json();
                    })
                    .then (function(data) {
                        if (data.msg) {
                            alert (data.msg);
                            if (data.success) {
                                alert('Mail: '+ emailInput.value + ' Password: ' + passwordInput.value);
                            }
                        }
                        else {
                            for (var error of data.errors) {
                                errorText += error.msg + '\n';
                            }
                            alert(errorText);
                        }
                    })
                    .catch (function(error) {
                        alert(error);
                    })
            }
            else {
                alert ('The email or the password that you’ve entered are incorrect.');
            }
        }
        else {
            alert('You must complete all fields')
        }
    }
}