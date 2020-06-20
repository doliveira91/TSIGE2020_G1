'use strict"'

let map = L.map('map',{center:[ -34.8,-56.35],zoom:11});

// Base map layer
let osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
}).addTo(map);



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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function getColorLH(d) {
    return d == "MONUMENTO HISTORICO" ? ' #eb128c' : 
    d == "BIEN DE INTERES IMM"  ? '#16b533' :  
     '#FFEDA0'; 
    }
//funcion para agregar estilos a cada municipio
function styleLH(feature) { 
    return { 
    fillColor: getColorLH(
    feature.properties.proteccion), 
    weight: 2, 
    opacity: 1, 
    color: 'black', 
    fillOpacity: 0.7 
    }; 
}

//Carga de la capa LUGARES DE INTERES - lugares historicos
let popup_li  = (feature, layer_li) => {
    layer_li.bindPopup(`<div>
                            <h6><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; "> ${feature.properties.identifica}</p></h6>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">Dirección: ${feature.properties.direccion}</p>;                           
                        </div>`);
};

let layer_li = L.geoJson(null, {
    onEachFeature: popup_li,
    style: styleLH
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:mh_bim/items?limit=1000000&filter=proteccion%20%3D%20%27MONUMENTO%20HISTORICO%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_li.addData(data);
});

$("#li_1").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_li)) {
        map.removeLayer(layer_li);
        
    } else {
        map.addLayer(layer_li)
}
});


//Carga de la capa LUGARES DE INTERES - interes de IMM
let popup_l2  = (feature, layer_l2) => {
    layer_l2.bindPopup(`<div>
                            <h6><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; "> ${feature.properties.identifica}</p></h6>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">Dirección: ${feature.properties.direccion}</p>;                           
                        </div>`);
};

let layer_l2 = L.geoJson(null, {
    onEachFeature: popup_l2,
    style: styleLH
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:mh_bim/items?limit=1000000&filter=proteccion%20%3D%20%27BIEN%20DE%20INTERES%20IMM%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_l2.addData(data);
});

$("#li_2").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_l2)) {
        map.removeLayer(layer_l2);
        
    } else {
        map.addLayer(layer_l2)
}
});
//////////////////////////////////////////////////////////////////


//Carga de la capa CIRCUITOS DE BICIS

function getColorBici(d) {
    return d == "1.0" ? '#00ece2' : 
    d == "2.0"  ? '#f7cd0d' :  
     '#8f00f3'; 
    }
//funcion para agregar estilos a cada municipio
function styleBici(feature) { 
    return { 
    color: getColorBici(
    feature.properties.tipo), 
    }; 
}

let layer_bici = L.geoJson(null, {
    style: styleBici
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:v_bi_bicicircuitos/items?limit=1000000&filter=tipo%20%3D%201.0&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_bici.addData(data);
});

$("#bici_1").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_bici)) {
        map.removeLayer(layer_bici);
        
    } else {
        map.addLayer(layer_bici)
}
});


let layer_bici2 = L.geoJson(null, {
    style: styleBici
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:v_bi_bicicircuitos/items?limit=1000000&filter=tipo%20%3D%202.0&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_bici2.addData(data);
});

$("#bici_2").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_bici2)) {
        map.removeLayer(layer_bici2);
        
    } else {
        map.addLayer(layer_bici2)
}
});


let layer_bici3 = L.geoJson(null, {
    style: styleBici
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:v_bi_bicicircuitos/items?limit=1000000&filter=tipo%20%3D%203.0&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_bici3.addData(data);
});

$("#bici_3").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_bici3)) {
        map.removeLayer(layer_bici3);
        
    } else {
        map.addLayer(layer_bici3)
}
});



/////////////////////////////////////////////////////

//Carga de la capa TEATROS
let popup_cultura1  = (feature, layer_lh) => {
    layer_lh.bindPopup(`<div>
                            <h5><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">${feature.properties.nombre}</p></h5>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif;">Dirección: ${feature.properties.direccion}</p>
                        </div>`);
};

let layer_cultura1 = L.geoJson(null, {
    onEachFeature: popup_cultura1,
    //style: styleCultura
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:uptu_cultura/items?limit=1000000&filter=nombre%20LIKE%20%27%25TEATRO%25%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_cultura1.addData(data);
});

$("#lugar_1").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_cultura1)) {
        map.removeLayer(layer_cultura1);
        
    } else {
        map.addLayer(layer_cultura1)
}
});


//Carga de la capa CINE
let popup_cultura2  = (feature, layer_cult2) => {
    layer_cult2.bindPopup(`<div>
                            <h5><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">${feature.properties.nombre}</p></h5>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif;">Dirección: ${feature.properties.direccion}</p>
                        </div>`);
};

let layer_cult2 = L.geoJson(null, {
    onEachFeature: popup_cultura2,
  //  style: styleCultura
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:uptu_cultura/items?limit=1000000&filter=nombre%20LIKE%20%27%25CINE%25%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_cult2.addData(data);
});

$("#lugar_2").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_cult2)) {
        map.removeLayer(layer_cult2);
        
    } else {
        map.addLayer(layer_cult2)
}
});



//Carga de la capa museo
let popup_cultura3  = (feature, layer_cult3) => {
    layer_cult3.bindPopup(`<div>
                            <h5><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">${feature.properties.nombre}</p></h5>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif;">Dirección: ${feature.properties.direccion}</p>
                        </div>`);
};

let layer_cult3 = L.geoJson(null, {
    onEachFeature: popup_cultura3,
  //  style: styleCultura
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:uptu_cultura/items?limit=1000000&filter=nombre%20LIKE%20%27%25MUSEO%25%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_cult3.addData(data);
});

$("#lugar_3").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_cult3)) {
        map.removeLayer(layer_cult3);
        
    } else {
        map.addLayer(layer_cult3)
}
});


//Carga de la capa AUDITORIO
let popup_cultura4  = (feature, layer_cult4) => {
    layer_cult4.bindPopup(`<div>
                            <h5><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">${feature.properties.nombre}</p></h5>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif;">Dirección: ${feature.properties.direccion}</p>
                        </div>`);
};

let layer_cult4 = L.geoJson(null, {
    onEachFeature: popup_cultura4,
  //  style: styleCultura
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:uptu_cultura/items?limit=1000000&filter=nombre%20LIKE%20%27%25AUDITORIO%25%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_cult4.addData(data);
});

$("#lugar_4").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_cult4)) {
        map.removeLayer(layer_cult4);
        
    } else {
        map.addLayer(layer_cult4)
}
});
//Carga de la capa BIBLIOTECA
let popup_cultura5  = (feature, layer_cult5) => {
    layer_cult5.bindPopup(`<div>
                            <h5><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">${feature.properties.nombre}</p></h5>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif;">Dirección: ${feature.properties.direccion}</p>
                        </div>`);
};

let layer_cult5 = L.geoJson(null, {
    onEachFeature: popup_cultura5,
  //  style: styleCultura
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:uptu_cultura/items?limit=1000000&filter=nombre%20LIKE%20%27%25BIBLIOTECA%25%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_cult5.addData(data);
});

$("#lugar_5").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_cult5)) {
        map.removeLayer(layer_cult5);
        
    } else {
        map.addLayer(layer_cult5)
}
});

//Carga de la capa ESPACIO CULTURA
let popup_cultura6  = (feature, layer_cult6) => {
    layer_cult6.bindPopup(`<div>
                            <h5><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">${feature.properties.nombre}</p></h5>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif;">Dirección: ${feature.properties.direccion}</p>
                        </div>`);
};

let layer_cult6 = L.geoJson(null, {
    onEachFeature: popup_cultura6,
  //  style: styleCultura
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:uptu_cultura/items?limit=1000000&filter=nombre%20LIKE%20%27%25ESPACIO%20CULTURA%25%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_cult6.addData(data);
});

$("#lugar_6").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_cult6)) {
        map.removeLayer(layer_cult6);
        
    } else {
        map.addLayer(layer_cult6)
}
});


//Carga de la capa CINEMATECA
let popup_cultura7  = (feature, layer_cult7) => {
    layer_cult7.bindPopup(`<div>
                            <h5><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">${feature.properties.nombre}</p></h5>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif;">Dirección: ${feature.properties.direccion}</p>
                        </div>`);
};

let layer_cult7 = L.geoJson(null, {
    onEachFeature: popup_cultura7,
  //  style: styleCultura
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:uptu_cultura/items?limit=1000000&filter=nombre%20LIKE%20%27%25CINEMATECA%25%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_cult7.addData(data);
});

$("#lugar_7").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_cult7)) {
        map.removeLayer(layer_cult7);
        
    } else {
        map.addLayer(layer_cult7)
}
});


//Carga de la capa GRUPO CINE
let popup_cultura8  = (feature, layer_cult8) => {
    layer_cult8.bindPopup(`<div>
                            <h5><p style="text-align:center; font-family: Arial, Helvetica, sans-serif; ">${feature.properties.nombre}</p></h5>
                            <p style="text-align:center; font-family: Arial, Helvetica, sans-serif;">Dirección: ${feature.properties.direccion}</p>
                        </div>`);
};

let layer_cult8 = L.geoJson(null, {
    onEachFeature: popup_cultura8,
  //  style: styleCultura
})

$.getJSON("http://localhost:8080/geoserver/ogc/features/collections/tsige:uptu_cultura/items?limit=1000000&filter=nombre%20LIKE%20%27%25GRUPOCINE%25%27&filter-lang=cql-text&additionalProp1=",(data) => {
    layer_cult8.addData(data);
});

$("#lugar_8").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_cult8)) {
        map.removeLayer(layer_cult8);
        
    } else {
        map.addLayer(layer_cult8)
}
});
