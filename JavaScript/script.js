$(document).ready(function(){
   $('#videoMessage div p').hover(
        function() {
            $(this).addClass('messageHover');
        },
        function() {
            $(this).removeClass('messageHover');
        }
   );
});

$(document).ready(function() {
   $('#rolesMenu').accordion();
});


function validateForm() {
    if (!checkName() || !checkEmail()) {
        return false;
    }
    
    return true;
}

function checkName() {
    var fullName = document.getElementById("fullName").value;
    var namePat = /^[A-Za-z\\p{L} .'-]+$/;

    if (fullName == null || fullName.trim() == "" || namePat.test(fullName) == false) {
        document.getElementById("nameError").innerHTML = "Please enter a real name. [First Name] [Last Name]";
        return false;
    } else  {
        document.getElementById("nameError").innerHTML = "";
        return true;
    }
}

function checkEmail() {
    var email = document.getElementById("emailAddress").value;
    var emailPat = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

    if (email == null || email.trim() == "" || emailPat.test(email) == false){
        document.getElementById("emailError").innerHTML = "Please enter a correct email address. [email]@[domain].[prefix]";
        return false;
    } else  {
        document.getElementById("emailError").innerHTML = "";
        return true;
    }
}