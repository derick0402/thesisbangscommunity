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
</head>
<body>
    <div class="header">
        <div class="buttonsLeft">
            <a href="" class="logoBtn">
                <img class="erralogo" src="<?php echo base_url();?>assets/images/erralogo.png" alt="erra">
            </a>
            
            <div class="mainButtons">
                <button id="homeBtn" class="btn clickBtn" href="">Home</button>
                <button id="contactsBtn" class="btn clickBtn" href="">Contacts</button>
                <button id="safetyBtn" class="btn clickBtn" href="">Safety Precautions</button>
                <button id="aboutBtn" class="btn clickBtn" href="">About</button>
                <button id="hazardBtn" class="btn clickBtn" href="">Hazard Maps</button>
                <button id="evacuationBtn" class="btn clickBtn" href="">Evacuation Centers</button>
            </div>
            <button class="btn" id="menu"><i class="fa fa-bars"></i></button>
            
        </div>
        <button class="btn pull-left" id="closeBtn"><i class="fa fa-times"></i></button>
        <div class="noneDesktopButtons">
            <button id="homeBtnSmallerScreen" class="btn clickBtnSmallerScreen" href="">Home</button>
            <button id="contactsBtnSmallerScreen" class="btn clickBtnSmallerScreen" href="">Contacts</button>
            <button id="safetyBtnSmallerScreen" class="btn clickBtnSmallerScreen" href="">Safety Precautions</button>
            <button id="aboutBtnSmallerScreen" class="btn clickBtnSmallerScreen" href="">About</button>
            <button id="hazardBtnSmallerScreen" class="btn clickBtnSmallerScreen" href="">Hazard Maps</button>
            <button id="evacuationBtnSmallerScreen" class="btn clickBtnSmallerScreen" href="">Evacuation Centers</button>
        </div>
    </div>
    
