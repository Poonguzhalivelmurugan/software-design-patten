import React, { useState } from 'react';
import { useProperties } from '../context/propertycontext';
import './buy.css';

const BuyPage = () => {
  const { properties } = useProperties();
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="buy-page">
      <h1>Properties for Sale</h1>
      <div className="property-cards">
        {properties.map((property, index) => (
          <div className="property-card" key={index}>
            <img src={property.image} alt={`Property ${index}`} />
            <div className="property-info">
              <h3>{property.address}</h3>
              <p>{property.description}</p>
              <p>{property.price}</p>
              <button className="btn" onClick={() => handleViewDetails(property)}>View Details</button>
            </div>
          </div>
        ))}
      </div>

      {selectedProperty && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedProperty.image} alt={`Property ${selectedProperty.id}`} />
            <h3>{selectedProperty.address}</h3>
            <p>{selectedProperty.price}</p>
            <p>{selectedProperty.description}</p>
            <p><strong>Special Offers:</strong> {selectedProperty.specialOffers}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyPage;
