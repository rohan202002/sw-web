



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
// document.addEventListener("DOMContentLoaded", () => {
//     const slider = document.querySelector(".slider");
//     const images = slider.querySelectorAll("img");
//     const totalImages = images.length;
//     let currentIndex = 0;
  
//     // Clone the first image to create a seamless effect
//     const firstClone = images[0].cloneNode(true);
//     slider.appendChild(firstClone);
  
//     const imageWidth = images[0].clientWidth;
  
//     function startSlider() {
//       setInterval(() => {
//         currentIndex++;
  
//         slider.style.transition = "transform 0.5s ease-in-out";
//         slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  
//         // Reset the slider when it reaches the end
//         slider.addEventListener("transitionend", () => {
//           if (currentIndex === totalImages) {
//             slider.style.transition = "none";
//             slider.style.transform = "translateX(0)";
//             currentIndex = 0;
//           }
//         });
//       }, 2000); // 2 seconds for each image
//     }
  
//     startSlider();
//   });
  




// let currentIndex = 0;

//     function showSlide(index) {
//         const slider = document.querySelector('.slider');
//         const images = document.querySelectorAll('.slider img');
//         if (index >= images.length) currentIndex = 0;
//         if (index < 0) currentIndex = images.length - 1;
//         slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     function nextSlide() {
//         currentIndex++;
//         showSlide(currentIndex);
//     }

//     function prevSlide() {
//         currentIndex--;
//         showSlide(currentIndex);
//     }

//     // Auto-slide functionality (optional)
//     setInterval(() => {
//         nextSlide();
//     }, 3000); // Change slide every 3 seconds



// not imp
// const slides= document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// // initializeSlider();
// document.addEventListener("DOMContentLoaded", initializeSlider);

// function initializeSlider(){

//     if(slides.length > 0){
//         slides[slideIndex].classList.add("displaySlide");
//         intervalId = setInterval(nextSlide, 5000);
//     }
// }

// function showSlide(index){

//     if(index >= slides.length){
//         slideIndex = 0;
//     }
//     else if(index < 0){
//         slideIndex = slides.length - 1;
//     }

//     slides.forEach(slide => {
//         slide.classList.remove("displaySlide");
//     });
//     slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide(){

// }

// function nextSlide(){
//     slideIndex++;
//     showSlide(slideIndex);
// }


// let slides2 = document.getElementsByClassName("slide");
// let slides = document.getElementsByClassName("slide1");

// let navlinks = document.getElementsByClassName("dot");
// let currentSlide = 0;

// document.getElementById("button-next").addEventListener("click", () => {
//   changeSlide(currentSlide + 1);
// });
// document.getElementById("button-prev").addEventListener("click", () => {
//   changeSlide(currentSlide - 1);
// });

// function changeSlide(moveTo) {    
//     console.log("c",currentSlide);
//     if (moveTo >= slides.length) {
//         moveTo = 0;
//     }
//     if (moveTo < 0) {
//         moveTo = slides.length - 1;
//     }

//     slides[currentSlide].classList.toggle("active");
//     navlinks[currentSlide].classList.toggle("activeDot");
//     slides[moveTo].classList.toggle("active");
//     navlinks[moveTo].classList.toggle("activeDot");
//     currentSlide = moveTo; 
// }

// document.querySelectorAll(".dot").forEach((bullet, bulletIndex) => {
//   bullet.addEventListener("click", () => {
//     if (currentSlide !== bulletIndex) {
//       changeSlide(bulletIndex);
//     }
//   });
// });

// setInterval(() => {
//     changeSlide(currentSlide + 1);
//   }, 3000);






// document.querySelectorAll('.slider-container').forEach(container => {
//     const slider = container.querySelector('.slider');
//     const slides = slider.children;
//     const prevButton = container.querySelector('.prev');
//     const nextButton = container.querySelector('.next');
//     let currentIndex = 0;

//     const updateSliderPosition = () => {
//         slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//     };

//     prevButton.addEventListener('click', () => {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
//         updateSliderPosition();
//     });

//     nextButton.addEventListener('click', () => {
//         currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
//         updateSliderPosition();
//     });
// });
  


document.querySelectorAll('.slider-container').forEach(container => {
    const slider = container.querySelector('.slider');
    const slides = slider.children;
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');
    let currentIndex = 0;

    const updateSliderPosition = () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const showNextSlide = () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSliderPosition();
    };

    let autoSlideInterval = setInterval(showNextSlide, 3000);

    prevButton.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSliderPosition();
        autoSlideInterval = setInterval(showNextSlide, 3000);
    });

    nextButton.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSliderPosition();
        autoSlideInterval = setInterval(showNextSlide, 3000);
    });

    container.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    container.addEventListener('mouseleave', () => autoSlideInterval = setInterval(showNextSlide, 3000));
});













  


