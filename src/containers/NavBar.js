import React from "react";
import {NavDropdown} from 'react-bootstrap'
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
          <a className="nav-link" href="/covid-19">COVID-19 UPDATE</a>
      </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="/welcome">WELCOME</a>
        </li>
        <li className="nav-item mx-2 dropdown">
          <NavDropdown  id="basic-nav-dropdownMenu" title="ABOUT"><i className="fas fa-angle-down ml-2"></i>
          <div className="dropdown-menu border-0" aria-labelledby="dropdownMenu">
            <NavDropdown.Item href="/staff">VISION & MISSION VALUES</NavDropdown.Item>
            <NavDropdown.Item href="/values">VISION & MISSION VALUES</NavDropdown.Item>
          </div>
          </NavDropdown>
        </li>
        <li className="nav-item mx-2 dropdown border-0">
          <NavDropdown href="/connect" id="dropdownMenu" title="CONNECT"><i className="fas fa-angle-down ml-2"></i>
          <div className="dropdown-menu border-0" aria-labelledby="dropdownMenu">
            <NavDropdown.Item className="dropdown-item" href="./announcements">ANNOUNCEMENTS</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" href="./bridgegroups">BRIDGE GROUPS</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" href="./committees">COMMITTEES</NavDropdown.Item>
            {/* <a className="dropdown-item" href="./events">EVENTS</a> */}
          </div>
          </NavDropdown>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="./worship">WORSHIP</a>
        </li>
        {/*<li className="nav-item mx-2">
          <a className="nav-link" href="./prayer">PRAYER</a>
        </li> */}
        <li className="nav-item mx-2">
          <a className="nav-link" href="/prayer" >CONTACT <i className="fas fa-paper-plane"></i></a>
        </li>
        <li className="nav-item mx-2">
          <button className="btn btn-outline-dark px-4 rounded-0 tithely-give-btn" data-church-id="411909">GIVE</button>
        </li>
      </ul>
    </div>
  </nav>

);

export default NavBar;