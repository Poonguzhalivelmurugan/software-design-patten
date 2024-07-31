// src/components/RentPropDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './rentpro.css'; // Ensure this CSS file is created and included

const RentPropDetail = () => {
  const { propertyId } = useParams();
  const [showContact, setShowContact] = useState(false);

  // Dummy property data
  const propertyData = {
    1: {
      title: 'Beautiful Family Home',
      price: '$500,000',
      size: '2000 sqft',
      type: 'Residential',
      description: 'A spacious and beautifully designed family home located in a tranquil neighborhood.',
      phoneNumber: '(123) 456-7890',
      mapLocation: 'https://maps.google.com/?q=Property+Location+1'
    },
    2: {
      title: 'Modern Apartment',
      price: '$300,000',
      size: '1200 sqft',
      type: 'Residential',
      description: 'A modern apartment with sleek finishes and convenient amenities in a central location.',
      phoneNumber: '(123) 456-7891',
      mapLocation: 'https://maps.google.com/?q=Property+Location+2'
    },
    // Add other properties as needed
  };

  const property = propertyData[propertyId];

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="property-detail">
      <h1>{property.title}</h1>
      <p><strong>Price:</strong> {property.price}</p>
      <p><strong>Size:</strong> {property.size}</p>
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Description:</strong> {property.description}</p>
      <div className={`contact-number ${showContact ? 'visible' : ''}`}>
        <p><strong>Contact Number:</strong> {property.phoneNumber}</p>
      </div>
      <a href={property.mapLocation} target="_blank" rel="noopener noreferrer" className="map-link">View on Map</a>
      <button className="btn-contact" onClick={handleContactClick}>
        {showContact ? 'Hide Contact Number' : 'Show Contact Number'}
      </button>
    </div>
  );
};

export default RentPropDetail;
