$(document).ready(function(){
    // Remember to include either the Leaflet 0.7.3 or the Leaflet 1.0.0-beta1 library

    var blocks1995 =
    {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "time": 1995, "density": 3.1, "nameB": "BlockA"}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 50.0, 29.0 ], [ 50.0, 29.99], 
                                                                                                                                              [50.51, 29.99], [ 50.0, 29.0 ] ] ] } },
    { "type": "Feature", "properties": { "time": 1995, "density": 1.1, "nameB": "BlockB"}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 50.01, 30.0 ], [ 50.52, 30.0],[50.52, 30.5] ] ] } }
    ]
    };

    
    
    var blocks1996 =
    {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "year": 1996, "density": 2.2, "name": "BlockA"}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 50.0, 29.0 ], [ 50.0, 29.99], [50.51, 29.99] ] ]  } },
    { "type": "Feature", "properties": { "year": 1996, "density": 1.2, "name": "BlockB"}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 50.01, 30.0 ], [ 50.52, 30.0],[50.52, 30.5] ] ] } }
    ]
    };


    var blocks1995Layer = L.layerGroup([ L.geoJson(blocks1995)]),
        blocks1996Layer = L.layerGroup([ L.geoJson(blocks1996)]);
    
    
    
    

    
    var map = new L.map('mapId', {layers:[blocks1995Layer]})
						.setView([29, 50], 7);

    var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(map);

function colorThis(d) {
return d > 3 ?  '#810f7c' :
       d > 2  ? '#8856a7' :
       d > 1  ? '#8c96c6' :
       d > 0 ? '#b3cde3' :
                 '#edf8fb';
}

function density_style(feature) {
return {
	//make sure the feature has this property
    fillColor: colorThis(feature.properties.density),
    weight: 1,
    opacity: 1,
    color: 'white',
    dashArray: '2',
    fillOpacity: 0.5
  };
}



// --------------- BEGIN BOILERPLATE ---------------------- //

var geojson;

// This is for mouseover
function highlight(e) {
	// e for event
	// The target event property returns the element that triggered the event.
	// Get access to the layer and set a grey border on it
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.5
    });
    layer.bringToFront();
    // Send information to the info class defined below:
    info.update(layer.feature.properties);
}

// This is for mouseout: return to normal style
function resetHighlight(e) {
	geojson.resetStyle(e.target);
	// Senf information to the info class defined below:
	info.update();
}


function addToFeature(feature, layer) {
	// Grab the layer and describe listeners
	layer.on({
		mouseover: highlight,
		mouseout: resetHighlight
	});
}

// Custom info Control
var info = L.control();
info.onAdd = function(map) {
	this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
	this.update();
	return this._div;
};

// --------------- END BOILERPLATE ---------------------- //

// method to update control based on feature properties passed
info.update = function(props) {
	this._div.innerHTML = '<h4> Density for a block</h4>' + (props ?
		'<b> Name of block: ' + props.nameB
		 + '</b><br />' 
		+ props.density.toFixed(1) +
		'  Density' : 'Hover over a block');
};

info.addTo(map);

// Finally, add a Custom Legend Control
var legend = L.control({position: 'bottomright'});

legend.onAdd = function(map) {

	var div = L.DomUtil.create('div', 'info legend'),
		grades = [0, 1, 2, 3]
		labels = [];

	// loop through density intervals and generate a label with a colored square
	// for each interval
	for (var i = 0; i < grades.length; i++) {
		div.innerHTML +=
			'<i style="background:' + colorThis(grades[i] + 1) + '"></i> ' +
			grades[i] + (grades[i+1] ? '&ndash;' + grades[i+1] + '<br>' : '+');
	}

	return div;
};

legend.addTo(map);

// Put everything in the map
geojson = L.geoJson(blocks1995, {
	style: density_style,
	onEachFeature: addToFeature
	}).addTo(map);
geojson1 = L.geoJson(blocks1996, {
	style: density_style,
	onEachFeature: addToFeature
	}).addTo(map);
    

var overlayMaps =  {"Blocks 1995": geojson,
					"Blocks 1996": geojson1
					};    

   L.control.layers(null, overlayMaps).addTo(map);
})