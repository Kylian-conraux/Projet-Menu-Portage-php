
/*
    Gestion du carrousel 
 */

let currentIndex = 0;

function initializeCarousel(startIndex = 0) {
    const carouselInner = document.querySelector('.carrousel-inner');
    const items = document.querySelectorAll('.item-carrousel');
    const totalItems = items.length;
    currentIndex = startIndex;

    const buttonRight = document.querySelector('.carousel-button-right');
    const buttonLeft = document.querySelector('.carousel-button-left');
    const dots = document.querySelectorAll('.dot');

    buttonRight.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    buttonLeft.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;

        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active-dot');
            } else {
                dot.classList.remove('active-dot');
            }
        });
    }

    updateCarousel();
}
