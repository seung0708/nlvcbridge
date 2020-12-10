import React from 'react';

const Worship = () => (
    <div class="container">
    <div class="row my-5">
        <div class="col-md-12 px-4">
            <h2>SUNDAY WORSHIP</h2>
            <p class="text-muted">November 22, 2020</p>
            <hr />
        </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-12 px-4 text-center">
        <div class="video-responsive">
          <iframe title="sermon" width="800" height="450" src="https://www.youtube.com/embed/yIbGyGi87Qo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-12 px-4 text-center">
        <a href="./announcements" class="btn btn-outline-secondary rounded-0 btn-sm-block my-3">ANNOUNCEMENTS</a>
        <button class="btn btn-outline-secondary rounded-0 tithely-give-btn btn-sm-block my-3" data-church-id="411909">GIVE</button> 
        <a href="https://www.youtube.com/watch?v=yOCov5YD4MQ&ab_channel=NLVC%3ATheBridge" rel="referrence" class="btn btn-outline-secondary rounded-0 btn-sm-block my-3">PREVIOUS WEEK</a>  
      </div>
    </div>
  </div>
)

export default Worship;