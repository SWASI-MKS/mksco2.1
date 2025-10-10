// src/Header.jsx
import React from 'react';
import './App.css';
import logo from './logo.png';

const Header = () => {
  return (
    <header className="header-menu-section">
      <div className="logo-container">
        <div className="logo-frame">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        
        <div className="nav-right">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </header>
  );
};


export default Header;
