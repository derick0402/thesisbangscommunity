<div id="hazardMap">
    
    <div class="d-flex justify-content-center">
        <span id="hazardMapTitle">Hazard Map</span>
    </div>
    <br/>
    <div id="hazardMapContent">
        <div id="mapId">
            <div id="loadingRouting" >
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <div id="loadingRoutingSpinner"  class="spinner-border" role="status"></div>
                    <br/>
                    <p>Getting hazard map data, please wait.</p>
                </div>
                
            </div>
        </div>
        <div id="legend"></div>
    </div>
</div>
<br/><br/>
<script src="<?php echo base_url();?>assets/js/hazard_map.js"></script>