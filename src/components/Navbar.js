import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navigationdiv'>
      <div className='navigation-logo'>
        <h1>logo</h1>
      </div>

      <div className='navigation-tags'>
        <div className='navigation-hamburger' onClick={toggleMenu}>
          <h1>☰</h1>
        </div>

        <div className={`navigation-hamburger-content ${isMenuOpen ? 'show-menu' : ''}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
