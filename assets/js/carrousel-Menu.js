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
    { date: "2024-08-08", entree: "sdfsdfsdf", plat: "fsdfsdf", dessert: "qsdqsqssdqsd" }
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

function afficherDansCarrouselMenu() {
    const carrouselItem = document.querySelector(".active");
    const tabJourCarrousel = carrouselItem.querySelectorAll(".Jour");
    let positionLundiSemaineActuelle = recupLundi();

    const semaine = document.querySelector(".semaine");
    const titreSemaine = semaine.querySelector("h5");
    let jourAFormaterLundi = new Date(menus[positionLundiSemaineActuelle].date)
    let jourAFormaterDimanche = new Date(menus[positionLundiSemaineActuelle + 6].date)
    titreSemaine.textContent = "Semaine du " + jourAFormaterLundi.toLocaleDateString() + " au " + jourAFormaterDimanche.toLocaleDateString();

    const optionFormatageJour = { day: 'numeric' };

    let i;
    for (i = 0; i < 7; i++) {
        const jourCarrousel = tabJourCarrousel[i];
        let positionjour = positionLundiSemaineActuelle + i;
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

afficherDansCarrouselMenu();