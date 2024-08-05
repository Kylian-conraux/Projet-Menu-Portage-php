/*
    Gestions de l'affichage des menus : 
*/

// Tableau contenant les menus avec la date, l'entrée, le plat et le dessert

const menus = [
    { date: "2024-07-22", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-07-23", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-07-24", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-07-25", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-07-26", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-07-27", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-07-28", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-07-29", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-07-30", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-07-31", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-01", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-02", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-03", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-04", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-05", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-06", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-07", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-08", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-09", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-10", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-11", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-12", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-13", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" },
    { date: "2024-08-14", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" }

];

// Sélection de l'élément carrousel dans le document
const carrousel = document.querySelector("carrousel");

// Fonction pour chercher la date d'aujourd'hui dans les menus
function chercherDateAujourdhui() {
    const dateAujourdhui = new Date(); // Obtenir la date d'aujourd'hui
    const jourAujourdhui = dateAujourdhui.getDate(); // Obtenir le jour du mois
    const moisAujourdhui = dateAujourdhui.getMonth(); // Obtenir le mois (0-11)
    let positionJourActuel = -1; // Initialisation de la position du jour actuel

    // Boucle pour parcourir les menus
    for (let i = 0; i < menus.length; i++) {
        const dateMenu = new Date(menus[i].date); // Convertir la date du menu en objet Date
        const jourMenu = dateMenu.getDate(); // Obtenir le jour du menu
        const moisMenu = dateMenu.getMonth(); // Obtenir le mois du menu

        // Comparer le jour et le mois du menu avec ceux d'aujourd'hui
        if (jourMenu == jourAujourdhui && moisMenu == moisAujourdhui) {
            positionJourActuel = i; // Mise à jour de la position si correspondance
            break;
        }
    };

    // Retourner la position du jour actuel ou -1 si non trouvé
    if (positionJourActuel != -1) {
        return positionJourActuel;
    } else {
        console.log("il y a un problème : impossible de récupérer la date d'aujourd'hui");
        return positionJourActuel;
    }
}

// Fonction pour récupérer la position du lundi de la semaine actuelle
function recupLundi() {
    const positionDateActuelle = chercherDateAujourdhui(); // Obtenir la position de la date d'aujourd'hui

    // Vérifier si la date actuelle a été trouvée
    if (positionDateActuelle == -1) {
        console.log("impossible de récupérer la date du jour! ");
    } else {
        const dateJour = new Date(menus[positionDateActuelle].date); // Obtenir l'objet Date de la date actuelle
        const jour = dateJour.getDay(); // Obtenir le jour de la semaine (0-6)

        // Déterminer la position du lundi en fonction du jour de la semaine
        if (jour === 0) { // Dimanche
            console.log("dimanche");
            return positionDateActuelle - 6;
        } else if (jour === 1) { // Lundi
            console.log("lundi");
            return positionDateActuelle;
        } else if (jour === 2) { // Mardi
            console.log("mardi");
            return positionDateActuelle - 1;
        } else if (jour === 3) { // Mercredi
            console.log("mercredi");
            return positionDateActuelle - 2;
        } else if (jour === 4) { // Jeudi
            console.log("jeudi");
            return positionDateActuelle - 3;
        } else if (jour === 5) { // Vendredi
            console.log("vendredi");
            return positionDateActuelle - 4;
        } else if (jour === 6) { // Samedi
            console.log("samedi");
            return positionDateActuelle - 5;
        }
    }
}

// Fonction pour afficher un item du carrousel en fonction de la position de la date
function afficherCarouselItem(carrouselItem, positionDate) {
    const semaine = carrouselItem.querySelector(".semaine");
    const titreSemaine = semaine.querySelector("h5");

    // Calculer la position du dimanche
    let positionDateDimanche = positionDate + 6;

    // Vérifier si les positions sont valides
    if ((positionDate >= menus.length || positionDate < 0) || (positionDateDimanche >= menus.length)) {
        console.log("impossible de récupérer la semaine");
    } else {
        let jourAFormaterLundi = new Date(menus[positionDate].date);
        let jourAFormaterDimanche = new Date(menus[positionDateDimanche].date);
        titreSemaine.textContent = "Semaine du " + jourAFormaterLundi.toLocaleDateString() + " au " + jourAFormaterDimanche.toLocaleDateString();
    }

    const tabJourCarrousel = carrouselItem.querySelectorAll(".Jour");
    const optionFormatageJour = { day: 'numeric' };

    // Boucle pour afficher les jours de la semaine
    for (let i = 0; i < 7; i++) {
        const jourCarrousel = tabJourCarrousel[i];
        let positionjour = positionDate + i;

        // Vérifier si la position du jour est valide
        if (positionjour >= menus.length) {
            console.log("impossible de récupérer les jours de la semaine")
            break;
        } else {
            let menu = menus[positionjour];

            const jourTitre = jourCarrousel.querySelector('h6');
            let dateJour = new Date(menu.date);
            jourTitre.textContent += dateJour.toLocaleDateString("fr-FR", optionFormatageJour) + " :";

            let entree = jourCarrousel.querySelector(".entrée");
            entree.textContent = menu.entree;

            let plat = jourCarrousel.querySelector(".plat");
            plat.textContent = menu.plat;

            let dessert = jourCarrousel.querySelector(".dessert");
            dessert.textContent = menu.dessert;
        }
    }
}

// Fonction pour afficher les menus dans le carrousel
function afficherDansCarrouselMenu() {
    const carrouselItemActive = document.querySelector(".active");
    let positionLundiSemaineActuelle = recupLundi();

    // Vérifier si la position du lundi de la semaine actuelle est valide
    if (positionLundiSemaineActuelle) {
        afficherCarouselItem(carrouselItemActive, positionLundiSemaineActuelle);

        const carrouselItemPasse = document.querySelector(".Semaine-precedente");
        let positionLundiSemaineDerniere = positionLundiSemaineActuelle - 7;

        // Vérifier si la position du lundi de la semaine dernière est valide
        if (positionLundiSemaineDerniere < 0) {
            console.log('impossible de récupérer la semaine dernière');
        } else {
            afficherCarouselItem(carrouselItemPasse, positionLundiSemaineDerniere);
        }

        const carrouselItemProchaine = document.querySelector(".Semaine-suivante");
        let positionLundiSemaineProchaine = positionLundiSemaineActuelle + 7;

        // Vérifier si la position du lundi de la semaine prochaine est valide
        if (positionLundiSemaineProchaine >= menus.length) {
            console.log("impossible de récupérer la semaine prochaine");
        } else {
            afficherCarouselItem(carrouselItemProchaine, positionLundiSemaineProchaine);
        }
    } else {
        console.log("impossible de récupérer le lundi actuelle")
    }
}

// Appel de la fonction pour afficher les menus dans le carrousel
afficherDansCarrouselMenu();

/*
    Gestion du carrousel 
 */

// Initialisation de l'index de la diapositive
let slideIndex = 1;

// Fonction pour afficher les diapositives
function showSlides(n) {
    let slides = document.getElementsByClassName("item-carrousel");
    let dots = document.getElementsByClassName("dot");

    // Ajuster l'index si nécessaire
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    // Masquer toutes les diapositives
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Réinitialiser les points de navigation
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    // Afficher la diapositive courante et activer le point correspondant
    slides[slideIndex].style.display = "flex";
    slides[slideIndex].style.flexDirection = "column";
    dots[slideIndex].className += " active-dot";
}

// Fonction pour naviguer vers une diapositive spécifique
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Fonction pour naviguer entre les diapositives
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Ajouter des gestionnaires d'événements pour les boutons de navigation
document.querySelector(".carousel-button-left").addEventListener("click", function () {
    plusSlides(-1);
});

document.querySelector(".carousel-button-right").addEventListener("click", function () {
    plusSlides(1);
});

// Initialiser le carrousel en affichant la première diapositive
showSlides(slideIndex);
