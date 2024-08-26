/**
 * Calcul la somme final d'une commande de repas
 */


// Sélection des boutons de formule
const radioFormuleComplète = document.getElementById("formule-complète");
const radioFormuleSimple = document.getElementById("formule-simple");

// Sélection des éléments des suppléments
const supplements = {
    fromage: document.getElementById("fromage"),
    soupe: document.getElementById("soupe"),
    baguette: document.getElementById("baguette")
};

// Sélection des boutons de sélection de personnes et de repas
const buttPersList = document.querySelectorAll(".buttPers");
const buttRepasList = document.querySelectorAll(".buttRepas");


// Fonction pour actualiser le prix
function actualiserPrix() {
    const nbPersonne = document.querySelector(".buttPers.selected").value;
    const nbRepas = document.querySelector(".buttRepas.selected").value;
    const prix = calculerCoutTotal(nbPersonne, nbRepas);
    document.querySelector(".prix").innerHTML = `Prix : ${prix} €`;
}

// Fonction pour calculer le coût total
function calculerCoutTotal(nbPersonne, nbRepas) {
    const nbRepasTotal = nbPersonne * nbRepas;
    let tarifRepas;

    if (radioFormuleComplète.checked) {
        tarifRepas = (nbRepasTotal <= 3 ? 10.55 : 9.95) * nbRepasTotal;
    } else {
        tarifRepas = (nbRepasTotal <= 3 ? 7.60 : 6.75) * nbRepasTotal;
    }

    if (supplements.fromage.checked) {
        tarifRepas += nbRepasTotal * (nbRepasTotal <= 3 ? 1.10 : 1.05);
    }
    if (supplements.soupe.checked) {
        tarifRepas += nbRepasTotal * (nbRepasTotal <= 3 ? 1.10 : 1.05);
    }
    if (supplements.baguette.checked) {
        tarifRepas += nbRepasTotal * 0.80;
    }

    return parseFloat(tarifRepas.toFixed(2));
}

// Gestionnaire d'événements pour les boutons de sélection de personnes et de repas
function handleButtonClick(buttonList, buttonType, buttonLabel) {
    buttonList.forEach((button, index) => {
        button.addEventListener('click', event => {
            event.preventDefault();
            console.log(`tu cliques sur le bouton : ${index + 1} ${buttonLabel}`);
            if (!button.classList.contains("selected")) {
                document.querySelector(`.${buttonType}.selected`).classList.remove("selected");
                button.classList.add("selected");
            }
            actualiserPrix();
        });
    });
}
// Fonction d'initialisation pour ajouter les écouteurs d'événements
function initEventListeners() {
    [radioFormuleComplète, radioFormuleSimple].forEach(radio => {
        radio.addEventListener("click", actualiserPrix);
    });

    Object.values(supplements).forEach(element => {
        element.addEventListener("click", actualiserPrix);
    });


    handleButtonClick(buttPersList, "buttPers", "personne(s)");
    handleButtonClick(buttRepasList, "buttRepas", "repas");
}

// Initialisation des écouteurs d'événements
initEventListeners();