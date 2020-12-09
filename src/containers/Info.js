import React from 'react';
import {Link} from 'react-router-dom';
import Events from '../components/Events';

const Info = () => (
    <div class="container-fluid">
    <div class="row text-center" id="middle">
      <a href="./values" class="col-lg-2" id="test">
          <i class="fas fa-church fa-3x mb-4"></i>
          <h6>VISION</h6>
      </a>
      <a href="./worship" class="col-lg-2" id="sermons">
          <i class="fas fa-headphones-alt fa-3x mb-4"></i>
          <h6>WORSHIP</h6>
      </a>
      <a href="./bridgegroups" class="col-lg-2" id="connect">
          <i class="fas fa-link fa-3x mb-4"></i>
          <h6>CONNECT</h6>
      </a>
      <a href="./announcements" class="col-lg-2" id="news" data-target="#news-modal">
        <i class="fas fa-bullhorn fa-3x mb-4"></i>
        <h6>NEWS</h6>
      </a>
      <Link to="/events" class="col-lg-2" id="events">
          <i class="far fa-calendar-alt fa-3x mb-4"></i>
          <h6>UPCOMING EVENTS</h6>
      </Link>
      <a href="./committees" class="col-lg-2" id="prayer">
        <i class="fas fa-users fa-3x mb-4"></i>
        <h6>GET INVOLVED</h6>
      </a>
    </div>
  </div>
)

export default Info;