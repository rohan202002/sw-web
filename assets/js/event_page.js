// let currentIndex = 0;

// function showSlide(index) {
//     const slider = document.querySelector('.slider');
//     const images = document.querySelectorAll('.slider img');
//     if (index >= images.length) currentIndex = 0;
//     if (index < 0) currentIndex = images.length - 1;
//     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function nextSlide() {
//     currentIndex++;
//     showSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex--;
//     showSlide(currentIndex);
// }

// // Auto-slide functionality (optional)
// setInterval(() => {
//     nextSlide();
// }, 3000); // Change slide every 3 seconds



// let currentIndex = 0;

// function showSlide(index) {
// const slider = document.querySelector('.slider');
// const images = document.querySelectorAll('.slider img');
// if (index >= images.length) {
//     currentIndex = 0; // Reset to the first image
// } else if (index < 0) {
//     currentIndex = images.length - 1; // Go to the last image
// }
// slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function nextSlide() {
// currentIndex++;
// showSlide(currentIndex);
// }

// function prevSlide() {
// currentIndex--;
// showSlide(currentIndex);
// }

// // Auto-slide functionality
// setInterval(() => {
// nextSlide();
// }, 5000); // Change slide every 3 seconds

// // Optional: Pause on hover
// const sliderWrapper = document.querySelector('.image-slider');
// sliderWrapper.addEventListener('mouseover', () => clearInterval(autoSlide));
// sliderWrapper.addEventListener('mouseout', () => {
// autoSlide = setInterval(nextSlide, 5000);
// });


// JavaScript for continuous image slider
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const images = slider.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;
  
    // Clone the first image to create a seamless effect
    const firstClone = images[0].cloneNode(true);
    slider.appendChild(firstClone);
  
    const imageWidth = images[0].clientWidth;
  
    function startSlider() {
      setInterval(() => {
        currentIndex++;
  
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  
        // Reset the slider when it reaches the end
        slider.addEventListener("transitionend", () => {
          if (currentIndex === totalImages) {
            slider.style.transition = "none";
            slider.style.transform = "translateX(0)";
            currentIndex = 0;
          }
        });
      }, 2000); // 2 seconds for each image
    }
  
    startSlider();
  });
  



// document.addEventListener("DOMContentLoaded", () => {
//     const sliders = document.querySelectorAll(".slider");
  
//     sliders.forEach((sliderWrapper, index) => {
//       let currentIndex = 0;
//       const images = sliderWrapper.querySelectorAll("img");
//       const totalImages = images.length;
  
//       const updateSliderPosition = () => {
//         const offset = -currentIndex * sliderWrapper.parentElement.offsetWidth;
//         sliderWrapper.style.transform = `translateX(${offset}px)`;
//       };
  
//       const prevButton = sliderWrapper.parentElement.querySelector(".prev");
//       const nextButton = sliderWrapper.parentElement.querySelector(".next");
  
//       prevButton.addEventListener("click", () => {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
//         updateSliderPosition();
//       });
  
//       nextButton.addEventListener("click", () => {
//         currentIndex = (currentIndex + 1) % totalImages;
//         updateSliderPosition();
//       });
  
//       // Optional: Auto-slide functionality
//       setInterval(() => {
//         currentIndex = (currentIndex + 1) % totalImages;
//         updateSliderPosition();
//       }, 5000); // 5 seconds
//     });
//   });
  
