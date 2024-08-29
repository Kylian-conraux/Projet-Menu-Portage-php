<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" value="" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <link rel="stylesheet" href="assets/css/main.css" />
    <link rel="stylesheet" href="assets/css/formulaire_Contact_simulateur.css">
    <link rel='stylesheet' href='https://unpkg.com/range-slider-element@latest/dist/styles.css'>
    <link rel="icon" href="assets/css/images/logo_final.svg" type="image/svg">
    <title>Contact Menu Portage | Croustillance</title>
</head>

<body class="no-sidebar is-preload">
    <div id="page-wrapper">

        <!-- Header -->
        <?php
        include 'structures/front/composantes/header.php';
        ?>

        <!-- Main -->
        <section id="main">
            <div class="container">
                <div id="content">
                    <section>
                        <form id="formulaire" method="post" action="#">
                            <h5>Contact : </h5><br>
                            <div class="row">
                                <div class="col-6 col-12-small">
                                    <input id="nom" name="Fname" placeholder="Nom" type="text" />
                                </div>
                                <div class="col-6 col-12-small">
                                    <input id="prénom" name="Lname" placeholder="Prénom" type="text" />
                                </div>
                                <div class="col-6 col-12-small">
                                    <input id="Tel" name="Tel" placeholder="Téléphone" type="text" />
                                </div>
                                <div class="col-6 col-12-small">
                                    <input id="email" name="email" placeholder="Email" type="text" />
                                </div>
                                <h5>Informations complémentaires : </h5>
                                <div class="col-12">
                                    <textarea name="message" placeholder="Ville, allergènes, remarques ..."></textarea>
                                </div>

                                <h5>Nombres de repas : </h5>
                                <div class="col-12  center slider">
                                    <range-slider min=1 max=14 step=1 value="7" id="rangSlider"></range-slider>
                                </div>


                                <!--  <div class="formule"></div> -->
                            </div><br>

                            <!-- Sélection qui est le destinataire -->
                            <div class="d-none">
                                <h3>Pour qui : </h3>
                                <div class="row radio">
                                    <div class="col-6 col-12-small">
                                        <div class="row">
                                            <input type="radio" id="moi" name="qui" checked="true">
                                            <label for="moi">Pour moi</label>
                                        </div>
                                    </div>
                                    <div class="col-6 col-12-small">
                                        <div class="row">
                                            <input type="radio" id="autre" name="qui">
                                            <label for="autre">Pour quelqu'un d'autre</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--
                                    Cas à traiter plus tard
                                    <div class="col-4 col-12-small">
                                        <input type="checkbox" id="pleins" name="pleins">
                                        <label for="pleins">Pour plusieurs personnes</label>
                                    </div>
                                    -->


                            <!-- si autre personne est sélectionné -->
                            <div class="autrePersonne row">
                                <div class="row">
                                    <div class="col-6 col-12-small">
                                        <input id="nomA" name="Fname" placeholder="Nom" type="text" />
                                    </div>
                                    <div class="col-6 col-12-small">
                                        <input id="prenomA" name="Lname" placeholder="Prénom" type="text" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-6 col-12-small">
                                        <input id="TelA" name="Tel" placeholder="Téléphone" type="text" />
                                    </div>
                                    <div class="col-6 col-12-small">
                                        <input id="emailA" name="email" placeholder="Email" type="text" />
                                    </div>
                                </div>
                                <div class="formule"></div>
                            </div>

                            <!-- A traiter plus tard
                                <div class="col-12 autresPersonnes">-->
                            <!-- si plusieurs personne est sélectionné -->
                            <!-- <div>
                                        <input id="nbPersonnes" name="nbPersonnes" placeholder="Combien ?"
                                            type="text" />
                                    </div>
                                    <ul class="listePersonnes"> -->
                            <!-- Liste à construire via js et dépendant du nombre de personnes -->
                            <!--</ul>

                                </div>-->

                            <div class="col-12 d-none">
                                <!-- sélection de l'adresse -->
                                <div class="col-12">
                                    <!-- liste des villes déservis -->
                                    <label for="villes">Adresse de livraison : </label>
                                    <select name="villes" id="villes">
                                        <option value="Chamagne" selected>Chamagne</option>
                                        <option value="Charmes">Charmes</option>
                                        <option value="Chatel-sur-Moselle">Chatel-sur-Moselle</option>
                                        <option value="Chavelot">Chavelot</option>
                                        <option value="Domèvre-sur-Durbion">Domèvre-sur-Durbion</option>
                                        <option value="Essegney">Essegney</option>
                                        <option value="Frizon">Frizon</option>
                                        <option value="Girmont">Girmont</option>
                                        <option value="Hadigny-les-Verrières">Hadigny-les-Verrières</option>
                                        <option value="Igney">Igney</option>
                                        <option value="Langley">Langley</option>
                                        <option value="Moriville">Moriville</option>
                                        <option value="Nomexy">Nomexy</option>
                                        <option value="Pallegney">Pallegney</option>
                                        <option value="Portieux">Portieux</option>
                                        <option value="la Verrerie de Portieux">la Verrerie de Portieux</option>
                                        <option value="Socourt">Socourt</option>
                                        <option value="Vaxoncourt">Vaxoncourt</option>
                                        <option value="Vincey">Vincey</option>
                                        <option value="Autre">Autre</option>
                                    </select><br>
                                </div>
                                <div class="col-12 villeAutre d-none">
                                    <!--entrée texte pour ville Autre-->
                                    <label for="rue">Entrez le nom de votre ville : </label>
                                    <div class="col-12">
                                        <input id="villeAutre" name="villeAUtre" placeholder="Ville" type="text" /><br>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <!--entrée texte pour la rue-->
                                    <label for="rue">Rue : </label>
                                    <div class="col-12">
                                        <input id="rue" name="rue" placeholder="Rue" type="text" /><br>
                                    </div>
                                </div>
                                <br>
                                <div class="d-none">
                                    <!-- photo -->
                                    <div id="map"></div><br>
                                </div>
                            </div>
                            <div class="col-12">
                                <a id="submit" href="#" class="form-button-submit button icon solid fa-envelope">Contacter</a>

                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <section id="footer">
            <div id="copyright" class="container">
                <ul class="links">
                    <li>&copy; Menu portage. All rights reserved.</li>
                    <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </section>
    </div>

    <!-- Scripts -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.dropotron.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>
    <script src='https://unpkg.com/range-slider-element@latest'></script>
    <script src="assets/js/js_perso/formulaire.js"></script>
    <script src="assets/js/js_perso/Formulaire_Contact.js"></script>
    <script src="assets/js/js_perso/mapsLeaflet.js"></script>
</body>

</html>