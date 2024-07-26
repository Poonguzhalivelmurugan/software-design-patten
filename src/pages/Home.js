import React from 'react';
import { Link } from 'react-router-dom';
import './hom.css'; // Make sure to create and include this CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Explore the best properties in your area with our expert guidance.</p>
          <button className="btn">Browse Listings</button>
        </div>
        <div className="hero-image">
          <img src="https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_1280.jpg" alt="Hero" />
        </div>
      </section>
      
      <section className="options">
        <h2>What are you looking for?</h2>
        <div className="option-buttons">
          <Link to="/buy" className="option-btn">Buy a Property</Link>
          <Link to="/rent" className="option-btn">Rent a Property</Link>
        </div>
      </section>

      <section className="property-listings">
        <h2>Featured Properties</h2>
        <div className="property-cards">
          <div className="property-card">
            <img src="https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-7-1760-1000.jpg" alt="Property 1" />
            <div className="property-info">
              <h3>Beautiful Family Home</h3>
              <p>$500,000</p>
              <button className="btn">View Details</button>
            </div>
          </div>
          <div className="property-card">
            <img src="https://uploads-cf.cdn.placester.net/images%2F55c10510b1c93c3e2300000e%2F224060035%2F224060035_1.jpg?d" alt="Property 2" />
            <div className="property-info">
              <h3>Modern Apartment</h3>
              <p>$300,000</p>
              <button className="btn">View Details</button>
            </div>
          </div>
          <div className="property-card">
            <img src="https://i.ibb.co/CMF2Lv5/Real-Estate-7.jpg" alt="Property 3" />
            <div className="property-info">
              <h3>Luxury Condo</h3>
              <p>$750,000</p>
              <button className="btn">View Details</button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <h2>Ready to Find Your New Home?</h2>
        <p>Contact us today to start your search with our dedicated team.</p>
        <button className="btn">Get in Touch</button>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>We are a dedicated real estate company focused on helping you find the perfect home.</p>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: info@realestate.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section address">
            <h2>Address</h2>
            <p>123 Real Estate St.</p>
            <p>City, State, ZIP</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
