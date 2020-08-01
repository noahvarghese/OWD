window.addEventListener('load', () => {

    var instagram = document.getElementById('instagram');

    instagram.onmouseover = () => {
        instagram.src = instagram.src.replace("Orange", "Grey");
    }

    instagram.onmouseleave = () => {
        instagram.src = instagram.src.replace("Grey", "Orange");
    }


    var facebook = document.getElementById('facebook');

    facebook.onmouseover = () => {
        facebook.src = facebook.src.replace("Orange", "Grey");
    }

    facebook.onmouseleave = () => {
        facebook.src = facebook.src.replace("Grey", "Orange");
    }


    var twitter = document.getElementById('twitter');

    twitter.onmouseover = () => {
        twitter.src = twitter.src.replace("Orange", "Grey");
    }

    twitter.onmouseleave = () => {
        twitter.src = twitter.src.replace("Grey", "Orange");
    }


    var linkedIn = document.getElementById('linkedIn');

    linkedIn.onmouseover = () => {
        linkedIn.src = linkedIn.src.replace("Orange", "Grey");
    }

    linkedIn.onmouseleave = () => {
        linkedIn.src = linkedIn.src.replace("Grey", "Orange");
    }


    var email = document.getElementById('email');

    email.onmouseover = () => {
        email.src = email.src.replace("Orange", "Grey");
    }

    email.onmouseleave = () => {
        email.src = email.src.replace("Grey", "Orange");
    }
});