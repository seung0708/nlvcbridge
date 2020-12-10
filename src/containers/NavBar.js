import React from "react";
import logo from '../assets/images/logo.png'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white shadow-sm">
    <a className="navbar-brand" href="https://www.nlvcbridge.com"><img className="pl-3" src={logo} height="50" alt="logo" /> <span className="text-warning">T H E</span> B R I D G E</a>
    <button className="navbar-toggler border-0 " type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="click">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mx-2">
          <a className="nav-link" href="./covid-19">COVID-19 UPDATE</a>
      </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="./welcome">WELCOME</a>
        </li>
        <li className="nav-item mx-2 dropdown">
          <a className="nav-link"  id="dropdownMenu" data-toggle="dropdown">ABOUT<i className="fas fa-angle-down ml-2"></i></a>
          <div className="dropdown-menu border-0" aria-labelledby="dropdownMenu">
            <a className="dropdown-item" href="./values">VISION & MISSION VALUES</a>
            <a className="dropdown-item" href="./values">VISION & MISSION VALUES</a>
          </div>
        </li>
        <li className="nav-item mx-2 dropdown border-0">
          <a className="nav-link" href="/connect" id="dropdownMenu" data-toggle="dropdown">CONNECT<i className="fas fa-angle-down ml-2"></i></a>
          <div className="dropdown-menu border-0" aria-labelledby="dropdownMenu">
            <a className="dropdown-item" href="./announcements">ANNOUNCEMENTS</a>
            <a className="dropdown-item" href="./bridgegroups">BRIDGE GROUPS</a>
            <a className="dropdown-item" href="./committees">COMMITTEES</a>
            {/* <a className="dropdown-item" href="./events">EVENTS</a> */}
          </div>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="./worship">WORSHIP</a>
        </li>
        {/*<li className="nav-item mx-2">
          <a className="nav-link" href="./prayer">PRAYER</a>
        </li> */}
        <li className="nav-item mx-2">
          <a className="nav-link" href="mailto:info@nlvcbridge.com" >CONTACT <i className="fas fa-paper-plane"></i></a>
        </li>
        <li className="nav-item mx-2">
          <button className="btn btn-outline-dark px-4 rounded-0 tithely-give-btn" data-church-id="411909">GIVE</button>
        </li>
      </ul>
    </div>
  </nav>

);

export default NavBar;