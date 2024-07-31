import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './prodetails.css'; // Ensure this CSS file is created and included

const PropertyDetails = () => {
  const { propertyId } = useParams();
  const [showContact, setShowContact] = useState(false);

  // Dummy data for demonstration purposes
  const propertyData = {
    1: {
      title: 'corner land',
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
    3: {
      title: 'Residential land',
      price: '$750,000',
      size: '1500 sqft',
      type: 'Residential',
      description: 'An upscale condo with luxurious features and stunning views of the city.',
      phoneNumber: '(123) 456-7892',
      mapLocation: 'https://maps.google.com/?q=Property+Location+3'
    }
  };

  const property = propertyData[propertyId];

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="property-details">
      <h1>{property.title}</h1>
      <p><strong>Price:</strong> {property.price}</p>
      <p><strong>Size:</strong> {property.size}</p>
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Description:</strong> {property.description}</p>
      <div className={`contact-number ${showContact ? 'visible' : ''}`}>
        <p><strong>Contact Number:</strong> {property.phoneNumber}</p>
      </div>
      <a href={property.mapLocation} target="_blank" rel="noopener noreferrer">
        <button className="btn">View on Map</button>
      </a>
      <button className="btn" onClick={handleContactClick}>
        {showContact ? 'Hide Contact Number' : 'Contact Us'}
      </button>
    </div>
  );
};

export default PropertyDetails;
