let currentIndex = 0;
let startX = 0;
let isDragging = false;

// Fonction pour initialiser le carrousel à un index de départ donné
function initializeCarousel(startIndex = 0) {
    const carouselInner = document.querySelector('.carrousel-inner'); // Conteneur des items du carrousel
    const items = document.querySelectorAll('.item-carrousel'); // Tous les items du carrousel
    const totalItems = items.length; // Nombre total d'items dans le carrousel
    currentIndex = startIndex; // Définir l'index de départ du carrousel

    const buttonRight = document.querySelector('.carousel-button-right'); // Bouton pour avancer le carrousel à droite
    const buttonLeft = document.querySelector('.carousel-button-left'); // Bouton pour reculer le carrousel à gauche
    const dots = document.querySelectorAll('.dot'); // Sélecteurs de position (dots) du carrousel

    // Gestion des boutons droite et gauche pour naviguer dans le carrousel
    buttonRight.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems; // Avancer l'index, revenir au premier élément si à la fin
        updateCarousel(); // Mettre à jour l'affichage du carrousel
    });

    buttonLeft.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Reculer l'index, revenir au dernier élément si au début
        updateCarousel();
    });

    // Gestion des "dots" pour naviguer directement en cliquant sur un point
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index; // Mettre à jour l'index courant en fonction du dot cliqué
            updateCarousel();
        });
    });

    // Gestion du swipe tactile (début du toucher)
    carouselInner.addEventListener('touchstart', handleTouchStart);
    // Gestion du mouvement tactile
    carouselInner.addEventListener('touchmove', handleTouchMove);
    // Fin du toucher tactile
    carouselInner.addEventListener('touchend', handleTouchEnd);

    // Gestion du drag à la souris (début du drag)
    carouselInner.addEventListener('mousedown', handleMouseDown);
    // Mouvement de la souris pendant le drag
    carouselInner.addEventListener('mousemove', handleMouseMove);
    // Fin du drag à la souris
    carouselInner.addEventListener('mouseup', handleMouseUp);
    // Annulation du drag si la souris quitte la zone
    carouselInner.addEventListener('mouseleave', handleMouseLeave);

    // Début du swipe tactile
    function handleTouchStart(event) {
        startX = event.touches[0].clientX; // Enregistrer la position de départ du toucher
    }

    // Gestion du mouvement lors d'un swipe
    function handleTouchMove(event) {
        if (!startX) return; // Si le toucher n'a pas démarré, ne rien faire
        let currentX = event.touches[0].clientX; // Récupérer la position actuelle du toucher
        let diffX = startX - currentX; // Calculer la différence entre la position de départ et actuelle

        // Déplacement vers la gauche
        if (diffX > 50) {
            currentIndex = (currentIndex + 1) % totalItems; // Avancer dans le carrousel
            updateCarousel();
            startX = null; // Réinitialiser la position de départ
        } 
        // Déplacement vers la droite
        else if (diffX < -50) {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Reculer dans le carrousel
            updateCarousel();
            startX = null; // Réinitialiser la position de départ
        }
    }

    // Fin du toucher tactile
    function handleTouchEnd() {
        startX = null; // Réinitialiser la position de départ
    }

    // Début du drag à la souris
    function handleMouseDown(event) {
        startX = event.clientX; // Enregistrer la position initiale de la souris
        isDragging = true; // Activer le mode drag
    }

    // Gestion du mouvement de la souris pendant le drag
    function handleMouseMove(event) {
        if (!isDragging) return; // Si pas en mode drag, ne rien faire
        let currentX = event.clientX; // Récupérer la position actuelle de la souris
        let diffX = startX - currentX; // Calculer la différence entre la position initiale et actuelle

        // Drag vers la gauche
        if (diffX > 50) {
            currentIndex = (currentIndex + 1) % totalItems; // Avancer dans le carrousel
            updateCarousel();
            isDragging = false; // Désactiver le mode drag
        } 
        // Drag vers la droite
        else if (diffX < -50) {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Reculer dans le carrousel
            updateCarousel();
            isDragging = false; // Désactiver le mode drag
        }
    }

    // Fin du drag à la souris
    function handleMouseUp() {
        isDragging = false; // Désactiver le mode drag
    }

    // Annuler le drag si la souris quitte l'élément
    function handleMouseLeave() {
        isDragging = false; // Désactiver le mode drag
    }

    // Fonction pour mettre à jour l'affichage du carrousel
    function updateCarousel() {
        const items = document.querySelectorAll('.item-carrousel'); // Récupérer tous les items du carrousel
        let offset = 0; // Initialiser l'offset à zéro

        // Calculer l'offset total en fonction des items précédents
        for (let i = 0; i < currentIndex; i++) {
            offset += items[i].offsetWidth; // Ajouter la largeur de chaque item à l'offset
        }

        // Appliquer la transformation en translation horizontale pour centrer l'item courant
        carouselInner.style.transform = `translateX(-${offset}px)`;

        // Mettre à jour l'état des "dots" (points de navigation)
        const currentPath = window.location.pathname; 
        if (!(currentPath === '/' || currentPath === '/home')) {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active-dot', index === currentIndex); // Activer le dot correspondant à l'index actuel
            });
        }
    }

    updateCarousel(); // Mettre à jour le carrousel au chargement
}
