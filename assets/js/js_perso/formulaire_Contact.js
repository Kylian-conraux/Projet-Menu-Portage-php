const formElementsInsc = {
    rue: document.getElementById("rue")
};

// Sélection de l'élément pour l'adresse de la ville
const adresseVille = document.getElementById("villes");

// Objets de validation pour les éléments du formulaire d'inscription générale
const formElementsInscValide = {
    rue: checkRue
};

// Sélection du bouton de soumission
const submitButton = document.getElementById("submit");

// Fonction d'initialisation pour ajouter les écouteurs d'événements
function initEventListeners() {
    // Ajoute un écouteur d'événements sur le bouton de soumission
    submitButton.addEventListener('click', handleSubmit);
}


// Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire
    let isValide = true; // Initialise une variable de validation

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

//slider
const repasSlider = document.querySelector(['#rangSlider']);
repasSlider.insertAdjacentHTML('afterend', `
    <output>${repasSlider.value} repas</output>
  `);


document.getElementById("rangSlider").addEventListener('input', e => {
    const input = e.target;
    const output = input.nextElementSibling;
    if (output) {
        output.textContent = input.value + " repas";
    }
});
