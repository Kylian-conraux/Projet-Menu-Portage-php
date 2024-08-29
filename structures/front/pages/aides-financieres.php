<!DOCTYPE HTML>
<!--
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html lang="fr">

<head>
	<title>Menu Portage : la facturation et les aides | Croustillance</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description"
		content="Tous les détails sur la facturation des repas livrés à domicile, ainsi que les aides possibles : APA, caisses de retraite, mutuelles, etc." />
	<link rel="stylesheet" href="assets/css/main.css" />
	<link rel="stylesheet" href="assets/css/formulaire_Contact_simulateur.css" />
	<link rel="icon" href="assets/css/images/logo_final.svg" type="image/svg">
</head>

<body class="right-sidebar is-preload">
	<div id="page-wrapper">

		<!-- Header -->
		<?php
		include 'structures/front/composantes/header.php';
		?>

		<!-- Main -->
		<section id="main">
			<div class="container">
				<div class="row">

					<!-- Content -->
					<div id="content" class="col-8 col-12-medium">

						<!-- Post -->
						<article class="boxpost">
							<header>
								<h2>La facturation et les aides</h2>
							</header>

							<h3>La facturation des repas livrés à domicile</h3>
							<p>Tous les repas livrés à domicile sont <strong>facturés en une seule fois en fin de
									mois</strong>. La
								facture peut être remise en main propre ou envoyée par mail ou par courrier postal au
								destinataire de votre choix.</p>
							<p>Nous transmettons également sur simple demande une copie de la facture à tout organisme
								ou institution prenant en charge une partie des repas.</p>
							<p>Pour le paiement, vous avez le choix entre plusieurs solutions :
								<ul>
								<li>Chèque.</li>
								<li>Virement.</li>
								<li>Espèces. Vous pouvez remettre directement votre paiement à nos livreuses, en qui
									nous avons toute confiance.</li>
									</ul>
							</p>
							<h3>Les aides possibles : </h3>

							<h6>L’Allocation Personnalisée d’Autonomie (APA) : </h6><br />
							<h6>Les aides des caisses de retraite : </h6><br />
							<h6>Les aides de votre mutuelle : </h6><br />

							<p><strong> N’hésitez pas à contacter la vôtre ! </strong></p>
							<h6>Comment obtenir un devis pour le portage des repas ?</h6><br />
							<p>Certains organismes exigeront des devis pour entamer une demande de prise en charge.<br>
								Le cas échéant, vous pouvez nous téléphoner au 06 37 08 20 41 ou envoyer un mail à Julie
								à l’adresse julie@croustillance.fr</p>

						</article>

					</div>

					<!-- Sidebar -->
					<div id="sidebar" class="col-4 col-12-medium">

						<!-- Highlights -->
						<section>
							<ul class="divided">
								<li>

									<!-- Highlight -->
									<article class="box highlight">
										<header>
											<h3><a href="#">Mr/Mme contact</a></h3>
										</header>
										<p>
											Si vous avez besoin d'aide ou de renseignements n'hésiter pas à contatcter
											Mr/Mme contact
										</p>
										<ul class="actions">
											<li><a href="#" class="button icon solid fa-paper-plane">Contacter</a></li>
										</ul>
									</article>

								</li>
								<li>

									<!-- Highlight -->
									<article class="box highlight">
										<header>
											<h3><a href="#">Mr/Mme contact</a></h3>
										</header>
										<p>Si vous avez besoin d'aide ou de renseignements n'hésiter pas à contatcter
											Mr/Mme contact
										</p>
										<ul class="actions">
											<li><a href="#" class="button icon solid fa-paper-plane">Contacter</a></li>
										</ul>
									</article>

									<!-- Highlight -->
									<header>
										<h3><a href="#">Bon à savoir</a></h3>
									</header>
									<p>Nous facturons la préparation et la livraison de repas, mais pas les éventuels services rendus par nos porteuses.
										Vous ne bénéficiez donc pas des réductions ou des crédits d'impôt liés aux services à la personne.
									</p>

								</li>
							</ul>
						</section>

					</div>

					<!-- Simulateur -->
					<div>
						<h2>Simulateur : </h2>

						<div class="col-12 ">
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
						<div class="col-12 ">
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
						<div><br>
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

								<h5>Nombres de repas : </h5>
								<div class="col-12  center buttRepasList">
									<button class="buttRepas selected" value="1">1</button>
									<button class="buttRepas" value="2">2</button>
									<button class="buttRepas" value="3">3</button>
									<button class="buttRepas" value="4">4</button>
									<button class="buttRepas" value="5">5</button>
									<button class="buttRepas" value="6">6</button>
									<button class="buttRepas" value="7">7</button>
									<button class="buttRepas" value="8">8</button>
									<button class="buttRepas" value="9">9</button>
									<button class="buttRepas" value="10">10</button>
									<button class="buttRepas" value="11">11</button>
									<button class="buttRepas" value="12">12</button>
									<button class="buttRepas" value="13">13</button>
									<button class="buttRepas" value="14">14</button>
								</div>
							</div>

						</div>
						<br>
						<div class="center">
							<h5 class="prix">Prix : 10.55 €</h5>
						</div>
						<br>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<?php
		include "structures/front/composantes/footer.php";
		?>

	</div>

	<!-- Scripts -->
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/jquery.dropotron.min.js"></script>
	<script src="assets/js/browser.min.js"></script>
	<script src="assets/js/breakpoints.min.js"></script>
	<script src="assets/js/util.js"></script>
	<script src="assets/js/main.js"></script>
	<script src="assets/js/js_perso/simulateur.js"></script>

</body>

</html>