let currentIndex = 0;
let startX = 0;
let isDragging = false;

function initializeCarousel(startIndex = 0) {
    const carouselInner = document.querySelector('.carrousel-inner');
    const items = document.querySelectorAll('.item-carrousel');
    const totalItems = items.length;
    currentIndex = startIndex;

    const buttonRight = document.querySelector('.carousel-button-right');
    const buttonLeft = document.querySelector('.carousel-button-left');
    const dots = document.querySelectorAll('.dot');

    // Gestion des boutons
    buttonRight.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    buttonLeft.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    // Gestion des dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Gestion du swipe et du drag
    carouselInner.addEventListener('touchstart', handleTouchStart);
    carouselInner.addEventListener('touchmove', handleTouchMove);
    carouselInner.addEventListener('touchend', handleTouchEnd);

    carouselInner.addEventListener('mousedown', handleMouseDown);
    carouselInner.addEventListener('mousemove', handleMouseMove);
    carouselInner.addEventListener('mouseup', handleMouseUp);
    carouselInner.addEventListener('mouseleave', handleMouseLeave);

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        if (!startX) return;
        let currentX = event.touches[0].clientX;
        let diffX = startX - currentX;

        if (diffX > 50) { // swipe vers la gauche
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
            startX = null;
        } else if (diffX < -50) { // swipe vers la droite
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
            startX = null;
        }
    }

    function handleTouchEnd() {
        startX = null;
    }

    function handleMouseDown(event) {
        startX = event.clientX;
        isDragging = true;
    }

    function handleMouseMove(event) {
        if (!isDragging) return;
        let currentX = event.clientX;
        let diffX = startX - currentX;

        if (diffX > 50) { // drag vers la gauche
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
            isDragging = false;
        } else if (diffX < -50) { // drag vers la droite
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
            isDragging = false;
        }
    }

    function handleMouseUp() {
        isDragging = false;
    }

    function handleMouseLeave() {
        isDragging = false;
    }

    function updateCarousel() {
        const items = document.querySelectorAll('.item-carrousel');
        let offset = 0;

        // Calculer l'offset cumulé des items précédents
        for (let i = 0; i < currentIndex; i++) {
            offset += items[i].offsetWidth;
        }

        // Appliquer la translation en utilisant l'offset calculé
        carouselInner.style.transform = `translateX(-${offset}px)`;

        // Mettre à jour l'état des dots
        const currentPath = window.location.pathname;
        if (!(currentPath === '/' || currentPath === '/home')) {

            dots.forEach((dot, index) => {
                dot.classList.toggle('active-dot', index === currentIndex);
            });
        }
    }

    updateCarousel();
}
