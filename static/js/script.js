// Main blog page js

var path = window.location.pathname;
var page = path.substring(path.indexOf('/') - 1);

switch ( page ) {

    case "/contact/":
        break;

    case "/services/":
        // Services
        window.addEventListener('load', () => {
            var windows = document.getElementById("windowServices");
            var doors = document.getElementById("doorServices");
            var repairs = document.getElementById("repairServices");
            
            windows.onclick = (e) => {
                e.preventDefault();
                document.getElementById("windows").scrollIntoView();
            };
            
            doors.onclick = (e) => {
                e.preventDefault();
                console.log("What");
                document.getElementById("doors").scrollIntoView();
            };
            
            repairs.onclick = (e) => {
                e.preventDefault();
                document.getElementById("repairs").scrollIntoView();
            };
        });

        break;
    
    case "/blog/":
        window.addEventListener("load", () => {
            var newestDesc = document.getElementById("newestDescription");
            var banner = document.getElementById("blogBanner");
        
            newestDesc.addEventListener("mouseenter", () => {
                banner.style.transform = "scale(1.1)";
            });
        
            newestDesc.addEventListener("mouseleave", () => {
                banner.style.transform = "scale(1)";
            });
        
            banner.addEventListener("mouseenter", () => {
                banner.style.transform = "scale(1.1)";
            });
        
            banner.addEventListener("mouseleave", () => {
                banner.style.transform = "scale(1)";
            });
        });
        
        
        // Load more blogs? may not keep with hugo
        /*
        window.addEventListener("scroll", () => {
        
            var snackbar = document.getElementById("loadSnackbar");
        
            var footer = document.getElementById("footerContents");// Get it's position in the viewport
            var bounding = footer.getBoundingClientRect();
            
            if 
            (
                bounding.top >= 0 && 
                bounding.left >= 0 &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) 
            {
                snackbar.classList.add("show");     
            } 
            else
            {
                snackbar.classList.remove("show");  
            }
        });
        */
        break;
}

// social images hover
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