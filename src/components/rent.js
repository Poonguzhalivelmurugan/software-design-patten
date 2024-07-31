import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './rent.css'; // Ensure this CSS file is created and included

const RentPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState('properties');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // Dummy property data
  const properties = [
    {
      id: 1,
      image: 'https://wallpaperaccess.com/full/1899390.jpg',
      title: '2 BHK Villa for Rent in Narayana Swami Kalyana Mandapam',
      price: '₹10,000',
      otherCharges: 'See other charges',
      size: '1200 Sq-ft',
      address: 'Narayana Swami Kalyana Mandapam, Arakkonam',
      description: 'Semi-Furnished, 2 Bathrooms, Bachelors preferred, Available immediately, Carpet Area: 811 sqft, West Facing, ₹12/sqft, Age Of Construction: 5 to 10 years',
      ownerName: 'Nirmal',
      status: 'Immediately',
      furnishedStatus: 'Semi-Furnished',
      ageOfConstruction: '5 to 10 years',
      contact: 'Contact Owner'
    },
    {
      id: 2,
      image: 'https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-7-1760-1000.jpg',
      title: '2 BHK Villa for Rent in SH58 Arakkonam',
      price: '₹15,000',
      otherCharges: 'See other charges',
      size: '1600 Sq-ft',
      address: 'SH58, Arakkonam',
      description: 'Unfurnished, 2 Bathrooms, Bachelors preferred, Available immediately, Carpet Area: 1600 sqft, East Facing, Overlooking Garden/Park',
      ownerName: 'Vinod Kumar',
      status: 'Immediately',
      furnishedStatus: 'Unfurnished',
      ageOfConstruction: '5 to 10 years',
      contact: 'Contact Owner'
    },
    // Add other properties as needed
    {
      id: 3,
      image: 'https://dyimg1.realestateindia.com/proj_images/project32668/proj_img-32668_2-770x400.jpg',
      title: '3 BHK Villa for Rent in SH58 Arakkonam',
      price: '₹20,000',
      otherCharges: 'See other charges',
      size: '1600 Sq-ft',
      address: 'SH58, Chennai',
      description: 'Unfurnished, 2 Bathrooms, Bachelors preferred, Available immediately, Carpet Area: 1600 sqft, East Facing, Overlooking Garden/Park',
      ownerName: 'Vinod Kumar',
      status: 'Immediately',
      furnishedStatus: 'Unfurnished',
      ageOfConstruction: '5 to 10 years',
      contact: 'Contact Owner'
    },
    {
      id: 4,
      image: 'https://dynamic.realestateindia.com/proj_images/project40869/proj_img-40869_1-770x400.jpg',
      title: '3 BHK Villa for Rent ',
      price: '₹15,000',
      otherCharges: 'See other charges',
      size: '1600 Sq-ft',
      address: 'SH58, Erode',
      description: 'Unfurnished, 2 Bathrooms, Bachelors preferred, Available immediately, Carpet Area: 1600 sqft, East Facing, Overlooking Garden/Park',
      ownerName: 'Vinod Kumar',
      status: 'Immediately',
      furnishedStatus: 'Unfurnished',
      ageOfConstruction: '5 to 10 years',
      contact: 'Contact Owner'
    },
    {
      id: 5,
      image: 'https://newprojects.99acres.com/projects/sarvesh_construction_chennai/sai_sarvesh/images/saadjyx_1706368466_469838174_med.jpg',
      title: '2 BHK ',
      price: '₹15,000',
      otherCharges: 'See other charges',
      size: '1600 Sq-ft',
      address: 'SH58, Arakkonam',
      description: 'Unfurnished, 2 Bathrooms, Bachelors preferred, Available immediately, Carpet Area: 1600 sqft, East Facing, Overlooking Garden/Park',
      ownerName: 'Vinod Kumar',
      status: 'Immediately',
      furnishedStatus: 'Unfurnished',
      ageOfConstruction: '5 to 10 years',
      contact: 'Contact Owner'
    },
    {
      id: 6,
      image: 'https://newprojects.99acres.com/projects/jk_constructions_engineers_and_builders/jk_arunikaa/images/rrsn3ih_1713767297_487631492_med.jpg',
      title: '2 BHK Villa for Rent in SH58 Arakkonam',
      price: '₹8,000',
      otherCharges: 'See other charges',
      size: '1600 Sq-ft',
      address: 'in Velachery, Chennai South',
      description: 'Unfurnished, 2 Bathrooms, Bachelors preferred, Available immediately, Carpet Area: 1600 sqft, East Facing, Overlooking Garden/Park',
      ownerName: 'Vinod Kumar',
      status: 'Immediately',
      furnishedStatus: 'Unfurnished',
      ageOfConstruction: '5 to 10 years',
      contact: 'Contact Owner'
    },
    {
      id: 7,
      image: 'https://newprojects.99acres.com/projects/rajparis_civil_constructions/rajparis_diamond/images/xpbubvo_1700203858_456619678_med.jpg',
      title: '3 BHK ',
      price: '₹15,000',
      otherCharges: 'See other charges',
      size: '1600 Sq-ft',
      address: 'Rajparis Diamond in Mogappair West, Chennai North',
      description: 'Unfurnished, 2 Bathrooms, Bachelors preferred, Available immediately, Carpet Area: 1600 sqft, East Facing, Overlooking Garden/Park',
      ownerName: 'Vinod Kumar',
      status: 'Immediately',
      furnishedStatus: 'Unfurnished',
      ageOfConstruction: '5 to 10 years',
      contact: 'Contact Owner'
    },
    {
      id: 8,
      image: 'https://newprojects.99acres.com/projects/ps_srijan_developers/p_s_srijan_nexterra/images/tvmqjqvd_med.jpg',
      title: '2, 3 BHK ',
      price: '₹20,000',
      otherCharges: 'See other charges',
      size: '1600 Sq-ft',
      address: '2, 3 BHK Flat in Sholinganallur, Chennai South',
      description: 'Unfurnished, 2 Bathrooms, Bachelors preferred, Available immediately, Carpet Area: 1600 sqft, East Facing, Overlooking Garden/Park',
      ownerName: 'Kumar',
      status: 'Immediately',
      furnishedStatus: 'Unfurnished',
      ageOfConstruction: '5 to 10 years',
      contact: 'Contact Owner'
    },
    {
      id: 9,
      image: 'https://static.99acres.com/universalhp/img/d_hp_property_type_1.webp',
      title: '2 BHK Villa for Rent in SH58 Arakkonam',
      price: '₹10,000',
      otherCharges: 'See other charges',
      size: '1600 Sq-ft',
      address: 'Avinashi,Coimbatore',
      description: 'Unfurnished, 2 Bathrooms, Bachelors preferred, Available immediately, Carpet Area: 1600 sqft, East Facing, Overlooking Garden/Park',
      ownerName: 'Vel',
      status: 'Immediately',
      furnishedStatus: 'Unfurnished',
      ageOfConstruction: '5 to 10 years',
      contact: 'Contact Owner'
    },
    // Add other properties as needed
  ];

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
  };

  const handleRentPayment = () => {
    navigate('/rent-payment');
  };

  const handleReportIssue = () => {
    navigate('/report-issue');
  };

  return (
    <div className="rent-page">
      <h1>Properties for Rent</h1>
      <div className="search-bar">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="tabs">
        <button className={view === 'properties' ? 'active' : ''} onClick={() => setView('properties')}>Properties</button>
        <button className={view === 'topAgents' ? 'active' : ''} onClick={() => setView('topAgents')}>Top Agents</button>
      </div>
      {view === 'properties' && (
        <div className="property-cards">
          {filteredProperties.map((property) => (
            <div className="property-card" key={property.id}>
              <img src={property.image} alt={`Property ${property.id}`} />
              <div className="property-info">
                <h3>{property.title}</h3>
                <p>{property.price} {property.otherCharges}</p>
                <p>{property.size} For Rent in {property.address}</p>
                <p>{property.description}</p>
                <button className="btn" onClick={() => handleViewDetails(property)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {view === 'topAgents' && (
        <div className="top-agents">
          {/* Add agent data and cards here */}
        </div>
      )}
      {showModal && selectedProperty && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedProperty.image} alt={`Property ${selectedProperty.id}`} />
            <h3>{selectedProperty.title}</h3>
            <p>{selectedProperty.price} {selectedProperty.otherCharges}</p>
            <p>{selectedProperty.size} For Rent in {selectedProperty.address}</p>
            <p>{selectedProperty.description}</p>
            <p>Owner: {selectedProperty.ownerName}</p>
            <p>Status: {selectedProperty.status}</p>
            <p>Furnished Status: {selectedProperty.furnishedStatus}</p>
            <p>Age of Construction: {selectedProperty.ageOfConstruction}</p>
            <p>Contact: {selectedProperty.contact}</p>
            <button className="btn" onClick={handleRentPayment}>Make Payment</button>
            <button className="btn" onClick={handleReportIssue}>Report Issue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentPage;
