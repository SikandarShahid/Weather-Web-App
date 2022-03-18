import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className='navbar_Link'>
          <h3 className="navbar_heading">WeatherApp</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
