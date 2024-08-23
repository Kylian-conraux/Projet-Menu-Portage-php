<?php

session_start();
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

switch ($page) {
        /* HOME */
    case 'home':
        include 'structures/front/pages/home.php';
        break;

    case 'aides-financieres':
        include 'structures/front/pages/aides-financieres.php';
        break;

        /*Contact*/
    case 'contact':
        include 'structures/front/pages/contact.php';
        break;

    case 'equipe':
        include 'structures/front/pages/equipe.php';
        break;


    case 'menus':
        include 'structures/front/pages/menus.php';
        break;

    case 'modalites':
        include 'structures/front/pages/modalites.php';
        break;

    default:
        include 'structures/front/pages/home.php';
        break;
}
