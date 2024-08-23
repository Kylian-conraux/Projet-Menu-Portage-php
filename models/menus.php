<?php

function getAllMenus()
{
    global $db;

    $getMenus = $db->prepare('Select * from Menus');
    $getMenus->execute();
    $menus = $getMenus->fetchAll();
    return $menus;
}

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

function deleteMenus($menu_id)
{
    global $db;

    try {
        $deleteMenu = $db->prepare('DELETE From Menus  where id = :menu_id');
        $deleteMenu->bindValue(':menu_id', $menu_id, PDO::PARAM_STR);
        $deleteMenu->execute();
    } catch (PDOException $e) {

        exit;
    }
}

function updateMenus($menu_id, $entree, $plat, $dessert, $date)
{
    global $db;

    $updateVille = $db->prepare('UPDATE Menus set entree = :entree, plat = :plat, dessert = :dessert, date= :date  WHERE id = :menu_id');
    $updateVille->bindValue(':entree', $entree, PDO::PARAM_STR);
    $updateVille->bindValue(':plat', $plat, PDO::PARAM_STR);
    $updateVille->bindValue(':dessert', $dessert, PDO::PARAM_STR);
    $updateVille->bindValue(':date', $date, PDO::PARAM_STR);
    $updateVille->bindValue(':menu_id', $menu_id, PDO::PARAM_STR);
    $updateVille->execute();
}
