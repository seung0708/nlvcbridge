import React from "react";
import main from '../assets/images/main.jpg'

const Main = () => (
    <div class="bd-example" id="pix">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={main} class="d-block w-100" alt="..." id="main-pic" />
          <div class="carousel-caption d-none d-md-block">
            <h2 class="text-dark" id="msg">WELCOME TO THE BRIDGE</h2>
            <p class="text-dark font-italic">"a place to connect"</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
);

export default Main;