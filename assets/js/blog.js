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