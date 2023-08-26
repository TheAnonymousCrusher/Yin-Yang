// Get a reference to the button element
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Set the initial style(display) to "none" when the page loads
scrollToTopBtn.style.display = "none";

// Attach the scroll event listener
window.onscroll = function() {
    scrollToTopButton();
};

function scrollToTopButton() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}
