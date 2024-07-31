import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './hom.css'; // Ensure this CSS file is created and included

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
// src/components/HomePage.jsx


  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (searchQuery.toLowerCase() === 'buy') {
        navigate('/buy');
      } else if (searchQuery.toLowerCase() === 'rent') {
        navigate('/rent');
      } else if (searchQuery.toLowerCase() === 'sell') {
        navigate('/sell');
      } else {
        console.log("Searching for:", searchQuery);
      }
    }
  };

  const handleViewDetails = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Meeting specific property requirements</h1>
          <p>Explore the best properties in your area with our expert guidance.</p>
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search real estate..." 
              value={searchQuery}
              onChange={handleSearch}
              onKeyDown={handleSearchKeyDown}
            />
          </div>
        </div>
        <div className="hero-image">
          {/* <img src="https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_1280.jpg" alt="Hero" /> */}
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
            <img src="https://rtsites.rt-sb.net/Sites/631/Themes/PropertyPortals/BS3/img/i110.jpg" alt="Property 1" />
            <div className="property-info">
              <h3>Corner Property</h3>
              <p>$500,000</p>
              <p>2000 sqft</p>
              <p>Residential</p>
              <button className="btn" onClick={() => handleViewDetails(1)}>View Details</button>
            </div>
          </div>
          <div className="property-card">
            <img src="https://uploads-cf.cdn.placester.net/images%2F55c10510b1c93c3e2300000e%2F224060035%2F224060035_1.jpg?d" alt="Property 2" />
            <div className="property-info">
              <h3>Modern Apartment</h3>
              <p>$300,000</p>
              <p>1200 sqft</p>
              <p>Residential</p>
              <button className="btn" onClick={() => handleViewDetails(2)}>View Details</button>
            </div>
          </div>
          <div className="property-card">
            <img src="https://images.freeimages.com/images/large-previews/af9/barren-land-1177515.jpg" alt="Property 3" />
            <div className="property-info">
              <h3>Residential Land</h3>
              <p>$750,000</p>
              <p>1500 sqft</p>
              <p>Residential</p>
              <button className="btn" onClick={() => handleViewDetails(3)}>View Details</button>
            </div>
          </div>
        </div>
      </section>

      <section className="buy-sell-rent">
        <div className="buy-home">
          <img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg-1.webp" alt="buy"/>
          <h2>Buy a property</h2>
          <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
          <Link to="/buy" className="cta-btn">Browse Homes</Link>
        </div>
        <div className="sell-home">
          <img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-sell-lg-1.webp" alt="sell"/>
          <h2>Sell a property</h2>
          <p>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
          <Link to="/sell" className="cta-btn">See Your Options</Link>
        </div>
        <div className="rent-home">
          <img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-rent-lg-1.webp" alt="rent"/>
          <h2>Rent a property</h2>
          <p>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
          <Link to="/rent" className="cta-btn">Rent a Home</Link>
        </div>
      </section>
      
      <section className="seller-ratings">
        <h2>How are sellers rated?</h2>
        <div className="rating-cards">
          <div className="rating-card">
            <h3>High Response Rate</h3>
            <p>We pick sellers for you who give you priority. Over 90% of our top sellers respond to enquiries within the first 24 hours!</p>
          </div>
          <div className="rating-card">
            <h3>Wide Coverage</h3>
            <p>Sellers with a wide variety of properties are more likely to satisfy your demands. More the options, better is your decision.</p>
          </div>
          <div className="rating-card">
            <h3>Deals Closed</h3>
            <p>We choose sellers who have previously closed deals with similar requirement as you have. They'll understand your needs better.</p>
          </div>
          <div className="rating-card">
            <h3>Rated & Reviewed</h3>
            <p>Testimonials from genuine buyers are the best way to judge a seller. Better the ratings, better will be your experience.</p>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <h2>Ready to Find Your New Home?</h2>
        <p>Contact us today to start your search with our dedicated team.</p>
        <Link to="/property" className="option-btn">Get in touch</Link>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2><Link to="/about">About Us</Link></h2>
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
          <div className="footer-section quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/properties-for-sale">Properties for Sale</Link></li>
              <li><Link to="/properties-for-rent">Properties for Rent</Link></li>
              <li><Link to="/sell">Sell a Property</Link></li>
              <li><Link to="/buy">Buy a Property</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-section social-media">
            <h2>Follow Us</h2>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
          <div className="footer-section newsletter">
            <h2>Newsletter Signup</h2>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/sitemap">Site Map</Link></li>
          </ul>
          <p>&copy; 2024 Real Estate Company. All rights reserved.</p>
        </div>
       
      </footer>

    </div>
  );
};

export default HomePage;
