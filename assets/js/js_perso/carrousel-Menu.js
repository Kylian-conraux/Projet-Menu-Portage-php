/*
    Gestions de l'affichage des menus : 
*/


// Fonction pour afficher un item du carrousel en fonction de la position de la date
function afficherCarouselItem(carrouselItem, positionDate) {
    // Vérifier si la position est valide
    if (positionDate < 0 || positionDate + 6 >= menus.length) {
        console.error("Impossible de récupérer la semaine");
        return;
    }

    // Mise à jour du titre de la semaine
    const weekTitle = carrouselItem.querySelector(".semaine h5");
    weekTitle.textContent = `Du ${new Date(menus[positionDate].date).toLocaleDateString()} au ${new Date(menus[positionDate + 6].date).toLocaleDateString()}`;

    // Affichage des jours de la semaine
    carrouselItem.querySelectorAll(".Jour").forEach((jour, index) => {
        const menu = menus[positionDate + index];
        const date = new Date(menu.date).toLocaleDateString("fr-FR", { day: 'numeric', month: 'long' });

        // Concaténation du contenu existant avec la nouvelle date
        jour.querySelector('h6').textContent += `${date} :`;
        jour.querySelector(".entrée").textContent = menu.entree;
        jour.querySelector(".plat").textContent = menu.plat;
        jour.querySelector(".dessert").textContent = menu.dessert;
    });
}

// Fonction pour afficher les menus dans le carrousel
function afficherDansCarrouselMenu() {
    const semaineActuelle = document.querySelector(".Semaine-actuelle");
    const semainePrecedente = document.querySelector(".Semaine-precedente");
    const semaineProchaine = document.querySelector(".Semaine-suivante");

    const positionLundiActuelle = recupLundi();
    if (positionLundiActuelle === -1) {
        console.error("Impossible de récupérer le lundi actuel");
        return;
    }

    // Afficher la semaine actuelle
    afficherCarouselItem(semaineActuelle, positionLundiActuelle);

    // Afficher la semaine précédente si valide
    const positionLundiSemaineDerniere = positionLundiActuelle - 7;
    if (positionLundiSemaineDerniere >= 0) {
        afficherCarouselItem(semainePrecedente, positionLundiSemaineDerniere);
    } else {
        console.error('Impossible de récupérer la semaine dernière');
    }

    // Afficher la semaine prochaine si valide
    const positionLundiSemaineProchaine = positionLundiActuelle + 7;
    if (positionLundiSemaineProchaine < menus.length) {
        afficherCarouselItem(semaineProchaine, positionLundiSemaineProchaine);
    } else {
        console.error("Impossible de récupérer la semaine prochaine");
    }
}

// Appel de la fonction pour afficher les menus dans le carrousel
afficherDansCarrouselMenu();


document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel(1);
});