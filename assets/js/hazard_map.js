$(document).ready(function(){
    var map = L.map('mapId',{gestureHandling: true}).setView([14.31798388351653,121.06137514114381], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var data = {"type":"FeatureCollection","features":[]};
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
                        data.features.push(
                            {"type":
                                "Feature",
                                "id":element.id,
                                "properties":{"name":"Cavite","density":element.disaster},
                                "geometry":{"type":"Polygon",
                                    "coordinates":[newData]
                                }
                            }
                        )
                    })
                    initialize_hazard_map();
                }
            },
            error:function(respose){

            }
        })
    }

    var geojson;
    function initialize_hazard_map(){
        if(geojson){
            geojson.clearLayers();
        }
        geojson = L.geoJson();
        geojson = L.geoJson(data, {style: style,onEachFeature: onEachFeature}).addTo(map);
        $('#loadingRouting').hide();
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
        geojson.resetStyle(e.target);
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