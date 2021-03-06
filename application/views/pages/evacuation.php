<div id="evacuation">
    <div class="d-flex justify-content-center">
        <span id="evacuationTitle">Evacuation Map</span>
    </div>
    <br/>
    <div id="evacuationContent">
        <p class="titles">Search or click your location in the map to know the direction of evacuation near you.</p>
        <p class="note">*Note: distance will be based on the route using the main road.</p>
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
<br/><br/>
<script src="<?php echo base_url();?>assets/js/evacuation.js"></script>
<script src="<?php echo base_url();?>assets/js/evacuation_list.js"></script>