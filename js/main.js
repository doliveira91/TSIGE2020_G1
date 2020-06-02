'use strict"'

// Map  objects
let map = L.map('map').setView([37.427, -4.406], 8);

// Base map layer
let osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
}).addTo(map);

// Shown popup with info
let popup  = (feature, layer) => {
    layer.bindPopup(`<div>
                        <p style="text-align:right; font-style: italic;">
                            ${feature.properties.tipo}
                        </p>
                        <h3>${feature.properties.nombre}</h3>
                    </div>`);
};

// GeoJSON from API Rest
let layer = L.geoJson(null, {
    onEachFeature: popup
});

$.getJSON("http://localhost:3000/api/layers/alojamiento", (data) => {
    layer.addData(data);
});

layer.addTo(map);