<?php
// commentaire sur une ligne

# commentaire sur une ligne

/* commentaire sur plusieurs ligne
    une autre ligne
    */
define("SERVER", "localhost");
define("DB", "MenusPortage");
define("USER", "kylian");
define("PASSWORD", "Ardagon2901_");
try {
    $db = new PDO('mysql:host=' . SERVER . ';dbname=' . DB, USER, PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
