import React from 'react';
import './Navbar.css';
import GlobeIcon from '../frontend/globe-icon.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-content">
          <a className="teacher-name" href="/">
          Мир Анекдотов
          </a>
          <img src={GlobeIcon} alt="Globe Icon" className="globe-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
