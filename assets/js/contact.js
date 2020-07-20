window.addEventListener('load', () => {

    recaptchaCallback = () => {

        var success = validateForm();

        if ( success )
        {
            grecaptcha.ready(function() {
                grecaptcha.execute('6LePVLMZAAAAAPLLObfHwB3bRCZySVKpNHgZyIqw', {action: 'submit'}).then(function(token) {

                    var formEl = document.getElementById("contactForm");
                    console.log(new FormData(formEl));
                    
                    var data = new URLSearchParams();

                    for ( var pair of new FormData(formEl) )
                    {
                        console.log(pair);
                        data.append(pair[0], pair[1]);
                    }

                    console.log(data);
                    
                    let response = fetch("http://localhost/OWD/mail.php", {
                        method: "POST",
                        body: data    
                    })
                    .then( () => {
                        formEl.reset();
                        // display toast
                        var x = document.getElementById("snackbar");
                        x.className = "show";
                        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                    });

                    console.log(response);
                });
            });
        }
    }

    var validatePhone = (phoneNumber) => {

        var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        if ( phoneNumber.match(phoneRegex) )
        {
            return true;
        }

        return false;
    }

    var validateEmail = (email) => {
        
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if ( email.match(emailRegex) )
        {
            return (true)
        }

        return (false)
    }

    validateForm = () => {

        var success = true;

        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var city = document.getElementById("city").value;
        var message = document.getElementById("message").value;
    
        var missing = new Array();
    
        // check for empty fields
        if ( fname.trim() == "" )
        {
            missing[missing.length] = "fname";
        }
    
        if ( lname.trim() == "" )
        {
            missing[missing.length] = "lname";
        }
    
        if ( email.trim() == "" )
        {
            missing[missing.length] = "email";
        }
    
        if ( phone.trim() == "" )
        {
            missing[missing.length] = "phone";
        }
    
        if ( city.trim() == "" )
        {
            missing[missing.length] = "city";
        }
    
        if ( message.trim() == "" )
        {
            missing[missing.length] = "message";
        }

        var error = document.getElementById("error");
        error.innerHTML = "";
    
        if ( missing.length > 0 )
        {
            success = false;

            missing.forEach(id => {
                var el = document.getElementById(id);
                el.classList.add('red');
            });

            var required = document.createElement("p");
            var textNode = document.createTextNode("*Please fill in all required fields.");
            required.appendChild(textNode);
            error.appendChild(required);
        }
    
        // verify that email is an  email address
    
        // verify phone number is a phone number
        if ( validatePhone(phone) === false && phone)
        {
            success = false;
            var validNumber = document.createElement("p");
            var textNode = document.createTextNode("*Please enter a valid phone number.");
            validNumber.appendChild(textNode);
            error.appendChild(validNumber);
        }

        if ( validateEmail(email) === false && email )
        {
            success = false;
            var validEmail = document.createElement("p");
            var textNode = document.createTextNode("*Please enter a valid email.");
            validEmail.appendChild(textNode);
            error.appendChild(validEmail);
        }

        if ( success === false )
        {
            document.getElementById("form").appendChild(error);
        }

        return success;
        
    }
});