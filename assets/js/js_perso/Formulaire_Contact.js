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
const buttRepasList = document.querySelectorAll(".buttRepas");
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

// Sélection du bouton de soumission
const submitButton = document.getElementById("submit");

// Fonction d'initialisation pour ajouter les écouteurs d'événements
function initEventListeners() {

    //radioAutre.addEventListener('click', () => blockAutrePersonne.style.display = 'block');
    //radioMoi.addEventListener('click', () => blockAutrePersonne.style.display = 'none');
    handleButtonClick(buttRepasList, "buttRepas", "repas");
    // Ajoute un écouteur d'événements sur le bouton de soumission
    submitButton.addEventListener('click', handleSubmit);
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

const villeAutre = document.querySelector(".villeAutre");

adresseVille.addEventListener("change", function (event) {
    console.log(event.target.value);
    let isAutreVille = event.target.value === "Autre";
    if (isAutreVille) {
        villeAutre.style.display = "block";
        if (villeAutre.classList.contains("d-none")) {
            villeAutre.classList.remove('d-none');
        }
    } else {
        if (!(villeAutre.classList.contains("d-none"))) {
            villeAutre.classList.add("d-none");
            villeAutre.style.display = "none";
        }
    }
});

function handleButtonClick(buttonList, buttonType, buttonLabel) {
    buttonList.forEach((button, index) => {
        button.addEventListener('click', event => {
            event.preventDefault();
            console.log(`tu cliques sur le bouton : ${index + 1} ${buttonLabel}`);
            if (!button.classList.contains("selected")) {
                document.querySelector(`.${buttonType}.selected`).classList.remove("selected");
                button.classList.add("selected");
            }
        });
    });
}