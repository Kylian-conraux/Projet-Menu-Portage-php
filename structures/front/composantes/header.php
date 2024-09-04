<!-- Header -->
<section id="header">
    <div class="container">

        <!-- Logo -->
        <?php if ($_SERVER['REQUEST_URI'] == '/' || $_SERVER['REQUEST_URI'] == '/index.php'): ?>
            <span><img src="assets/css/images/logo_final.svg" alt="logo" class="logo"/></span>
        <?php endif; ?>

        <!-- Texte dynamique-->
        <br>
        <h1>
            <?php
            $current_page = basename($_SERVER['REQUEST_URI'], ".php");
            switch ($current_page) {
                case '':
                    echo "Service Traiteur et livraison";
                    break;
                case 'menus':
                    echo "Découvrez nos menus savoureux";
                    break;
                case 'aides-financieres':
                    echo "Profitez de nos aides financières";
                    break;
                case 'modalites':
                    echo "Découvrez nos modalités de livraison";
                    break;
                case 'equipe':
                    echo "Rencontrez notre équipe dédiée";
                    break;
                case 'contact':
                    echo "Contactez-nous pour plus d'informations";
                    break;
                default:
                    echo "Service Traiteur et livraison";
                    break;
            }
            ?>
        </h1>
        <!-- Nav -->
        <nav id="nav">
            <ul>
                <li><a class="icon solid fa-home" href="/"><span>Accueil</span></a></li>
                <li><a class="icon solid fa-utensils" href="/menus"><span>Les menus</span></a></li>
                <li><a class="icon solid fa-wallet" href="/aides-financieres"><span>Aides financières</span></a>
                </li>
                <li><a class="icon solid fa-truck" href="/modalites"><span>Modalités</span></a></li>
                <li><a class="icon solid fa-sitemap" href="/equipe"><span>L'équipe</span></a></li>
                <li><a class="icon solid fa-phone" href="/contact"><span>Contact</span></a></li>
            </ul>
        </nav>

    </div>
</section>