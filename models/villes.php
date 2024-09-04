<?php
// global $db assure la connexion à la base de données, penser à configurer votre propre connexion $db


// Récupère toutes les villes de la table "Villes".
function getAllVilles()
{
    global $db;
    $getVilles = $db->prepare('SELECT * FROM Villes');
    $getVilles->execute();
    return $getVilles->fetchAll();
}

// Ajoute une nouvelle ville à la table "Villes".
function addVille($ville)
{
    global $db;
    $addVille = $db->prepare('INSERT INTO Villes (nom_ville) VALUES (:ville_data)');
    $addVille->bindValue('ville_data', $ville, PDO::PARAM_STR);
    $addVille->execute();
}

// Supprime une ville de la table "Villes" par ID.
function deleteVille($ville_id)
{
    global $db;

    try {
        $deleteVille = $db->prepare('DELETE From Villes WHERE id = :ville_id');
        $deleteVille->bindValue(':ville_id', $ville_id, PDO::PARAM_INT);
        $deleteVille->execute();
    } catch (PDOException $e) {
        error_log($e->getMessage());
        exit;
    }
}

// Met à jour le nom d'une ville dans la table "Villes" par ID.
function updateVille($nom_ville, $ville_id)
{
    global $db;
    $updateVille = $db->prepare('UPDATE Villes SET nom_ville = :ville_nom WHERE id = :ville_id');
    $updateVille->bindValue(':ville_nom', $nom_ville, PDO::PARAM_STR);
    $updateVille->bindValue(':ville_id', $ville_id, PDO::PARAM_INT);
    $updateVille->execute();
}
?>
