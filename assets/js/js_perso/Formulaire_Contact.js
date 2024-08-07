// Sélection des éléments radio pour déterminer pour qui est le formulaire
const radioAutre = document.getElementById("autre");
const radioMoi = document.getElementById("moi");

// Sélection du bloc d'éléments à afficher si "Pour quelqu'un d'autre" est sélectionné
const blockAutrePersonne = document.querySelector('.autrePersonne');

// Sélection des éléments du formulaire pour "quelqu'un d'autre"
const formElementsAutres = {
    nomAutre: document.getElementById("nomA"),
    prenomAutre: document.getElementById("prenomA"),
    telAutre: document.getElementById("TelA"),
    emailAutre: document.getElementById("emailA")
};

// Sélection des éléments du formulaire pour l'inscription générale
const formElementsInsc = {
    rue: document.getElementById("rue")
};

// Sélection de l'élément pour l'adresse de la ville
const adresseVille = document.getElementById("villes");

// Objets de validation pour les éléments du formulaire "quelqu'un d'autre"
const formAutreValide = {
    nomAutre: checkTexte,
    prenomAutre: checkTexte,
    telAutre: checkPhone,
    emailAutre: checkMail
};

// Objets de validation pour les éléments du formulaire d'inscription générale
const formElementsInscValide = {
    rue: checkRue
};

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

// Sélection du bouton de soumission
const submitButton = document.getElementById("submit");

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

    radioAutre.addEventListener('click', () => blockAutrePersonne.style.display = 'block');
    radioMoi.addEventListener('click', () => blockAutrePersonne.style.display = 'none');

    // Ajoute un écouteur d'événements sur le bouton de soumission
    submitButton.addEventListener('click', handleSubmit);
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

// Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire
    let isValide = true; // Initialise une variable de validation

    if (radioAutre.checked) {
        for (const [key, element] of Object.entries(formElementsAutres)) {
            if (!formAutreValide[key](element.value)) {
                isValide = false;
                highlightError(element);
            }
        }
    }

    for (const [key, element] of Object.entries(formElementsInsc)) {
        if (!formElementsInscValide[key](element.value)) {
            isValide = false;
            highlightError(element);
        }
    }

    if (!isValide) {
        shackerFormulaire();
    }
}

// Fonction pour valider les rues
function checkRue(rue) {
    return /^[a-zA-Z0-9\s\-\'\.]+$/.test(rue.trim());
}

// Initialisation des écouteurs d'événements
initEventListeners();



