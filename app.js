document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;


  
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
  //Button controls
    prevButton.addEventListener('click', () => {
        moveToPrevSlide();
    });

    nextButton.addEventListener('click', () => {
        moveToNextSlide();
    });

      //Button controls

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        const newTransformValue = -currentIndex * slideWidth; 
        carouselContainer.style.transform = `translateX(${newTransformValue}px)`;
    }

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function moveToPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    updateCarousel();
});



    