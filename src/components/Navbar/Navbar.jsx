import React from 'react';
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
      <img className='logo' src={Logo} alt="Logo" />
      <ul className='nav-menu'>
        <li className='nav-links'>Home</li>
        <li className='nav-links'>Programs</li>
        <li className='nav-links'>Why Us</li>
        <li className='nav-links'>Plans</li>
        <li className='nav-links'>Testimonials</li>
      </ul>
    </div>
  );
}

export default Navbar;
