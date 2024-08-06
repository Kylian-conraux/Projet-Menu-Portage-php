/*
    Gestions de l'affichage des menus : 
*/

// Tableau contenant les menus avec la date, l'entrée, le plat et le dessert

const menus = [
    // Dates initiales
    { date: "2024-07-22", entree: "Salade de chèvre chaud", plat: "Coq au vin", dessert: "Tarte aux pommes" },
    { date: "2024-07-23", entree: "Soupe à l'oignon", plat: "Boeuf bourguignon", dessert: "Crème brûlée" },
    { date: "2024-07-24", entree: "Escargots de Bourgogne", plat: "Ratatouille", dessert: "Fondant au chocolat" },
    { date: "2024-07-25", entree: "Gaspacho", plat: "Filet mignon sauce béarnaise", dessert: "Mousse au chocolat" },
    { date: "2024-07-26", entree: "Salade niçoise", plat: "Cassoulet", dessert: "Tarte au citron" },
    { date: "2024-07-27", entree: "Quiche lorraine", plat: "Boeuf Stroganoff", dessert: "Crêpes Suzette" },
    { date: "2024-07-28", entree: "Rillettes de saumon", plat: "Magret de canard aux cerises", dessert: "Panna cotta" },
    { date: "2024-07-29", entree: "Salade de lentilles", plat: "Poulet basquaise", dessert: "Clafoutis aux cerises" },
    { date: "2024-07-30", entree: "Tartare de tomates et mozzarella", plat: "Blanquette de veau", dessert: "Île flottante" },
    { date: "2024-07-31", entree: "Croustillants de chèvre", plat: "Sauté de porc à la moutarde", dessert: "Tiramisu" },
    { date: "2024-08-01", entree: "Velouté de potiron", plat: "Sole meunière", dessert: "Eclair au chocolat" },
    { date: "2024-08-02", entree: "Pâté en croûte", plat: "Rôti de veau aux morilles", dessert: "Tarte aux fruits rouges" },
    { date: "2024-08-03", entree: "Carpaccio de bœuf", plat: "Côtelettes d'agneau", dessert: "Profiteroles" },
    { date: "2024-08-04", entree: "Assiette de charcuterie", plat: "Osso buco", dessert: "Pêche Melba" },
    { date: "2024-08-05", entree: "Salade de tomates à la provençale", plat: "Chateaubriand", dessert: "Mille-feuille" },
    { date: "2024-08-06", entree: "Foie gras poêlé", plat: "Confit de canard", dessert: "Crumble aux pommes" },
    { date: "2024-08-07", entree: "Salade de poulpe", plat: "Lapin à la moutarde", dessert: "Gâteau au fromage blanc" },
    { date: "2024-08-08", entree: "Caviar d'aubergine", plat: "Bouillabaisse", dessert: "Tarte au chocolat" },
    { date: "2024-08-09", entree: "Salade d'endives et noix", plat: "Grenadin de veau", dessert: "Macarons" },
    { date: "2024-08-10", entree: "Oeufs cocotte", plat: "Paella", dessert: "Flan pâtissier" },
    { date: "2024-08-11", entree: "Blinis au saumon", plat: "Choucroute garnie", dessert: "Sorbet au citron" },
    { date: "2024-08-12", entree: "Tartelette au chèvre et miel", plat: "Pâtes aux truffes", dessert: "Soufflé au Grand Marnier" },
    { date: "2024-08-13", entree: "Moules marinières", plat: "Coq au Riesling", dessert: "Riz au lait" },
    { date: "2024-08-14", entree: "Velouté de champignons", plat: "Curry de légumes", dessert: "Pêches rôties au miel" },

    // Nouvelles dates
    { date: "2024-08-15", entree: "Salade de betteraves", plat: "Gratin dauphinois", dessert: "Gâteau au chocolat" },
    { date: "2024-08-16", entree: "Tartare de saumon", plat: "Boeuf Wellington", dessert: "Crème caramel" },
    { date: "2024-08-17", entree: "Salade de concombres", plat: "Côtelettes de porc", dessert: "Charlotte aux fruits" },
    { date: "2024-08-18", entree: "Terrine de lapin", plat: "Risotto aux champignons", dessert: "Tarte tatin" },
    { date: "2024-08-19", entree: "Salade de roquette et parmesan", plat: "Cabillaud en croûte", dessert: "Mille-feuille à la vanille" },
    { date: "2024-08-20", entree: "Pâté de campagne", plat: "Filet de boeuf en croûte", dessert: "Pouding au pain" },
    { date: "2024-08-21", entree: "Aumônières de chèvre", plat: "Poulet aux morilles", dessert: "Baba au rhum" },
    { date: "2024-08-22", entree: "Gaspacho de concombre", plat: "Gratin de courgettes", dessert: "Clafoutis aux poires" },
    { date: "2024-08-23", entree: "Bruschetta", plat: "Magret de canard aux figues", dessert: "Tiramisu aux fruits rouges" },
    { date: "2024-08-24", entree: "Salade de pâtes", plat: "Lamb chops with mint sauce", dessert: "Crêpes au Nutella" },
    { date: "2024-08-25", entree: "Céviche de dorade", plat: "Rôti de porc aux pommes", dessert: "Gâteau au fromage" },
    { date: "2024-08-26", entree: "Feuilletés au saumon", plat: "Chili con carne", dessert: "Brownies" },
    { date: "2024-08-27", entree: "Chou farci", plat: "Poisson grillé", dessert: "Tarte au chocolat blanc" },
    { date: "2024-08-28", entree: "Salade de quinoa", plat: "Boeuf bourguignon", dessert: "Panna cotta aux fruits" },
    { date: "2024-08-29", entree: "Soupe de carottes", plat: "Côtelettes d'agneau aux herbes", dessert: "Gâteau au yaourt" },
    { date: "2024-08-30", entree: "Salade de poulet", plat: "Rôti de veau", dessert: "Tarte au citron meringuée" },
    { date: "2024-08-31", entree: "Rillettes de canard", plat: "Blanquette de veau", dessert: "Mousse au chocolat blanc" },

    { date: "2024-09-01", entree: "Salade d'aubergines", plat: "Pâtes aux fruits de mer", dessert: "Éclair au café" },
    { date: "2024-09-02", entree: "Velouté de courgettes", plat: "Côtelettes de porc grillées", dessert: "Soufflé au chocolat" },
    { date: "2024-09-03", entree: "Salade de lentilles vertes", plat: "Sauté de veau", dessert: "Tarte aux poires" },
    { date: "2024-09-04", entree: "Gravlaks", plat: "Filet de sole au beurre blanc", dessert: "Clafoutis aux pommes" },
    { date: "2024-09-05", entree: "Salade de tomates et mozzarella", plat: "Boeuf au curry", dessert: "Crêpes au caramel" },
    { date: "2024-09-06", entree: "Tarte au chèvre et aux herbes", plat: "Poulet rôti", dessert: "Tartelette au citron" },
    { date: "2024-09-07", entree: "Moules à la crème", plat: "Côte de boeuf grillée", dessert: "Pêches rôties" },
    { date: "2024-09-08", entree: "Terrine de légumes", plat: "Côtelettes d'agneau à la moutarde", dessert: "Crème brûlée" },
    { date: "2024-09-09", entree: "Salade de pommes de terre", plat: "Choucroute", dessert: "Mousse au café" },
    { date: "2024-09-10", entree: "Saucisson brioché", plat: "Filet de porc aux pruneaux", dessert: "Tarte aux fraises" },
    { date: "2024-09-11", entree: "Ceviche de crevettes", plat: "Boeuf bourguignon", dessert: "Gâteau aux noix" },
    { date: "2024-09-12", entree: "Salade de haricots verts", plat: "Rôti de bœuf", dessert: "Éclair à la vanille" },
    { date: "2024-09-13", entree: "Tarte à l'oignon", plat: "Poisson en papillote", dessert: "Mille-feuille aux fruits" },
    { date: "2024-09-14", entree: "Salade de roquette et parmesan", plat: "Ratatouille", dessert: "Panna cotta aux fruits rouges" },
    { date: "2024-09-15", entree: "Salade de betteraves", plat: "Gratin dauphinois", dessert: "Gâteau au chocolat" },
    { date: "2024-09-16", entree: "Tartare de saumon", plat: "Boeuf Wellington", dessert: "Crème caramel" },
    { date: "2024-09-17", entree: "Salade de concombres", plat: "Côtelettes de porc", dessert: "Charlotte aux fruits" },
    { date: "2024-09-18", entree: "Terrine de lapin", plat: "Risotto aux champignons", dessert: "Tarte tatin" },
    { date: "2024-09-19", entree: "Salade de roquette et parmesan", plat: "Cabillaud en croûte", dessert: "Mille-feuille à la vanille" },
    { date: "2024-09-20", entree: "Pâté de campagne", plat: "Filet de boeuf en croûte", dessert: "Pouding au pain" },
    { date: "2024-09-21", entree: "Aumônières de chèvre", plat: "Poulet aux morilles", dessert: "Baba au rhum" },
    { date: "2024-09-22", entree: "Gaspacho de concombre", plat: "Gratin de courgettes", dessert: "Clafoutis aux poires" },
    { date: "2024-09-23", entree: "Bruschetta", plat: "Magret de canard aux figues", dessert: "Tiramisu aux fruits rouges" },
    { date: "2024-09-24", entree: "Salade de pâtes", plat: "Lamb chops with mint sauce", dessert: "Crêpes au Nutella" },
    { date: "2024-09-25", entree: "Céviche de dorade", plat: "Rôti de porc aux pommes", dessert: "Gâteau au fromage" },
    { date: "2024-09-26", entree: "Feuilletés au saumon", plat: "Chili con carne", dessert: "Brownies" },
    { date: "2024-09-27", entree: "Chou farci", plat: "Poisson grillé", dessert: "Tarte au chocolat blanc" },
    { date: "2024-09-28", entree: "Salade de quinoa", plat: "Boeuf bourguignon", dessert: "Panna cotta aux fruits" },
    { date: "2024-09-29", entree: "Soupe de carottes", plat: "Côtelettes d'agneau aux herbes", dessert: "Gâteau au yaourt" },
    { date: "2024-09-30", entree: "Salade de poulet", plat: "Rôti de veau", dessert: "Tarte au citron meringuée" },

    { date: "2024-10-01", entree: "Rillettes de canard", plat: "Blanquette de veau", dessert: "Mousse au chocolat blanc" },
    { date: "2024-10-02", entree: "Salade d'aubergines", plat: "Pâtes aux fruits de mer", dessert: "Éclair au café" },
    { date: "2024-10-03", entree: "Velouté de courgettes", plat: "Côtelettes de porc grillées", dessert: "Soufflé au chocolat" },
    { date: "2024-10-04", entree: "Salade de lentilles vertes", plat: "Sauté de veau", dessert: "Tarte aux poires" },
    { date: "2024-10-05", entree: "Gravlaks", plat: "Filet de sole au beurre blanc", dessert: "Clafoutis aux pommes" },
    { date: "2024-10-06", entree: "Salade de tomates et mozzarella", plat: "Boeuf au curry", dessert: "Crêpes au caramel" },
    { date: "2024-10-07", entree: "Tarte au chèvre et aux herbes", plat: "Poulet rôti", dessert: "Tartelette au citron" },
    { date: "2024-10-08", entree: "Moules à la crème", plat: "Côte de boeuf grillée", dessert: "Pêches rôties" },
    { date: "2024-10-09", entree: "Terrine de légumes", plat: "Côtelettes d'agneau à la moutarde", dessert: "Crème brûlée" },
    { date: "2024-10-10", entree: "Salade de pommes de terre", plat: "Choucroute", dessert: "Mousse au café" },
    { date: "2024-10-11", entree: "Saucisson brioché", plat: "Filet de porc aux pruneaux", dessert: "Tarte aux fraises" },
    { date: "2024-10-12", entree: "Ceviche de crevettes", plat: "Boeuf bourguignon", dessert: "Gâteau aux noix" },
    { date: "2024-10-13", entree: "Salade de haricots verts", plat: "Rôti de bœuf", dessert: "Éclair à la vanille" },
    { date: "2024-10-14", entree: "Tarte à l'oignon", plat: "Poisson en papillote", dessert: "Mille-feuille aux fruits" }
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
