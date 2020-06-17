'use strict"'

let map = L.map('map',{center:[ -34.8,-56.35],zoom:11});
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
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:sig_municipios/items?f=application%2Fgeo%2Bjson&limit=1000000&filter-lang=cql-text&additionalProp1=",(data) => {
    layer.addData(data);
});


layer.addTo(map);
