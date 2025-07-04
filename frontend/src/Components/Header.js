import React, { useState, useEffect } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Toggle menu for mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#home" className="nav__logo">OMED</a>
        </div>

        <div className={`nav__menu ${menuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={() => setMenuOpen(false)}>About Me</a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={() => setMenuOpen(false)}>Skills</a>
            </li>
            <li className="nav__item">
              <a href="#project" className="nav__link" onClick={() => setMenuOpen(false)}>Projects</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;