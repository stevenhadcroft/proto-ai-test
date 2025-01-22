// create a burger menu on the top left of the homepage with 3 menu items : Home, About Us, News 

import { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav className={`menu-items ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/news">News</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;