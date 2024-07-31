import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProperties } from '../context/propertycontext';
import './sell.css';

const SellPage = () => {
  const { addProperty } = useProperties();
  const [propertyDetails, setPropertyDetails] = useState({
    sellerName: '',
    phoneNumber: '',
    propertyAddress: '',
    propertyDescription: '',
    propertyImage: null,
    documents: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setPropertyDetails({ ...propertyDetails, [name]: files[0] });
    } else {
      setPropertyDetails({ ...propertyDetails, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert('Please sign in to upload property details.');
      navigate('/login');
      return;
    }
    addProperty({
      ...propertyDetails,
      image: URL.createObjectURL(propertyDetails.propertyImage),
    });
    alert('Property details submitted successfully!');
    setPropertyDetails({
      sellerName: '',
      phoneNumber: '',
      propertyAddress: '',
      propertyDescription: '',
      propertyImage: null,
      documents: null,
    });
  };

  const handleRealChoiceClick = () => {
    navigate('/src/pages/property.js');
  };

  const handleSellerMarketplaceClick = () => {
    navigate('/sellersmarketplace');
  };

  const handleEnterHomeAddressClick = () => {
    navigate('/homeestimate');
  };

  const isAuthenticated = true;

  return (
    <div className="sell-page">
      <div className="selling-options">
        <div className="option">
          <img src='https://static.rdc.moveaws.com/rdc-ui/pictos/picto-agent-home-sale.svg' alt="get start"/>
          <h2>RealChoice<sup>TM</sup> Selling</h2>
          <p>Pick the right agent for you. Answer a few questions and get a list of top agents in your area. Compare their costs and services, and choose the right agent for you.</p>
          <button className="btn" onClick={handleRealChoiceClick}>Get Started</button>
        </div>
        <div className="option">
          <img src='https://static.rdc.moveaws.com/rdc-ui/pictos/picto-instant-offers.svg' alt="mark"/>
          <h2>Seller's Marketplace</h2>
          <p>Get offers for your home. Visit Seller’s Marketplace to find out how you can sell without listing or stay in your home while you finance the purchase of your next one.</p>
          <button className="btn" onClick={handleSellerMarketplaceClick}>Explore Offers</button>
        </div>
        <div className="option">
          <img src='https://static.rdc.moveaws.com/rdc-ui/pictos/picto-couple-couch-laptop.svg' alt="mark"/>
          <h2>RealEstimate<sup>TM</sup></h2>
          <p>Track your home value. See your RealEstimate<sup>℠</sup> valuation information over time compared to homes in your area.</p>
          <button className="btn" onClick={handleEnterHomeAddressClick}>Enter home address</button>
        </div>
        {/* Additional options */}
      </div>
      <h1>Sell Your Property</h1>
      <form className="property-form" onSubmit={handleSubmit}>
        <label>
          Seller Name:
          <input type="text" name="sellerName" value={propertyDetails.sellerName} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={propertyDetails.phoneNumber} onChange={handleChange} required />
        </label>
        <label>
          Property Address:
          <input type="text" name="propertyAddress" value={propertyDetails.propertyAddress} onChange={handleChange} required />
        </label>
        <label>
          Property Description:
          <textarea name="propertyDescription" value={propertyDetails.propertyDescription} onChange={handleChange} required />
        </label>
        <label>
          Property Image:
          <input type="file" name="propertyImage" onChange={handleChange} required />
        </label>
        <label>
          Documents:
          <input type="file" name="documents" onChange={handleChange} required />
        </label>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default SellPage;
