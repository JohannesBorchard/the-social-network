$(document).ready(function() {

    let email, password, name;
    let inputCorrect = false;

    $("#signUpRequest").click(function() {
        if (inputCorrect) {
            window.location.href = "/the-social-network/";
        };
    });

    $("#loginRequest").click(function() {
        validateLogin()
        if (inputCorrect) {
            window.location.href = "/the-social-network/";
        } else {
        	$("#email-login").val("");
        	$("#password-login").val("");
        	$(".alert").show();


        }
    });
    // $("#email").keypress(function(event) {
    // 	email = $("#email").val();
    // 	testEmail(email)
    // });

    $('#email').on('input', function() {
        email = $("#email").val();
        testEmail(email)
    });

    $('#password').on('input', function() {
        password = $("#password").val();
        testPassword(password)

    });


    function testEmail(emailEntered) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailEntered)) {
            $("#email").removeClass('is-invalid');
            $("#email").popover("hide");
            $("#emailHelp").hide();
            inputCorrect = true;
            return (true);
        } else {
            $("#email").addClass('is-invalid');
            $("#email").popover({ content: 'Falsches Format!' }).popover("show");
            $("#emailHelp").show();
            inputCorrect = false;
            return false;
        }
    }

    function testPassword(passwordEntered) {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(passwordEntered)) {
            $("#password").removeClass('is-invalid');
            $("#password").popover("hide");
            inputCorrect = true;
            return (true);
        } else {
            $("#password").addClass('is-invalid');
            $("#password").popover({ content: 'Schwaches Passwort!' }).popover("show");
            inputCorrect = false;
            return false;
        }
    }

    function validateLogin() {
        email = $("#email-login").val();
        password = $("#password-login").val();

        if (email == "erika@mail.de" && password == "passwort") {
            inputCorrect = true;
        } else {
            inputCorrect = false;
        }
    }
});