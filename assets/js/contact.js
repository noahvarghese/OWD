recaptchaCallback = (event) => {
    event.preventDefault();
    grecaptcha.ready(function() {
        grecaptcha.execute('6LePVLMZAAAAAPLLObfHwB3bRCZySVKpNHgZyIqw', {action: 'submit'}).then(function(token) {
            // Add your logic to submit to your backend server here.
        });
    });
}

window.onload = () => {

    let sumbitBtn = document.getElementById('submit');
    sumbitBtn.addEventListener("click", (e) => { recaptchaCallback(e)});
};