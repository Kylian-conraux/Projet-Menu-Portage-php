<?php

// Récupère tous les menus de la table "Menus".
function getAllMenus()
{
    global $db;
    $getMenus = $db->prepare('SELECT * FROM Menus');
    $getMenus->execute();
    return $getMenus->fetchAll();
}

// Ajoute un nouveau menu dans la table "Menus".
function addMenus($entree, $plat, $dessert, $date)
{
    global $db;
    $addMenu = $db->prepare('INSERT INTO Menus (id, entree, plat, dessert, date) VALUES (NULL, :entree_menu, :plat_menu, :dessert_menu, :date_menu)');
    $addMenu->bindValue(':entree_menu', $entree, PDO::PARAM_STR);
    $addMenu->bindValue(':plat_menu', $plat, PDO::PARAM_STR);
    $addMenu->bindValue(':dessert_menu', $dessert, PDO::PARAM_STR);
    $addMenu->bindValue(':date_menu', $date, PDO::PARAM_STR);
    $addMenu->execute();
}

// Supprime un menu de la table "Menus" par ID.
function deleteMenus($menu_id)
{
    global $db;
    try {
        $deleteMenu = $db->prepare('DELETE FROM Menus WHERE id = :menu_id');
        $deleteMenu->bindValue(':menu_id', $menu_id, PDO::PARAM_INT);
        $deleteMenu->execute();
    } catch (PDOException $e) {
        error_log($e->getMessage());
        exit;
    }
}

// Met à jour un menu dans la table "Menus" par ID.
function updateMenus($menu_id, $entree, $plat, $dessert, $date)
{
    global $db;
    $updateVille = $db->prepare('UPDATE Menus SET entree = :entree, plat = :plat, dessert = :dessert, date = :date WHERE id = :menu_id');
    $updateVille->bindValue(':entree', $entree, PDO::PARAM_STR);
    $updateVille->bindValue(':plat', $plat, PDO::PARAM_STR);
    $updateVille->bindValue(':dessert', $dessert, PDO::PARAM_STR);
    $updateVille->bindValue(':date', $date, PDO::PARAM_STR);
    $updateVille->bindValue(':menu_id', $menu_id, PDO::PARAM_INT);
    $updateVille->execute();
}
?>
