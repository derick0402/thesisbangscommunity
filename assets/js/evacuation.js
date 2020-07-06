$(document).ready(function(){
    var mymap = L.map('mapId',{gestureHandling: true}).setView([14.31798388351653,121.06137514114381], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    var markers = L.markerClusterGroup({ animateAddingMarkers : true });
    // var allEvacuationMarkers = [
    //     L.marker([14.313263458212489, 121.05750509501351]),
    var clusterMarker = [];
    
    // ];
    
    var customPopup = "Mozilla Toronto Offices<br/><img src='http://joshuafrazier.info/images/maptime.gif' alt='maptime logo gif' width='350px'/>";
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

    var routing = null;
    var myLocationMarker = null;
    var redMarker = L.AwesomeMarkers.icon({
        icon: 'coffee',
        markerColor: 'red'
    });
    mymap.on('click',function(e){
        var lat = e.latlng.lat;
        var lon = e.latlng.lng;
        var waypoints = [];
        if(routing != null){
            routing.spliceWaypoints(0,2);
        }
        myLocationMarker = L.marker([lat,lon], {icon: redMarker}).addTo(mymap);
        evac.forEach(function(element){
            //waypoints.push(L.latLng(element.latlng))
            routing = L.Routing.control({
                waypoints:[
                    L.latLng(element.latlng),
                    L.latLng(lat,lon),
                ],
                createMarker: function(i, waypoints) {
                    return L.marker(waypoints.latLng,{icon: redMarker},{draggable:false})
                        .bindPopup("s").openPopup();
                },
                router: L.Routing.graphHopper('07737b5f-3b17-46b5-ab87-258dae0a2fd6'),
                routeWhileDragging:false,
                addWaypoints : false,
                // lineOptions: {
                //     styles: [{color: 'blue', opacity: 1, weight: 10}]
                // }
            }).addTo(mymap);
            routing.on('routesfound', function(e) {
                var routes = e.routes;
                var summary = routes[0].summary;
                // alert distance and time in km and minutes
                alert('Total distance is ' + summary.totalDistance / 1000 + ' km and total time is ' + Math.round(summary.totalTime % 3600 / 60) + ' minutes');
                
                //$('#touchdownAtSite').val()
             });
        })
        
         //waypoints.push(L.latLng(element.latlng))
        //  routing = L.Routing.control({
        //     waypoints:[
        //         L.latLng(element.latlng),
        //         L.latLng(lat,lon),
        //     ],
        //     createMarker: function(i, waypoints) {
        //         return L.marker(waypoints.latLng,{icon: redMarker},{draggable:false})
        //             .bindPopup("s").openPopup();
        //     },
        //     router: L.Routing.graphHopper('07737b5f-3b17-46b5-ab87-258dae0a2fd6'),
        //     routeWhileDragging:false,
        //     addWaypoints : false,
        //     // lineOptions: {
        //     //     styles: [{color: 'blue', opacity: 1, weight: 10}]
        //     // }
        // }).addTo(mymap);
    })

})