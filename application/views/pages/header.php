<html>
<head>
    <meta charset="utf-8">
    <title>ERRA</title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" ></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" ></script>

    <link rel="stylesheet" href="<?php echo base_url();?>assets/css/styles.css">
    <script src="<?php echo base_url();?>assets/js/header.js"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">

    <!-- FOR MAP -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
        integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
        crossorigin=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.12/leaflet-routing-machine.min.js"></script>
    <script src="http://www.liedman.net/lrm-graphhopper/dist/lrm-graphhopper-1.2.0.min.js"></script>
    <link rel="stylesheet" href="//unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css"
        type="text/css">
    <script src="//unpkg.com/leaflet-gesture-handling"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.0.4/MarkerCluster.Default.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.0.4/leaflet.markercluster.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.12/leaflet-routing-machine.min.js"></script>
    <script src="http://www.liedman.net/lrm-graphhopper/dist/lrm-graphhopper-1.2.0.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/pusher/6.0.3/pusher.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <script src="https://cdn-geoweb.s3.amazonaws.com/esri-leaflet/0.0.1-beta.5/esri-leaflet.js"></script>
    <script src="https://cdn-geoweb.s3.amazonaws.com/esri-leaflet-geocoder/0.0.1-beta.5/esri-leaflet-geocoder.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn-geoweb.s3.amazonaws.com/esri-leaflet-geocoder/0.0.1-beta.5/esri-leaflet-geocoder.css">
    
</head>
<body>
    <div class="header">
        <div class="buttonsLeft">
            <a href="" class="logoBtn">
                <img class="erralogo" src="<?php echo base_url();?>assets/images/erralogo.png" alt="erra">
            </a>
            
            <div class="mainButtons">
                <a id="homeBtn" class="btn clickBtn" href="<?php echo base_url();?>#home">Home</a>
                <a id="contactsBtn" class="btn clickBtn" href="<?php echo base_url();?>#contacts">Contacts</a>
                <a id="safetyBtn" class="btn clickBtn" href="<?php echo base_url();?>#safety">Safety Precautions</a>
                <a id="aboutBtn" class="btn clickBtn" href="<?php echo base_url();?>#about">About</a>
                <a id="hazardBtn" class="btn clickBtn" href="<?php echo base_url();?>hazard_map">Hazard Map</a>
                <a id="evacuationBtn" class="btn clickBtn" href="<?php echo base_url();?>evacuation">Evacuation Centers</a>
            </div>
            <button class="btn" id="menu"><i class="fa fa-bars"></i></button>
            <button class="btn pull-left" id="closeBtn"><i class="fa fa-times"></i></button>
        </div>
        
        <div class="noneDesktopButtons">
            <a id="homeBtnSmallerScreen" class="btn clickBtnSmallerScreen" href="<?php echo base_url();?>#home">Home</a>
            <a id="contactsBtnSmallerScreen" class="btn clickBtnSmallerScreen" href="<?php echo base_url();?>#contacts">Contacts</a>
            <a id="safetyBtnSmallerScreen" class="btn clickBtnSmallerScreen" href="<?php echo base_url();?>#safety">Safety Precautions</a>
            <a id="aboutBtnSmallerScreen" class="btn clickBtnSmallerScreen" href="<?php echo base_url();?>#about">About</a>
            <a id="hazardBtnSmallerScreen" class="btn clickBtnSmallerScreen" href="<?php echo base_url();?>hazard_map">Hazard Map</a>
            <a id="evacuationBtnSmallerScreen" class="btn clickBtnSmallerScreen" href="<?php echo base_url();?>evacuation">Evacuation Centers</a>
        </div>
    </div>
    
