// JavaScript for your existing code

const buttonContainer = document.querySelector(".button-container");
const popupButton = document.getElementById("popupButton");
const catPopup = document.getElementById("catPopup");

window.addEventListener("scroll", function() {
    const scrollY = window.scrollY || window.pageYOffset;
    buttonContainer.style.top = `${scrollY + window.innerHeight - 100}px`;
});

popupButton.addEventListener("click", function() {
    catPopup.style.display = "flex"; // Show the popup
});

document.getElementById("closeButton").addEventListener("click", function() {
    catPopup.style.display = "none"; // Hide the popup
});

catPopup.addEventListener("click", function(e) {
    if (e.target === this) {
        this.style.display = "none"; // Hide the popup if you click outside of it
    }
});

