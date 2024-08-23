<?php
include "assets/include/db.php";

/**
 * Ce bloc sera chargé de faire une requête dans la base de données de Menu Portage
 * afin de récupérer la liste des menus
 */
date_default_timezone_set('Europe/Paris');

// Initialiser la date actuelle
$aujourdhui = new DateTime();
$aujourdhuiFormater = $aujourdhui->format("Y-m-d");

// Vérifier si la date existe dans la base de données
$checkDate = $db->query("SELECT date FROM Menus WHERE date = '" . $aujourdhuiFormater . "'");
/**
 * ça aurait pu être aussi ça :
 * $checkDate = $db->query("SELECT date FROM Menus WHERE date = CURDATE()");
 */

if ($checkDate && $checkDate->fetch(PDO::FETCH_ASSOC)) {
    // Fonction pour obtenir les dates de début (lundi) et de fin (dimanche) de la semaine
    function getWeekDates(DateTime $date, $weekModifier) {
        $lundi = (clone $date)->modify("Monday $weekModifier");
        $dimanche = (clone $date)->modify("Sunday $weekModifier");
        return [
            'lundi' => $lundi->format("Y-m-d"),
            'dimanche' => $dimanche->format("Y-m-d"),
        ];
    }

    // Obtenir les dates de la semaine actuelle, dernière semaine et semaine prochaine
    $currentWeek = getWeekDates($aujourdhui, 'this week');
    $lastWeek = getWeekDates($aujourdhui, 'last week');
    $nextWeek = getWeekDates($aujourdhui, 'next week');

    // Requêtes pour les menus des trois semaines
    $thisWeek = $db->query("SELECT * FROM Menus WHERE date BETWEEN '" . $currentWeek['lundi'] . "' AND '" . $currentWeek['dimanche'] . "'");
    $lastWeek = $db->query("SELECT * FROM Menus WHERE date BETWEEN '" . $lastWeek['lundi'] . "' AND '" . $lastWeek['dimanche'] . "'");
    $nextWeek = $db->query("SELECT * FROM Menus WHERE date BETWEEN '" . $nextWeek['lundi'] . "' AND '" . $nextWeek['dimanche'] . "'");

    // Récupérer les résultats
    $menusSemaineActuelle = $thisWeek->fetchAll(PDO::FETCH_ASSOC);
    $menusSemaineDerniere = $lastWeek->fetchAll(PDO::FETCH_ASSOC);
    $menusSemaineProchaine = $nextWeek->fetchAll(PDO::FETCH_ASSOC);

    // Structurer la réponse
    $response = [
        'semaineActuelle' => $menusSemaineActuelle,
        'semaineDerniere' => $menusSemaineDerniere,
        'semaineProchaine' => $menusSemaineProchaine,
    ];

    // Afficher les résultats pour la semaine actuelle (exemple)
    foreach ($menusSemaineActuelle as $menu) {
        echo "<p>" . htmlspecialchars($menu["date"]) . "</p>";
    }

    // Pour envoyer la réponse en JSON au JavaScript
    // header('Content-Type: application/json');
    // echo json_encode($response);
} else {
    echo "Aucun menu trouvé pour la date actuelle.";
}
?>
