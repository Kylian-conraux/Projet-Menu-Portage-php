// Sélection des éléments du DOM
const submit = document.getElementById("submit");
const formElements = {
    nom: document.getElementById("nom"),
    prenom: document.getElementById("prénom"),
    tel: document.getElementById("Tel"),
    mail: document.getElementById("email"),
    formulaire: document.getElementById("formulaire")
};

// Association des fonctions de validation avec les champs de formulaire
const validators = {
    nom: checkTexte,
    prenom: checkTexte,
    tel: checkPhone,
    mail: checkMail
};

// Ajout d'un écouteur d'événement pour le clic sur le bouton de soumission
submit.addEventListener("click", (event) => {
    // Empêcher le comportement par défaut du formulaire (soumission de la page)
    event.preventDefault();
    let isFormValid = true; // Indicateur de validation globale du formulaire
    
    // Parcourir chaque élément du formulaire
    for (const [key, element] of Object.entries(formElements)) {
        // Ignorer l'élément 'formulaire' lui-même
        if (key === 'formulaire') continue;

        // Validation de l'élément courant
        const isValid = validators[key](element.value);
        if (!isValid) {
            isFormValid = false; // Si une validation échoue, le formulaire est invalide
            highlightError(element);
        }
    }

    // Si le formulaire contient des erreurs, déclencher l'animation de secousse
    if (!isFormValid) {
        shackerFormulaire();
    }
});

// Fonction de validation pour les champs texte (nom, prénom)
function checkTexte(texte) {
    // Vérifie si le texte contient uniquement des lettres (a-z, A-Z)
    return /^[a-zA-Z]+$/.test(texte.trim());
}

// Fonction de validation pour les adresses e-mail
function checkMail(mail) {
    // Vérifie si l'adresse e-mail est valide
    return /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/.test(mail.trim());
}

// Fonction de validation pour les numéros de téléphone
function checkPhone(numero) {
    // Vérifie si le numéro de téléphone contient exactement 10 chiffres
    return /^[0-9]{10}$/.test(numero.trim());
}

// Fonction pour animer le formulaire en cas d'erreur de validation
function shackerFormulaire() {
    // Ajouter la classe 'animer' pour déclencher l'animation CSS
    formElements.formulaire.classList.add("animer");
    // Retirer la classe 'animer' après 1 seconde pour arrêter l'animation
    setTimeout(() => {
        formElements.formulaire.classList.remove("animer");
    }, 1000);
}

// Fonction pour surligner les erreurs dans le formulaire
function highlightError(element) {
    element.style.backgroundColor = 'lightcoral';
    setTimeout(() => {
        element.style.backgroundColor = "#f0eeee";
    }, 1000);
    element.scrollIntoView({
        block: 'center',
        behavior: "smooth"
    });
}

