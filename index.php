<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pestisee</title>
        <!--Importation de la police d'écriture-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&family=Girassol&display=swap" rel="stylesheet">
        <!---->
        <!--Importation de Animate.css qui permet des animations au chargement de la page-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
        <!---->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link href="./css/style.css" rel="stylesheet">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 greenBackground text-white animate__animated animate__slideInLeft">
                    <div class="row pt-2 ms-2">
                        <div class="col-md-2">
                            <img src="./assets/images/logo.webp" alt="Logo Pestisee" height="65em"/>
                        </div>
                        <div class="col-md-10 position-relative">
                            <h3 class="ps-1 position-absolute top-50 start-0 translate-middle-y">Pestisee</h3>
                        </div>
                    </div>
                    <div class="row pt-5">
                        <div class="col-md-12">
                            <a href="#" class="tabsLinks">🍅 1er onglet</a>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <a href="#" class="tabsLinks">🍎 2ème onglet</a>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <a href="#" class="tabsLinks">🌽 3ème onglet</a>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <a href="#" class="tabsLinks">🥕 4ème onglet</a>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <a href="#" class="tabsLinks">🍇 5ème onglet</a>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-12 mt-5">
                            <a href="#" class="returnLink"><i class="fa-solid fa-arrow-left me-2"></i>Retour</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="row ps-3 animate__animated animate__slideInDown">
                        <div class="col-md-12 greenBackground text-white">
                            <h3 class="mt-3 pb-2">Nom de l'onglet</h3>
                        </div>
                    </div>
                    <div class="row mt-3 ps-3 pe-3">
                        <div class="col-md-5 pb-3 me-3 whiteBackground shadowGraph animate__animated animate__zoomIn">
                            <h4 class="mt-3 ps-3">Titre du graphe</h4>
                            <canvas id="graph1"></canvas>
                        </div>
                        <div class="col-md-6 pb-3 whiteBackground shadowGraph position-relative animate__animated animate__zoomIn" style="flex-grow: 1">
                            <h4 class="mt-3 ps-3">Titre du graphe</h4>
                            <canvas id="graph2" class="verticalCenter"></canvas>
                        </div>
                    </div>
                    <div class="row mt-4 ps-3 pe-3">
                        <div class="col-md-12 pb-3 mb-5 whiteBackground shadowGraph animate__animated animate__zoomIn">
                            <h4 class="mt-3 ps-3">Titre du graphe</h4>
                            <canvas id="graph3"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <!--Importation de FontAwesome afin d'avoir des pyctogrammes facilement-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/js/all.min.js" integrity="sha512-8py0AXTY8pfAroJmBkYfJ+VuKUKMMsUOC1MldW9kkC/k4SZi6AexSDS60QYn41U2rp8KL9IpVHy8FxW2TDmjDA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <!---->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js" integrity="sha512-QSkVNOCYLtj73J4hbmVoOV6KVZuMluZlioC+trLpewV8qMjsWqlIQvkn1KGX2StWvPMdWGBqim1xlC8krl1EKQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="./js/graph.js"></script>
    </body>
</html>