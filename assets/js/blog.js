window.addEventListener("load", () => {
    var newestDesc = document.getElementById("newestDescription");
    var banner = document.getElementById("banner");

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