import React, { useState, useRef, useEffect } from 'react';
import { useProperties } from '../context/propertycontext';
import './buy.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { FaSearch } from 'react-icons/fa';

const BuyPage = () => {
  const { properties } = useProperties();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showContactModal, setShowContactModal] = useState(false);
  const [showEmbeddedMap, setShowEmbeddedMap] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [paymentData, setPaymentData] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [maintenanceData, setMaintenanceData] = useState({ issue: '', description: '' });
  const mapRef = useRef(null);

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
    setShowContactModal(false);
    setShowEmbeddedMap(false);
    setShowPaymentModal(false);
    setShowMaintenanceModal(false);
  };

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentFormChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleMaintenanceFormChange = (e) => {
    const { name, value } = e.target;
    setMaintenanceData({ ...maintenanceData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowContactModal(false);
  };

  const handlePaymentFormSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', paymentData);
    setShowPaymentModal(false);
  };

  const handleMaintenanceFormSubmit = (e) => {
    e.preventDefault();
    console.log('Maintenance request submitted:', maintenanceData);
    setShowMaintenanceModal(false);
  };

  const handleShowMap = () => {
    setShowEmbeddedMap(true);
  };

  const handlePaymentClick = () => {
    setShowPaymentModal(true);
  };

  const handleMaintenanceClick = () => {
    setShowMaintenanceModal(true);
  };

  const filteredProperties = properties.filter(property =>
    property.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (selectedProperty && mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedProperty]);

  return (
    <div className="buy-page">
      <h1>Properties for Sale</h1>
      <div className="search-bar-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar1"
        />
      </div>
      <div className="property-cards">
        {filteredProperties.map((property, index) => (
          <div className="property-card" key={index}>
            <div className="property-image-container">
              <img 
                src={property.image} 
                alt={`Property ${index}`} 
              />
              <button 
                className="view-details-button" 
                onClick={() => handleViewDetails(property)}
              >
                View Details
              </button>
            </div>
            <div className="property-info">
              <h3>{property.address}</h3>
              <div className="property-info-container">
                <p>{property.description}</p>
                <p>{property.price}</p>
              </div>
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
            {selectedProperty.latitude && selectedProperty.longitude && (
              <MapContainer
                center={[selectedProperty.latitude, selectedProperty.longitude]}
                zoom={13}
                style={{ height: "400px", width: "100%" }}
                ref={mapRef}
                id="map-container"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[selectedProperty.latitude, selectedProperty.longitude]} />
              </MapContainer>
            )}
            <button className="contact-button" onClick={handleContactClick}>
              Contact
            </button>
            <button className="contact-button" onClick={handleShowMap}>
              Show Embedded Map
            </button>
            <button className="payment-button" onClick={handlePaymentClick}>
              Make Payment
            </button>
            <button className="maintenance-button" onClick={handleMaintenanceClick}>
              Report Maintenance Issue
            </button>
          </div>
        </div>
      )}

      {showContactModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>Contact Information</h3>
            <p><strong>Owner's Number:</strong> {selectedProperty.ownerNumber}</p>
            <p><strong>Agent's Number:</strong> {selectedProperty.agentNumber}</p>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <button type="submit">Continue</button>
            </form>
          </div>
        </div>
      )}

      {showPaymentModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>Payment Information</h3>
            <form onSubmit={handlePaymentFormSubmit}>
              <div>
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handlePaymentFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="expiryDate">Expiry Date:</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={handlePaymentFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handlePaymentFormChange}
                  required
                />
              </div>
              <button type="submit">Submit Payment</button>
            </form>
          </div>
        </div>
      )}

      {showMaintenanceModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>Report Maintenance Issue</h3>
            <form onSubmit={handleMaintenanceFormSubmit}>
              <div>
                <label htmlFor="issue">Issue:</label>
                <input
                  type="text"
                  id="issue"
                  name="issue"
                  value={maintenanceData.issue}
                  onChange={handleMaintenanceFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={maintenanceData.description}
                  onChange={handleMaintenanceFormChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit Request</button>
            </form>
          </div>
        </div>
      )}

      {showEmbeddedMap && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Our Location</h2>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.953613939483!2d79.13782741462207!3d10.790483792316394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5525a1f5d0c6b1%3A0x2f0e62e07367a5f2!2sTamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1628850941730!5m2!1sen!2sus"
              style={{ height: '400px', width: '100%' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyPage;
