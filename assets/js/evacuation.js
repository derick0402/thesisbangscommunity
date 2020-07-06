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

    var myLocationMarker = null;
    var redMarker = L.AwesomeMarkers.icon({
        icon: 'coffee',
        markerColor: 'red'
    });
    mymap.on('click',function(e){
        var lat = e.latlng.lat;
        var lon = e.latlng.lng;
        if(myLocationMarker != null){
            mymap.removeLayer(myLocationMarker)
        }
        myLocationMarker = L.marker([lat,lon], {icon: redMarker}).addTo(mymap);  
    })

})