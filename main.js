const apikey = 'pk.eyJ1Ijoic2FtLXRoZS1tYW4iLCJhIjoiY2xjOTVqZ29rMHlubDNxcDJ0MG9rZTloMiJ9.xQ4pFUSlPnxPV7VJqhJqbA';
const map = L.map('map').setView([23.840831, 91.421521], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 50,
    id: 'mapbox/satellite-v9',
    accessToken: apikey,
    zoomOffset: -1,
    tileSize: 512,
}).addTo(map);