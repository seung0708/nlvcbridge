import React from "react";
import logo from '../assets/images/logo.png'

const NavBar = () => (
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-white shadow-sm">
    <a class="navbar-brand" href="https://www.nlvcbridge.com"><img class="pl-3" src={logo} height="50" alt="logo" /> <span class="text-warning">T H E</span> B R I D G E</a>
    <button class="navbar-toggler border-0 " type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="click">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mx-2">
          <a class="nav-link" href="./covid-19">COVID-19 UPDATE</a>
      </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="./welcome">WELCOME</a>
        </li>
        <li class="nav-item mx-2 dropdown">
          <a class="nav-link" href="#" id="dropdownMenu" data-toggle="dropdown">ABOUT<i class="fas fa-angle-down ml-2"></i></a>
          <div class="dropdown-menu border-0" aria-labelledby="dropdownMenu">
            <a class="dropdown-item" href="./staff">PASTORAL STAFF</a>
            <a class="dropdown-item" href="./values">VISION & MISSION VALUES</a>
          </div>
        </li>
        <li class="nav-item mx-2 dropdown border-0">
          <a class="nav-link" href="#" id="dropdownMenu" data-toggle="dropdown">CONNECT<i class="fas fa-angle-down ml-2"></i></a>
          <div class="dropdown-menu border-0" aria-labelledby="dropdownMenu">
            <a class="dropdown-item" href="./announcements">ANNOUNCEMENTS</a>
            <a class="dropdown-item" href="./bridgegroups">BRIDGE GROUPS</a>
            <a class="dropdown-item" href="./committees">COMMITTEES</a>
            {/* <a class="dropdown-item" href="./events">EVENTS</a> */}
          </div>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="./worship">WORSHIP</a>
        </li>
        {/*<li class="nav-item mx-2">
          <a class="nav-link" href="./prayer">PRAYER</a>
        </li> */}
        <li class="nav-item mx-2">
          <a class="nav-link" href="mailto:info@nlvcbridge.com" >CONTACT <i class="fas fa-paper-plane"></i></a>
        </li>
        <li class="nav-item mx-2">
          <button class="btn btn-outline-dark px-4 rounded-0 tithely-give-btn" data-church-id="411909">GIVE</button>
        </li>
      </ul>
    </div>
  </nav>

);

export default NavBar;