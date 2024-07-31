import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.jpg'; // Adjust the path to your logo image
import './nav.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-title">
        <img src={logoImage} alt="Logo" className="navbar-logo" />
        <h1>Urban Oasis</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <Link to="/buy" className="dropbtn">Buy</Link>
          <div className="dropdown-content">
            <Link to="/homes-for-sale">Homes for sale</Link>
            <Link to="/foreclosures">Foreclosures</Link>
            <Link to="/for-sale-by-owner">For sale by owner</Link>
            <Link to="/open-houses">Open houses</Link>
            <Link to="/new-construction">New construction</Link>
            <Link to="/coming-soon">Coming soon</Link>
            <Link to="/recent-home-sales">Recent home sales</Link>
            <Link to="/all-homes">All homes</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/home-buying-guide">Home Buying Guide</Link>
            <Link to="/foreclosure-center">Foreclosure center</Link>
            <Link to="/real-estate-app">Real estate app</Link>
            <Link to="/down-payment-assistance">Down payment assistance</Link>
          </div>
        </li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/property">Manage Property</Link></li>
        <li className="dropdown">
          <Link to="/login" className="dropbtn">
            <i className="fas fa-user"></i> Profile
          </Link>
          <div className="dropdown-content">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/my-account">My Account</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
