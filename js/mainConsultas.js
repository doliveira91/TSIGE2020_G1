'use strict"'

let map = L.map('map',{center:[ -34.8,-56.35],zoom:11});

// Base map layer
let osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
}).addTo(map);




//Carga de la capa LUGARES HISTORICOS
let popup_lh  = (feature, layer_lh) => {
    layer_lh.bindPopup(`<div>
                            <h5><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">${feature.properties.identifica}</p></h5>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif;">Dirección: ${feature.properties.direccion}</p>
                        </div>`);
};

let layer_lh = L.geoJson(null, {
    onEachFeature: popup_lh
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:mh_bim/items?f=application%2Fgeo%2Bjson&limit=1000000&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_lh.addData(data);
});

$("#capa_lugares_historicos").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_lh)) {
        map.removeLayer(layer_lh);
        
    } else {
        map.addLayer(layer_lh)
}
});

//Carga de la capa MUNICIPIOS
function getColor(d) {
    return d == "A" ? '#BD0026' : 
    d == "G"  ? '#E31A1C' : 
    d == "D"  ? '#FC4E2A' : 
    d == "F" ?  '#FD8D3C' : 
    d == "E"  ? '#1e8449' : 
    d == "CH"  ? '#FEB24C' : 
    d == "B"  ? '#FEB24C' : 
    d == "C"  ? '#800026' : 
     '#FFEDA0'; 
    }
//funcion para agregar estilos a cada municipio
function style(feature) { 
    return { 
    fillColor: getColor(
    feature.properties.municipio), 
    weight: 2, 
    opacity: 1, 
    color: 'white', 
    dashArray: '3', 
    fillOpacity: 0.7 
    }; 
}
//Municipio A
let popup_mun  = (feature, layer_mun) => {
    layer_mun.bindPopup(`<div>
                            <h6>Municipio: ${feature.properties.municipio}</h6>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">Área:  ${feature.properties.area_ha} m2 </p>
                        </div>`);
};

let layer_mun = L.geoJson(null, {
    onEachFeature: popup_mun,
    style: style
})


$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:sig_municipios/items?filter=municipio%3D%27A%27&filter-lang=cql-text",(data) => {
    layer_mun.addData(data);
});

$("#mun_a").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_mun)) {  
        map.removeLayer(layer_mun);
    } else {
        map.addLayer(layer_mun);
    }
});

//Municipio B
let popup_munB  = (feature, layer_munB) => {
    layer_munB.bindPopup(`<div>
                            <h6>Municipio: ${feature.properties.municipio}</h6>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">Área:  ${feature.properties.area_ha} m2 </p>
                        </div>`);
};

let layer_munB = L.geoJson(null, {
    onEachFeature: popup_munB,
    style: style
})


$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:sig_municipios/items?filter=municipio%3D%27B%27&filter-lang=cql-text",(data) => {
    layer_munB.addData(data);
});

$("#mun_b").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_munB)) {  
        map.removeLayer(layer_munB);
    } else {
        map.addLayer(layer_munB);
    }
});

//Municipio C
let popup_munc  = (feature, layer_munc) => {
    layer_munc.bindPopup(`<div>
                            <h6>Municipio: ${feature.properties.municipio}</h6>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">Área:  ${feature.properties.area_ha} m2 </p>
                        </div>`);
};

let layer_munc = L.geoJson(null, {
    onEachFeature: popup_munc,
    style: style
})


$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:sig_municipios/items?limit=1000000&filter=municipio%3D%27C%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_munc.addData(data);
});

$("#mun_c").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_munc)) {  
        map.removeLayer(layer_munc);
    } else {
        map.addLayer(layer_munc);
    }
});

//Municipio CH
let popup_munch  = (feature, layer_munch) => {
    layer_munch.bindPopup(`<div>
                            <h6>Municipio: ${feature.properties.municipio}</h6>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">Área:  ${feature.properties.area_ha} m2 </p>
                        </div>`);
};

let layer_munch = L.geoJson(null, {
    onEachFeature: popup_munch,
    style: style
})


$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:sig_municipios/items?limit=1000000&filter=municipio%3D%27CH%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_munch.addData(data);
});

$("#mun_ch").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_munch)) {  
        map.removeLayer(layer_munch);
    } else {
        map.addLayer(layer_munch);
    }
});

//Municipio D
let popup_mund  = (feature, layer_mund) => {
    layer_mund.bindPopup(`<div>
                            <h6>Municipio: ${feature.properties.municipio}</h6>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">Área:  ${feature.properties.area_ha} m2 </p>
                        </div>`);
};

let layer_mund = L.geoJson(null, {
    onEachFeature: popup_mund,
    style: style
})


$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:sig_municipios/items?limit=1000000&filter=municipio%3D%27D%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_mund.addData(data);
});

$("#mun_d").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_mund)) {  
        map.removeLayer(layer_mund);
    } else {
        map.addLayer(layer_mund);
    }
});

//Municipio E
let popup_mune  = (feature, layer_mune) => {
    layer_mune.bindPopup(`<div>
                            <h6>Municipio: ${feature.properties.municipio}</h6>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">Área:  ${feature.properties.area_ha} m2 </p>
                        </div>`);
};

let layer_mune = L.geoJson(null, {
    onEachFeature: popup_mune,
    style: style
})


$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:sig_municipios/items?limit=1000000&filter=municipio%3D%27E%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_mune.addData(data);
});

$("#mun_e").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_mune)) {  
        map.removeLayer(layer_mune);
    } else {
        map.addLayer(layer_mune);
    }
});

//Municipio F
let popup_munf  = (feature, layer_munf) => {
    layer_munf.bindPopup(`<div>
                            <h6>Municipio: ${feature.properties.municipio}</h6>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">Área:  ${feature.properties.area_ha} m2 </p>
                        </div>`);
};

let layer_munf = L.geoJson(null, {
    onEachFeature: popup_munf,
    style: style
})


$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:sig_municipios/items?limit=1000000&filter=municipio%3D%27F%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_munf.addData(data);
});

$("#mun_f").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_munf)) {  
        map.removeLayer(layer_munf);
    } else {
        map.addLayer(layer_munf);
    }
});

//Municipio G
let popup_mung  = (feature, layer_mung) => {
    layer_mung.bindPopup(`<div>
                            <h6>Municipio: ${feature.properties.municipio}</h6>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">Área:  ${feature.properties.area_ha} m2 </p>
                        </div>`);
};

let layer_mung = L.geoJson(null, {
    onEachFeature: popup_mung,
    style: style
})


$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:sig_municipios/items?limit=1000000&filter=municipio%3D%27G%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_mung.addData(data);
});

$("#mun_g").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_mung)) {  
        map.removeLayer(layer_mung);
    } else {
        map.addLayer(layer_mung);
    }
});


//Carga de la capa LUGARES DE INTERES
let popup_li  = (feature, layer_li) => {
    layer_li.bindPopup(`<div>
                            <h6><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; "> ${feature.properties.nombre}</p></h6>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">Dirección: ${feature.properties.direccion}</p>;                           
                        </div>`);
};

let layer_li = L.geoJson(null, {
    onEachFeature: popup_li
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:uptu_cultura/items?f=application%2Fgeo%2Bjson&limit=1000000&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_li.addData(data);
});

$("#capa_lugares_interes").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_li)) {
        map.removeLayer(layer_li);
        
    } else {
        map.addLayer(layer_li)
}
});

//Carga de la capa CIRCUITOS DE BICIS

let layer_bici = L.geoJson(null, {})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:v_bi_bicicircuitos/items?f=application%2Fgeo%2Bjson&",(data) => {
    layer_bici.addData(data);
});

$("#capa_bicicletas").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_bici)) {
        map.removeLayer(layer_bici);
        
    } else {
        map.addLayer(layer_bici)
}
});



//Carga de la capa BIBLIOTECA
let popup_biblio  = (feature, layer_biblio) => {
    layer_biblio.bindPopup(`<div>
                                <h6><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; "> ${feature.properties.nombre}</p></h6>
                                <p style="text-align:center; font-family: Arial, Helvetica, sans-serif; "> Dirección: ${feature.properties.direccion}<br>  
                                Teléfono: ${feature.properties.telefono} <br>
                                Tipo: ${feature.properties.tipo} </p> 
                            </div>`);
};

let layer_biblio = L.geoJson(null, {
    onEachFeature: popup_biblio
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:bibliomun/items?f=application%2Fgeo%2Bjson&limit=50",(data) => {
    layer_biblio.addData(data);
});

$("#capa_biblioteca").click(function(event) {

    event.preventDefault();
    if(map.hasLayer(layer_biblio)) {
        map.removeLayer(layer_biblio);
        
    } else {
        map.addLayer(layer_biblio)
}
});

//Carga de la capa ESPACIOS LIBRES
let popup_libre  = (feature, layer_el) => {
    layer_el.bindPopup(`<div>
                            <h6><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; "> ${feature.properties.nom_parque}</p></h6
                        </div>`);
};

let layer_el = L.geoJson(null, {
    onEachFeature: popup_libre
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:v_mdg_espacios_libres/items?f=application%2Fgeo%2Bjson&limit=50",(data) => {
    layer_el.addData(data);
});

$("#capa_el").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_el)) {
        map.removeLayer(layer_el);
        
    } else {
        map.addLayer(layer_el);
        
    }
    
});

