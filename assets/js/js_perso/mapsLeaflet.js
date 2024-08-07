document.addEventListener('DOMContentLoaded', function () {
    // Coordonnées des villes pour les marqueurs
    const coordinates = [
        [48.286848, 6.359453], // Frizon
        [48.274739, 6.396194], // Igney
        [48.293244, 6.412687], // Vaxoncourt
        [48.26217, 6.437387], // Girmont
        [48.294843, 6.443233], // Pallegney
        [48.28799, 6.470028], // Domèvre-sur-Durbion
        [48.323843, 6.459724], // Hadigny-les-Verrières
        [48.350089, 6.43088], // Moriville
        [48.340962, 6.329924], // Vincey
        [48.361496, 6.32546], // Langley
        [48.368567, 6.31653], // Essegney
        [48.410972, 6.277717], // Chamagne
        [48.397981, 6.248544], // Socourt
        [48.34621, 6.342971], // Portieux
        [48.307176, 6.382807], // Nomexy
        [48.314711, 6.39002], // Chatel-sur-Moselle
        [48.372672, 6.291101], // Charmes
        [48.24091, 6.436036]  // Chavelot
    ];

    // Coordonnées du polygone
    const coordinatesPoly = [
        [48.410972, 6.277717], // Chamagne
        [48.397981, 6.248544], // Socourt
        [48.372672, 6.291101], // Charmes
        [48.286848, 6.359453], // Frizon
        [48.24091, 6.436036], // Chavelot
        [48.26217, 6.437387], // Girmont
        [48.28799, 6.470028], // Domèvre-sur-Durbion
        [48.323843, 6.459724], // Hadigny-les-Verrières
        [48.350089, 6.43088] // Moriville
    ];

    // Calculer les points extrêmes pour centrer la carte
    const lats = coordinates.map(coord => coord[0]);
    const lngs = coordinates.map(coord => coord[1]);

    const north = Math.max(...lats);
    const south = Math.min(...lats);
    const east = Math.max(...lngs);
    const west = Math.min(...lngs);

    // Créer la carte et la centrer sur la région délimitée par le polygone
    const map = L.map('map', { scrollWheelZoom: false }).setView([(north + south) / 2, (east + west) / 2], 12); // Ajuste le niveau de zoom

    // Ajouter un fond de carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Ajouter un polygone avec les coordonnées du polygone
    L.polygon(coordinatesPoly, { color: 'blue', fillColor: '#30f', fillOpacity: 0.2 }).addTo(map);

    // Ajouter des marqueurs pour chaque ville
    coordinates.forEach(coord => {
        L.marker(coord).addTo(map);
    });

    // Ajouter des popups pour chaque marqueur
    coordinates.forEach(coord => {
        L.marker(coord)
            .addTo(map)
            .bindPopup(`Lat: ${coord[0]}, Lng: ${coord[1]}`);
    });

    // Fonction pour gérer le clic sur la carte
    var popup = L.popup();

    function onMapClick(e) {
        console.log("You clicked the map at " + e.latlng.toString())
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
});