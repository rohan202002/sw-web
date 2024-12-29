// Open modal on page load
window.onload = function () {
    const modal = document.getElementById("announcementModal");
    modal.style.display = "block";
    startAutoSlide(); // Start automatic sliding
};

// Close modal functionality
document.querySelector(".close").onclick = function () {
    const modal = document.getElementById("announcementModal");
    modal.style.display = "none";
    stopAutoSlide(); // Stop sliding when modal is closed
};

let slideIndex = 0;
let slideInterval; // Variable to store the interval ID

// Display the appropriate slide
function showSlides(n) {
    const slides = document.querySelectorAll(".slides");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides.forEach(slide => (slide.style.display = "none"));
    slides[slideIndex].style.display = "block";
}

// Automatic slideshow
function startAutoSlide() {
    const slides = document.querySelectorAll(".slides");
    if (slides.length === 0) return;

    // Start the interval to automatically move to the next slide
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 6000); // Change slide every 3 seconds
}

// Stop the slideshow
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Manual slide controls (for previous and next buttons)
function manualSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Initialize the first slide
showSlides(slideIndex);