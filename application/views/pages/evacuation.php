<div id="evacuation">
    <p id="evacuationTitle">Evacuation Map</p>
    <div id="evacuationContent">
        <p class="titles">Click your location on the map and it will show you the direction to the nearest evacuation center.</p>
        <p class="titles">The distance will be calculated from evacuation center to your location using the main road.</p>
        <div id="mapId">
            <div id="loadingRouting" >
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <div id="loadingRoutingSpinner"  class="spinner-border" role="status"></div>
                    <br/>
                    <p>Getting the nearest evacuation center, please wait.</p>
                </div>
                
            </div>
        </div>
    </div>
</div>
<script src="<?php echo base_url();?>assets/js/evacuation.js"></script>
<script src="<?php echo base_url();?>assets/js/evacuation_list.js"></script>