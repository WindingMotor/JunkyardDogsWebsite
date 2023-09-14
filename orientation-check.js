
// Function to check if the device is in vertical orientation
function isVerticalOrientation() {
    const angle = window.screen.orientation ? window.screen.orientation.angle : 0;
    return angle === 0 || angle === 180;
}

// Function to show or hide the content based on orientation
function updateContentVisibility() {
    const content = document.getElementById("content");
    const rotateMessage = document.getElementById("rotateMessage");
    
    if (isVerticalOrientation()) {
        content.style.display = "block";
        rotateMessage.style.display = "none";
    } else {
        content.style.display = "none";
        rotateMessage.style.display = "block";
    }
}

// Initial check on page load
updateContentVisibility();

// Listen for orientation change events
window.addEventListener("orientationchange", updateContentVisibility);
