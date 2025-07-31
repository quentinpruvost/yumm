<script lang="ts">
  import { onMount } from 'svelte';
  import L from 'leaflet';

  onMount(async () => {
    // on attend que l'élément #map soit bien dans le DOM
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // Initialisation de la carte, centrée sur la France
    const map = L.map(mapContainer).setView([46.2276, 2.2137], 6);

    // Ajout du fond de carte (on utilise OpenStreetMap, qui est gratuit)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Vous pourriez ajouter des marqueurs ici plus tard
    // L.marker([47.2184, -1.5536]).addTo(map).bindPopup('Yummy\'s Saint-Nazaire');
  });
</script>

<div id="map" class="h-full w-full bg-gray-200"></div>