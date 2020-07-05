
window.onload = () => {
    var windows = document.getElementById("windowInstallation");
    var doors = document.getElementById("doorInstallation");
    
    windows.onclick = () => {
        document.getElementById("windows").scrollIntoView();
    };
    
    doors.onclick = () => {
        document.getElementById("doors").scrollIntoView();
    };
};