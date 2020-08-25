// Main blog page js // CAROUSEL OBJECT
function Carousel(containerID) {
    this.container = document.getElementById(containerID) || document.body;
    this.slides = this.container.querySelectorAll('.recentBlog');
    this.total = this.slides.length - 1;
    this.current = 0;

    // start on slide 1
    this.slide(this.current);
}
// NEXT
Carousel.prototype.next = function (interval) {
    (this.current < (this.total  - 2)) ? this.current += 1 : "";

    this.stop();
    this.slide(this.current);

    if (typeof interval === 'number' && (interval % 1) === 0) {
        var context = this;
        this.run = setTimeout(function () {
            context.next(interval);
        }, interval);
    }
};
// PREVIOUS
Carousel.prototype.prev = function (interval) {
    (this.current > 0) ? this.current -= 1 : "";

    this.stop();
    this.slide(this.current);

    if (typeof interval === 'number' && (interval % 1) === 0) {
        var context = this;
        this.run = setTimeout(function () {
            context.prev(interval);
        }, interval);
    }
};
// STOP PLAYING
Carousel.prototype.stop = function () {
    clearTimeout(this.run);
};
// SELECT SLIDE
Carousel.prototype.slide = function (index) {
    if (index >= 0 && index <= (this.total - 3)) {
        
        document.getElementById("carouselPrev").style.display = "block";
        document.getElementById("carouselNext").style.display = "block";
        
        this.stop();
        for (var s = 0; s <= this.total; s++) {
            if ( (index + 4) < this.total || index > -1)
            {
                if (s >= index && s < (index + 4) ) {
                    this.slides[s].style.display = "inline-block";
                } else {
                    this.slides[s].style.display = 'none';
                }
            }
        }
    }
    
    if ( index <= 0 )
    {
        this.current += 1;
        document.getElementById("carouselPrev").style.display = "none";
    }
    
    if ( index >= (this.total - 3))
    {
        this.current -= 1;
        document.getElementById("carouselNext").style.display = "none";
    }
};

var path = window.location.pathname;
var page = path.substring(path.indexOf('/') - 1);


switch (page) {

    case "/gallery/":

        window.addEventListener("load", () => {
            let galleryLinks = document.getElementsByClassName("galleryLinks");
            galleryLinks[0].classList.add("selected");
            document.getElementById("fibreglassDoors").style.display = "block";
            document.getElementById("steelDoors").style.display = "none";
            document.getElementById("windows").style.display = "none";
            document.getElementById("woodProducts").style.display = "none";
            document.getElementById("other").style.display = "none";

            for ( let i = 0; i < galleryLinks.length; i++ )
            {
                galleryLinks[i].addEventListener("click", (e) => {
                    e.preventDefault();

                    let galleryLinks = document.getElementsByClassName("galleryLinks");
                        
                    for ( let i = 0; i < galleryLinks.length; i++ )
                    {
                        if ( galleryLinks[i].classList.contains("selected") )
                        {
                            galleryLinks[i].classList.remove("selected");
                            let oldDivID = galleryLinks[i].id.replace("Link", "");
                            document.getElementById(oldDivID).style.display = "none";
                            break;
                        }
                    }

                    let selectedItem = e.path[1];
                    let selectedItemID = selectedItem.id;
                    selectedItem.classList.add("selected");

                    let divID = selectedItemID.replace("Link", "");

                    let div = document.getElementById(divID);
                    div.style.display = "block";
                });
            }
        });

        window.addEventListener("load", () => {
            var galleryImgs = document.getElementsByClassName("galleryImg");
            
            for ( i = 0; i < galleryImgs.length; i++ )
            {
                galleryImgs[i].addEventListener("mouseenter", (e) => {
                    e.path[0].style.transform = "scale(1.1)";
                });

                galleryImgs[i].addEventListener("mouseleave", (e) => {
                    e.path[0].style.transform = "scale(1)";
                });
            }
        });

        window.addEventListener("load", () => {
            let prev = document.getElementById("galleryCarouselPrev");

            prev.addEventListener("click", () => {
                // get image
                // get id from image
                // decrement id
                // get className from image
                // get image with id matching decremented and className matching className
                // replace source
                // replace alt
                // replace id
                // replace header
                // hide prev button if id = 0
                
                let overlayImg = document.getElementsByClassName("overlayImg")[0];

                let id = overlayImg.id - 1;

                let classArray = [].slice.call(overlayImg.classList);
                let type = classArray.filter((value) => {
                    return value != "overlayImg";
                });

                let images = document.getElementsByClassName(type);
                let nextImage = "";

                for ( i = 0; i < images.length; i++ )
                {
                    if ( images[i].id == id )
                    {
                        nextImage = images[i];
                        break;
                    }
                }

                overlayImg.setAttribute("id", id);
                overlayImg.setAttribute("src", nextImage.src);
                overlayImg.setAttribute("alt", nextImage.alt);

                let header = document.getElementById("overlayHeader");
                header.innerHTML = nextImage.alt.toUpperCase();


                if ( id == 0 )
                {
                    document.getElementById("galleryCarouselPrev").style.display = "none";
                }

                let nextBtn = document.getElementById("galleryCarouselNext");
                
                if ( nextBtn.style.display === "none" )
                {
                    nextBtn.style.display = "block"
                }

            });


            let next = document.getElementById("galleryCarouselNext");

            next.addEventListener("click", () => {
                
                let overlayImg = document.getElementsByClassName("overlayImg")[0];

                let id = parseInt(overlayImg.id) + 1;
                console.log(id);

                let classArray = [].slice.call(overlayImg.classList);
                let type = classArray.filter((value) => {
                    return value != "overlayImg";
                });

                let images = document.getElementsByClassName(type);
                let nextImage = "";

                for ( i = 0; i < images.length; i++ )
                {
                    if ( images[i].id == id )
                    {
                        console.log(images[i]);
                        nextImage = images[i];
                        break;
                    }
                }

                overlayImg.setAttribute("id", id);
                overlayImg.setAttribute("src", nextImage.src);
                overlayImg.setAttribute("alt", nextImage.alt);

                let header = document.getElementById("overlayHeader");
                header.innerHTML = nextImage.alt.toUpperCase();

                // subtract 2 because accounting for array indexing and when creating the overlay is an extra one
                let max = document.getElementsByClassName(type).length - 2;

                if ( id == max )
                {
                    document.getElementById("galleryCarouselNext").style.display = "none";
                }

                let prevBtn = document.getElementById("galleryCarouselPrev");
                
                if ( prevBtn.style.display === "none" )
                {
                    prevBtn.style.display = "block"
                }
                
            });

        });

        window.addEventListener("load", () => {

            let galleryImages = document.getElementsByClassName("galleryImg");
            
            for ( i = 0; i < galleryImages.length; i++ )
            {
                galleryImages[i].addEventListener("click", (e) => {

                    let image = new Image();
                    image.src = e.path[0].src;
                    image.setAttribute("alt", e.path[0].alt);
                    let id = e.path[0].id;

                    image.setAttribute("id", id);
                    image.classList.add("overlayImg");

                    let classArray = [].slice.call(e.path[0].classList);
                    let type = classArray.filter((value) => {
                        return value != "galleryImg";
                    });
                    image.classList.add(type[0]);

                    let header = document.createElement("h3");
                    header.innerHTML = image.alt.toUpperCase();
                    header.setAttribute("id", "overlayHeader");

                    let container = document.getElementById("overlayImgContainer");
                    container.appendChild(image);
                    container.appendChild(header);

                    let overlay = document.getElementById("overlay");
                    overlay.style.display = "block";
                    document.getElementsByTagName("html")[0].style.overflow = "hidden";

                    if ( id == 0 )
                    {
                        document.getElementById("galleryCarouselPrev").style.display = "none";
                    }
                    else 
                    {
                        document.getElementById("galleryCarouselPrev").style.display = "block";
                    }

                    // subtract 2 because accounting for array indexing and when creating the overlay is an extra one
                    let max = document.getElementsByClassName(type).length - 2;

                    if ( id == max )
                    {
                        document.getElementById("galleryCarouselNext").style.display = "none";
                    }
                    else 
                    {
                        document.getElementById("galleryCarouselNext").style.display = "block";
                    }
                });
            }

            let closeBtn = document.getElementById("mdiv");
            closeBtn.addEventListener("click", () => {
                document.getElementsByTagName("html")[0].style.overflow = "visible";
                let overlay = document.getElementById("overlay");
                overlay.style.display = "none";

                let container = document.getElementById("overlayImgContainer");
                container.removeChild(document.getElementsByClassName("overlayImg")[0]);
                container.removeChild(document.getElementById("overlayHeader"));
                
            });
        });
        

        break;

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

        window.addEventListener("load", () => {
            let horizontals = document.getElementsByClassName("horizontal");

            for (i = 0; i < horizontals.length; i++) {
                if (i > 2) {
                    horizontals[i].classList.add("hidden");
                }
            }
        });


        // Load more blogs? may not keep with hugo
        window.addEventListener("scroll", () => {

            var snackbar = document.getElementById("loadSnackbar");

            var footer = document.getElementById("footerContents"); // Get it's position in the viewport
            var bounding = footer.getBoundingClientRect();

            if (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                var blogs = document.getElementsByClassName("horizontal hidden");
                let length = blogs.length;
                if (length > 0) {
                    snackbar.classList.add("show");
                }
            } else {
                snackbar.classList.remove("show");
            }
        });

        window.addEventListener("load", () => {
            var snackbar = document.getElementById("loadSnackbar");
            snackbar.addEventListener("click", () => {

                // hide snackbar
                snackbar.classList.remove("show");

                // get all horizontal divs
                // iterate through them
                // if they have hidden as a class
                // remove and increment count until 3 have been removed
                var blogs = document.getElementsByClassName("horizontal");

                let count = 0
                for (i = 0; i < blogs.length; i++) {
                    if (count === 3) {
                        break;
                    }

                    if (blogs[i].classList.contains("hidden")) {
                        blogs[i].classList.remove("hidden");
                        count++;
                    }
                }
            });
        });
        break;
    default:
        // check for blog post
        const regex = /\/blog\/[a-zA-Z]*/;
        const found = page.match(regex);

        if (found) {

            window.addEventListener("load", () => {

                let posts = document.getElementsByClassName("recentBlog");

                for (i = 0; i < posts.length; i++) {
                    posts[i].style.display = "inline-block";

                    if (i === 3) {
                        break;
                    }
                }

                var carousel = new Carousel("carousel");

                document.getElementById("carouselPrev").addEventListener("click", () => {
                    carousel.prev();
                });

                document.getElementById("carouselNext").addEventListener("click", () => {
                    carousel.next();
                });
            });

            let i;
        }

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