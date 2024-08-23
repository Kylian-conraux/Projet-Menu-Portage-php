<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <meta name="description" value="" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <link rel="stylesheet" href="assets/css/main.css" />
    <link rel="stylesheet" href="assets/css/formulaire_Contact.css">
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
                            <h3>Qui commande : </h3>
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
                                <div class="formule"></div>
                            </div><br>

                            <!-- Sélection qui est le destinataire -->
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

                            <div class="col-12">
                                <!-- sélection de l'adresse -->
                                <div>
                                    <!-- photo -->
                                    <div id="map"></div><br>
                                </div>
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
                            </div>

                            <div class="col-12 d-none">
                                <!-- Sélection de la formule qu'une seul possible -->
                                <h3>Formule : </h3><br>
                                <div class="row formule">
                                    <div class="row col-6 col-12-small">
                                        <input id="formule-complète" name="formule" type="radio" value="Entrée Plat déssert" checked>
                                        <label for="formule-complète">Entrée/Plat/Dessert</label>
                                    </div>
                                    <div class="row col-6 col-12-small">
                                        <input id="formule-simple" name="formule" type="radio" value="Plat du jour">
                                        <label for="formule-simple">Plat du jour</label>
                                    </div>
                                </div>
                            </div><br>
                            <div class="col-12 d-none">
                                <!-- Suppléments: plusieurs possibles  -->
                                <h3>Suppléments : </h3><br>
                                <div class="row formule">
                                    <div class="row col-4 col-12-small">
                                        <input id="fromage" name="fromage" type="checkbox">
                                        <label for="fromage">Fromage</label>
                                    </div>
                                    <div class="row col-4 col-12-small">
                                        <input id="soupe" name="soupe" type="checkbox">
                                        <label for="soupe">Soupe du jour</label>
                                    </div>
                                    <div class="row col-4 col-12-small">
                                        <input id="baguette" name="baguette" type="checkbox">
                                        <label for="baguette">1/2 Baguette</label>
                                    </div>
                                </div>
                            </div><br>
                            <h3>Indiquer le nombre de personnes et de repas : </h3>
                            <div class="row">

                                <div class="center">
                                    <h5>Personne(s) : </h5>
                                </div>
                                <div class="col-12 center buttPersList">
                                    <button class="buttPers selected" value="1">1</button>
                                    <button class="buttPers" value="2">2</button>
                                    <button class="buttPers" value="3">3</button>
                                    <button class="buttPers" value="4">4</button>
                                    <button class="buttPers" value="5">5</button>
                                </div>

                                <h5>Repas par personne : </h5>
                                <div class="col-12 center buttRepasList">
                                    <button class="buttRepas selected" value="1">1</button>
                                    <button class="buttRepas" value="2">2</button>
                                    <button class="buttRepas" value="3">3</button>
                                    <button class="buttRepas" value="4">4</button>
                                    <button class="buttRepas" value="5">5</button>
                                    <button class="buttRepas" value="6">6</button>
                                    <button class="buttRepas" value="7">7</button>
                                </div>
                            </div>
                            <br>
                            <div class="center d-none">
                                <h5 class="prix">Prix : 10.55 €</h5>
                            </div>
                            <br>
                            <div class="col-12">
                                <a id="submit" href="#" class="form-button-submit button icon solid fa-envelope">Inscription</a>
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
    <script src="assets/js/js_perso/formulaire.js"></script>
    <script src="assets/js/js_perso/Formulaire_Contact.js"></script>
    <script src="assets/js/js_perso/mapsLeaflet.js"></script>
</body>

</html>