/*
    Gestions de l'affichage des menus : 
*/

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
    { date: "2024-08-11", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" }
];

const carrousel = document.querySelector("carrousel");

function chercherDateAujourdhui() {
    const dateAujourdhui = new Date();
    const jourAujourdhui = dateAujourdhui.getDate();
    const moisAujourdhui = dateAujourdhui.getMonth()
    let positionJourActuel = -1;
    let i;
    for (i = 0; i < menus.length; i++) {
        const dateMenu = new Date(menus[i].date);
        const jourMenu = dateMenu.getDate()
        const moisMenu = dateMenu.getMonth();
        if (jourMenu == jourAujourdhui && moisMenu == moisAujourdhui) {
            positionJourActuel = i;
            break;
        }
    };

    if (positionJourActuel != -1) {
        return positionJourActuel;
    }
    else {
        console.log("il y a un problème : impossible de récupérer la date d'aujourd'hui");
    }
}

function recupLundi() {
    const positionDateActuelle = chercherDateAujourdhui();

    const dateJour = new Date(menus[positionDateActuelle].date);
    const jour = dateJour.getDay();

    if (jour === 0) {//dimanche

        console.log("dimanche");
        return positionDateActuelle - 6;

    } else if (jour === 1) {//lundi

        console.log("lundi");
        return positionDateActuelle;

    } else if (jour === 2) {//mardi

        console.log("mardi");
        return positionDateActuelle - 1;

    } else if (jour === 3) {//mercredi

        console.log("mercredi");
        return positionDateActuelle - 2;

    } else if (jour === 4) {//jeudi

        console.log("jeudi");
        return positionDateActuelle - 3;

    } else if (jour === 5) {//vendredi

        console.log("vendredi");
        return positionDateActuelle - 4;

    } else {//samedi

        console.log("samedi");
        return positionDateActuelle - 5;
    }
}

function afficherCarouselItem(carrouselItem, positionDate) {

    const semaine = carrouselItem.querySelector(".semaine");
    const titreSemaine = semaine.querySelector("h5");
    let jourAFormaterLundi = new Date(menus[positionDate].date);
    let jourAFormaterDimanche = new Date(menus[positionDate + 6].date);
    titreSemaine.textContent = "Semaine du " + jourAFormaterLundi.toLocaleDateString() + " au " + jourAFormaterDimanche.toLocaleDateString();

    const tabJourCarrousel = carrouselItem.querySelectorAll(".Jour");

    const optionFormatageJour = { day: 'numeric' };
    let i;
    for (i = 0; i < 7; i++) {
        const jourCarrousel = tabJourCarrousel[i];
        let positionjour = positionDate + i;
        let menu = menus[positionjour];

        const jourTitre = jourCarrousel.querySelector('h6');
        let dateJour = new Date(menu.date);
        jourTitre.textContent += dateJour.toLocaleDateString("fr-FR", optionFormatageJour) + " :";

        let entree = jourCarrousel.querySelector(".entrée");
        entree.textContent = menu.entree;

        let plat = jourCarrousel.querySelector(".plat");
        plat.textContent = menu.plat;

        let dessert = jourCarrousel.querySelector(".dessert");
        dessert.textContent = menu.dessert

    }
}

function afficherDansCarrouselMenu() {
    const carrouselItemActive = document.querySelector(".active");
    let positionLundiSemaineActuelle = recupLundi();

    afficherCarouselItem(carrouselItemActive, positionLundiSemaineActuelle);

    const carrouselItemPasse = document.querySelector(".Semaine-precedente");
    let positionLundiSemaineDerniere = positionLundiSemaineActuelle - 7;

    afficherCarouselItem(carrouselItemPasse, positionLundiSemaineDerniere);

    const carrouselItemProchaine = document.querySelector(".Semaine-suivante");
    let positionLundiSemaineProchaine = positionLundiSemaineActuelle + 7;

    afficherCarouselItem(carrouselItemProchaine, positionLundiSemaineProchaine);

}

afficherDansCarrouselMenu();


/*
    gestion du carrousel 
 */

let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("item-carrousel");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    slides[slideIndex].style.display = "flex";
    slides[slideIndex].style.flexDirection = "column";
    dots[slideIndex].className += " active-dot";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.querySelector(".carousel-button-left").addEventListener("click", function () {
    plusSlides(-1);
});

document.querySelector(".carousel-button-right").addEventListener("click", function () {
    plusSlides(1);
});

// Initialize the carousel
showSlides(slideIndex)