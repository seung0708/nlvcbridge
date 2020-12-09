import React from 'react';

const Location = () => (
    <div class="row" id="location">
    <div class="col-md-12">
      <div id="map"></div>
      <div class="row">
        <div class="col-md-3 text-center mx-5" id="hello">
          <h6 class="alert alert-warning shadow-sm">MAP & DIRECTION</h6>
        </div>
      </div>
      <div class="row">
          <div class="col-md-3 text-center mx-5" id="info">
            <div class="alert alert-light text-right shadow-sm">
              <p class="mt-2 text-right" id="add"><i class="fas fa-map-pin mr-2"></i>4226 E. Verdant St. LA, CA 90039</p>
              <p class="mt-2 text-right" id="add"><i class="far fa-clock mr-2"></i>11:30AM</p>
              <a href="https://goo.gl/maps/UaFNAvKd9JR2" class="btn btn-outline-secondary btn-sm rounded-0" target="_blank" id="direction" rel="noreferrer"><i class="fas fa-directions mr-1"></i> DIRECTION</a> 
            </div>  
          </div>
        </div>
    </div>
  </div>
);

export default Location;