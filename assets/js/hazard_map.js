$(document).ready(function(){
    var map = L.map('mapId',{gestureHandling: true}).setView([14.31798388351653,121.06137514114381], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var data = {"type":"FeatureCollection","features":[]};

    var gs = [];
    var gr = [];
    var rrl = [];
    var rrm = [];
    var ralm = [];
    var ralh = [];
    var ralvh = [];
    get_hazard_map();
    function get_hazard_map(){
        $.ajax({
            url:base_url+'mdrrmo/getHazardMapData',
            type:'get',
            dataType:'json',
            success:function(response){
                if(response.status == "success"){
                    response.hazard_map.forEach(function(element){
                        var newData = [];
                        JSON.parse(element.lat_and_long).forEach(function(value){
                            newData.push([value.long,value.lat])
                        })
                        if(element.disaster == "Ground Shaking"){
                            gs.push(
                                {"type":
                                    "Feature",
                                    "id":element.id,
                                    "properties":{"name":"Cavite","density":element.disaster},
                                    "geometry":{"type":"Polygon",
                                        "coordinates":[newData]
                                    }
                                }
                            )
                        }
                        else if(element.disaster == "Ground Rapture"){
                            gr.push(
                                {"type":
                                    "Feature",
                                    "id":element.id,
                                    "properties":{"name":"Cavite","density":element.disaster},
                                    "geometry":{"type":"Polygon",
                                        "coordinates":[newData]
                                    }
                                }
                            )
                        }
                        else if(element.disaster == "Rainfall Rate - Low"){
                            rrl.push(
                                {"type":
                                    "Feature",
                                    "id":element.id,
                                    "properties":{"name":"Cavite","density":element.disaster},
                                    "geometry":{"type":"Polygon",
                                        "coordinates":[newData]
                                    }
                                }
                            )
                        }
                        else if(element.disaster == "Rainfall Rate - Moderate"){
                            rrm.push(
                                {"type":
                                    "Feature",
                                    "id":element.id,
                                    "properties":{"name":"Cavite","density":element.disaster},
                                    "geometry":{"type":"Polygon",
                                        "coordinates":[newData]
                                    }
                                }
                            )
                        }
                        else if(element.disaster == "Rain Affected Landslide - Moderate"){
                            ralm.push(
                                {"type":
                                    "Feature",
                                    "id":element.id,
                                    "properties":{"name":"Cavite","density":element.disaster},
                                    "geometry":{"type":"Polygon",
                                        "coordinates":[newData]
                                    }
                                }
                            )
                        }
                        else if(element.disaster == "Rain Affected Landslide - High"){
                            ralh.push(
                                {"type":
                                    "Feature",
                                    "id":element.id,
                                    "properties":{"name":"Cavite","density":element.disaster},
                                    "geometry":{"type":"Polygon",
                                        "coordinates":[newData]
                                    }
                                }
                            )
                        }
                        else{
                            ralvh.push(
                                {"type":
                                    "Feature",
                                    "id":element.id,
                                    "properties":{"name":"Cavite","density":element.disaster},
                                    "geometry":{"type":"Polygon",
                                        "coordinates":[newData]
                                    }
                                }
                            )
                        }
                        
                    })
                    initialize_hazard_map();
                }
            },
            error:function(respose){

            }
        })
    }
    
    var geoJsonGs;
    var geoJsonGr;
    var geoJsonRrl;
    var geoJsonRrm;
    var geoJsonRalm;
    var geoJsonRalh;
    var geoJsonRalvh;
    function initialize_hazard_map(){
        //geojson = L.geoJson();
        //geojson = L.geoJson(data, {style: style,onEachFeature: onEachFeature}).addTo(map);
        var gsLayer = L.layerGroup([L.geoJson(gs)]);
        var grLayer = L.layerGroup([L.geoJson(gr)]);
        var rrlLayer = L.layerGroup([L.geoJson(rrl)]);
        var rrmLayer = L.layerGroup([L.geoJson(rrm)]);
        var ralmLayer = L.layerGroup([L.geoJson(ralm)]);
        var ralhLayer = L.layerGroup([L.geoJson(ralh)]);
        var ralvhLayer = L.layerGroup([L.geoJson(ralvh)]);
        geoJsonGs = L.geoJson(gs, {style: style,onEachFeature: onEachFeature}).addTo(map)
        geoJsonGr = L.geoJson(gr, {style: style,onEachFeature: onEachFeature}).addTo(map)
        geoJsonRrl = L.geoJson(rrl, {style: style,onEachFeature: onEachFeature}).addTo(map)
        geoJsonRrm = L.geoJson(rrm, {style: style,onEachFeature: onEachFeature}).addTo(map)
        geoJsonRalm = L.geoJson(ralm, {style: style,onEachFeature: onEachFeature}).addTo(map)
        geoJsonRalh = L.geoJson(ralh, {style: style,onEachFeature: onEachFeature}).addTo(map)
        geoJsonRalvh = L.geoJson(ralvh, {style: style,onEachFeature: onEachFeature}).addTo(map)
        $('#loadingRouting').hide();
        var overlayMaps =  {
            "Ground Shaking": geoJsonGs,
            "Ground Rapture":geoJsonGr,
            "Rainfall Rate - Low":geoJsonRrl,
            "Rainfall Rate - Moderate":geoJsonRrm,
            "Rain Affected Landslide - Moderate":geoJsonRalm,
            "Rain Affected Landslide - High":geoJsonRalh,
            "Rain Affected Landslide - Very High":geoJsonRalvh
        };
        L.control.layers(null, overlayMaps).addTo(map);
    }  
    function getColor(d) {
        if(d == "Rain Affected Landslide - Very High"){
            return '#580000';
        }
        if(d == "Rain Affected Landslide - High"){
            return '#980000';
        }
        if(d == "Rain Affected Landslide - Moderate"){
            return '#D00000';
        }
        if(d == "Rainfall Rate - Moderate"){
            return '#228B22';
        }
        if(d == "Rainfall Rate - Low"){
            return '#90EE90';
        }
        if(d == "Ground Rapture"){
            return '#FFA500';
        }
        if(d == "Ground Shaking"){
            return '#FF0000';
        }
        
    }
    function style(feature) {
        return {
            fillColor: getColor(feature.properties.density),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '0',
            fillOpacity: 0.7
        };
    }
    
    function highlightFeature(e) {
        var layer = e.target;
    
        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
    
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    }
    function resetHighlight(e) {
        geoJsonGs.resetStyle(e.target);
        geoJsonGr.resetStyle(e.target);
        geoJsonRrl.resetStyle(e.target);
        geoJsonRrm.resetStyle(e.target);
        geoJsonRalm.resetStyle(e.target);
        geoJsonRalh.resetStyle(e.target);
        geoJsonRalvh.resetStyle(e.target);
    }
    
    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
        
    }
    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }
    
    
    var info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        // this._div.innerHTML = '<h4>Carmona Example This</h4>' +  (props ?
        //     '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
        //     : 'Hover ');
    };

    info.addTo(map);
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [
                'Ground Shaking', 
                'Ground Rapture', 
                'Rainfall Rate - Low', 
                'Rainfall Rate - Moderate', 
                'Rain Affected Landslide - Moderate', 
                'Rain Affected Landslide - High', 
                "Rain Affected Landslide - Very High"
            ],
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i]) + '"></i> ' +
                (grades[i]+ '<br>');
        }

        return div;
    };

    legend.addTo(map);
})