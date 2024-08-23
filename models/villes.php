<?php

function getAllVilles()
{
    global $db;

    $getVilles = $db->prepare('SELECT * FROM Villes');
    $getVilles->execute();
    $villes = $getVilles->fetchAll();
    return $villes;
}

function addVille($ville)
{
    global $db;

    $addVille = $db->prepare('INSERT INTO Villes (nom_ville) VALUES (:ville_data)');
    $addVille->bindValue('ville_data', $ville, PDO::PARAM_STR);
    $addVille->execute();
}

function deleteVille($ville_id)
{
    global $db;

    try {
        $deleteVille = $db->prepare('DELETE From Villes  where id = :ville_id');
        $deleteVille->bindValue(':ville_id', $ville_id, PDO::PARAM_INT);
        $deleteVille->execute();
    } catch (PDOException $e) {
        error_log($e->getMessage());
        exit;
    }
}

function updateVille($nom_ville, $ville_id)
{
    global $db;

    $updateVille = $db->prepare('UPDATE Villes set nom_ville = :ville_nom WHERE id = :ville_id');
    $updateVille->bindValue(':ville_nom', $nom_ville, PDO::PARAM_STR);
    $updateVille->bindValue(':ville_id', $ville_id, PDO::PARAM_INT);
    $updateVille->execute();
}
