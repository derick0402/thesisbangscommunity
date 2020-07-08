$(document).ready(function(){
    var mymap = L.map('mapId',{gestureHandling: true}).setView([14.31798388351653,121.06137514114381], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    var markers = L.markerClusterGroup({ animateAddingMarkers : true });
    
    // SEARCH CONTROL
    var searchControl = new L.esri.Controls.Geosearch().addTo(mymap);
    var results = new L.LayerGroup().addTo(mymap);
    searchControl.on('results', function(data){
        results.clearLayers();
        if(myLocationMarker != null){
            mymap.removeLayer(myLocationMarker)
        }
        for (var i = data.results.length - 1; i >= 0; i--) {
            // L.marker(data.results[i].latlng).addTo(mymap)
            // .bindPopup(data.results[i].text)
            // .openPopup();
            
            loadingRouting = true;
            get_position_of_new_marker(data.results[i].latlng.lat,data.results[i].latlng.lng)
        }
    });
    setTimeout(function(){$('.pointer').fadeOut('slow');},3400);

    var clusterMarker = [];
    
    
    
    var customOptions ={
        'maxWidth': '500',
        'class' : 'custom'
    }
    for (var i = 0; i < evac.length; i++) {
        //markers.addLayer(evac[i]['latlng']);
        //mymap.addLayer(evac[i]['latlng']);
        var popup = "<strong>"+evac[i]['Name']+"</strong>"+
            "<br/>"+"<span>Location: "+evac[i]['Location']+"</span>"+
            "<br/>"+"<span>Capacity: "+evac[i]['Capacity']+"</span>"+
            "<br/>"+"<span>Type: "+evac[i]['Type']+"</span>";
        clusterMarker.push(L.marker(evac[i]['latlng']).bindPopup(
            popup,customOptions
        ).openPopup())
    }
    var group = L.featureGroup(clusterMarker).addTo(mymap);
    mymap.fitBounds(group.getBounds());

    var loadingRouting = false;
    var routing = null;
    var myLocationMarker = null;
    var allDistance = [];
    var redMarker = L.AwesomeMarkers.icon({
        icon: 'coffee',
        markerColor: 'red'
    });
    mymap.on('click',function(e){
        var lat = e.latlng.lat;
        var lon = e.latlng.lng;
        
        if(!loadingRouting){
            loadingRouting = true;
            get_position_of_new_marker(lat,lon)
            
        }
    })

    function get_position_of_new_marker(lat,lon){
        var waypoints = [];
        if(myLocationMarker != null){
            mymap.removeLayer(myLocationMarker)
        }
        myLocationMarker = L.marker([lat,lon], {icon: redMarker}).addTo(mymap);
        evac.forEach(function(element){
            waypoints.push(L.latLng(element['latlng']))
        })
        waypoints.push(L.latLng(lat,lon))
        evac.forEach(function(element){
            routing = L.Routing.control({
                waypoints:[
                    L.latLng(element['latlng']),
                    L.latLng(lat,lon),
                ],
                createMarker: function(i, waypoints) {
                },
                router: L.Routing.graphHopper('07737b5f-3b17-46b5-ab87-258dae0a2fd6'),
                routeWhileDragging:false,
            }).addTo(mymap);
            allDistance.push(routing)
            
        })
        get_all_distance();
        $('#loadingRouting').show();
    }

    function get_all_distance(){
        
        var newWaypoints = [];
        var add = 0;
        allDistance.forEach(function(element,index){
            add +=index;
            element.on('routesfound',function(e){
                var routes = e.routes;
                var summary = routes[0].summary;
                var total = parseFloat(summary.totalDistance)/1000;
                newWaypoints.push({
                    "distance":total,
                    "latlng":element.options.waypoints,
                })
            })
              
        })
        setTimeout(function(){
            allDistance.forEach(function(element){
                element.spliceWaypoints(0,2);
            })
            var filtered = newWaypoints.sort(function(a, b){return a.distance-b.distance});
            nearest_evacuation(filtered[0])
        },add + 3000);
    }
    var newRouting = null;
    function nearest_evacuation(data){
        if(newRouting != null){
            newRouting.spliceWaypoints(0,2);
        }
        newRouting = L.Routing.control({
            waypoints:data.latlng,
            createMarker: function(i, waypoints) {
            },
            router: L.Routing.graphHopper('07737b5f-3b17-46b5-ab87-258dae0a2fd6'),
            routeWhileDragging:false,
            addWaypoints : false,
        }).addTo(mymap);
        var panToLat = data['latlng'][1]['lat']
        var panToLong = data['latlng'][1]['lng']
        mymap.panTo(new L.LatLng(panToLat, panToLong));
        $('#loadingRouting').hide();
        loadingRouting = false;
    }
})