import React, { useState } from 'react';
import './propert.css';
import property1 from '../assets/pro1.jpg';
import property2 from '../assets/pro2.jpg';
import property3 from '../assets/pro3.jpg';
import pro4 from '../assets/pro4.jpg';
import pro5 from '../assets/pro5';
import pro6 from '../assets/pro6.jpg';
import pro7 from '../assets/pro7';
import pro8 from '../assets/pro8.jpg';
import pro9 from '../assets/pro9';

const properties = [
  {
    id: 1,
    title: '2-Bedroom Apartment in Downtown',
    image: property1,
    price: '$500,000',
    address: '123 Main St, City, State, ZIP',
    propertyType: 'Apartment',
    size: '1200 sqft',
    bedrooms: 2,
    bathrooms: 2,
    yearBuilt: 2015,
    features: {
      interior: 'Modern kitchen, Hardwood floors, Central heating and cooling',
      exterior: 'Balcony, Garage, Garden',
      community: 'Gym, Playground, Clubhouse',
    },
    description: 'A spacious 2-bedroom apartment in the heart of downtown, featuring modern amenities and close to all major attractions.',
    neighborhood: 'Located near top-rated schools, parks, and shopping centers.',
    taxes: '$3,000/year',
    hoaFees: '$200/month',
    agent: {
      name: 'John Doe',
      phone: '(123) 456-7890',
    }
  },
  {
    id: 2,
    title: 'Luxury Condo with Sea View',
    image: property2,
    price: '$750,000',
    address: '456 Oak Dr, City, State, ZIP',
    propertyType: 'Condo',
    size: '1500 sqft',
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2020,
    features: {
      interior: 'Open floor plan, Gourmet kitchen, Smart home system',
      exterior: 'Private terrace, Underground parking, Swimming pool',
      community: 'Spa, Rooftop lounge, 24/7 security',
    },
    description: 'Experience luxury living in this stunning condo with panoramic sea views and top-of-the-line finishes.',
    neighborhood: 'Exclusive neighborhood with access to fine dining, boutiques, and beaches.',
    taxes: '$5,000/year',
    hoaFees: '$350/month',
    agent: {
      name: 'Jane Smith',
      phone: '(987) 654-3210',
    }
  },
  {
    id: 3,
    title: 'Luxury Condo with Sea View',
    image: property3,
    price: '$750,000',
    address: '456 Oak Dr, City, State, ZIP',
    propertyType: 'Condo',
    size: '1500 sqft',
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2020,
    features: {
      interior: 'Open floor plan, Gourmet kitchen, Smart home system',
      exterior: 'Private terrace, Underground parking, Swimming pool',
      community: 'Spa, Rooftop lounge, 24/7 security',
    },
    description: 'Experience luxury living in this stunning condo with panoramic sea views and top-of-the-line finishes.',
    neighborhood: 'Exclusive neighborhood with access to fine dining, boutiques, and beaches.',
    taxes: '$5,000/year',
    hoaFees: '$350/month',
    agent: {
      name: 'Jane Smith',
      phone: '(987) 654-3210',
    }
  },
  {
    id: 4,
    title: 'Luxury Condo with Sea View',
    image: pro4,
    price: '$750,000',
    address: '456 Oak Dr, Ariyalur, Tamil nadu, 608901',
    propertyType: 'Condo',
    size: '1500 sqft',
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2020,
    features: {
      interior: 'Open floor plan, Gourmet kitchen, Smart home system',
      exterior: 'Private terrace, Underground parking, Swimming pool',
      community: 'Spa, Rooftop lounge, 24/7 security',
    },
    description: 'Experience luxury living in this stunning condo with panoramic sea views and top-of-the-line finishes.',
    neighborhood: 'Exclusive neighborhood with access to fine dining, boutiques, and beaches.',
    taxes: '$5,000/year',
    hoaFees: '$350/month',
    agent: {
      name: 'Jane Smith',
      phone: '(987) 654-3210',
    }
  },
  {
    id: 5,
    title: 'Luxury Condo with Sea View',
    image: pro5,
    price: '$750,000',
    address: '456 Oak Dr, coimbatore, Tamil Nadu, 608701',
    propertyType: 'Condo',
    size: '1500 sqft',
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2020,
    features: {
      interior: 'Open floor plan, Gourmet kitchen, Smart home system',
      exterior: 'Private terrace, Underground parking, Swimming pool',
      community: 'Spa, Rooftop lounge, 24/7 security',
    },
    description: 'Experience luxury living in this stunning condo with panoramic sea views and top-of-the-line finishes.',
    neighborhood: 'Exclusive neighborhood with access to fine dining, boutiques, and beaches.',
    taxes: '$5,000/year',
    hoaFees: '$350/month',
    agent: {
      name: 'Jane Smith',
      phone: '(987) 654-3210',
    }
  },
  {
    id: 6,
    title: 'Luxury Condo with Sea View',
    image: pro6,
    price: '$750,000',
    address: '456 Oak Dr, Chennai, Tamil nadu, 605981',
    propertyType: 'Resdiential',
    size: '1500 sqft',
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2020,
    features: {
      interior: 'Open floor plan, Gourmet kitchen, Smart home system',
      exterior: 'Private terrace, Underground parking, Swimming pool',
      community: 'Spa, Rooftop lounge, 24/7 security',
    },
    description: 'Experience luxury living in this stunning condo with panoramic sea views and top-of-the-line finishes.',
    neighborhood: 'Exclusive neighborhood with access to fine dining, boutiques, and beaches.',
    taxes: '$5,000/year',
    hoaFees: '$350/month',
    agent: {
      name: 'Jane Smith',
      phone: '(987) 654-3210',
    }
  },
  {
    id: 7,
    title: 'Luxury Condo with Sea View',
    image: pro7,
    price: '$750,000',
    address: '456 Oak Dr, pallakad, Kerala, 607401',
    propertyType: 'Land',
    size: '1500 sqft',
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2020,
    features: {
      interior: 'Open floor plan, Gourmet kitchen, Smart home system',
      exterior: 'Private terrace, Underground parking, Swimming pool',
      community: 'Spa, Rooftop lounge, 24/7 security',
    },
    description: 'Experience luxury living in this stunning condo with panoramic sea views and top-of-the-line finishes.',
    neighborhood: 'Exclusive neighborhood with access to fine dining, boutiques, and beaches.',
    taxes: '$5,000/year',
    hoaFees: '$350/month',
    agent: {
      name: 'Jane Smith',
      phone: '(987) 654-3210',
    }
  },
  {
    id: 8,
    title: 'Luxury Condo with Sea View',
    image: pro8,
    price: '$750,000',
    address: '456 Oak Dr, Erode, Tamil nadu, 650714',
    propertyType: 'Apartment',
    size: '1500 sqft',
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2020,
    features: {
      interior: 'Open floor plan, Gourmet kitchen, Smart home system',
      exterior: 'Private terrace, Underground parking, Swimming pool',
      community: 'Spa, Rooftop lounge, 24/7 security',
    },
    description: 'Experience luxury living in this stunning condo with panoramic sea views and top-of-the-line finishes.',
    neighborhood: 'Exclusive neighborhood with access to fine dining, boutiques, and beaches.',
    taxes: '$5,000/year',
    hoaFees: '$350/month',
    agent: {
      name: 'Jane Smith',
      phone: '(987) 654-3210',
    }
  },
  {
    id: 9,
    title: 'Luxury Condo with Sea View',
    image: pro9,
    price: '$750,000',
    address: '456 Oak Dr, City, State, ZIP',
    propertyType: 'Theni',
    size: '1500 sqft',
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2020,
    features: {
      interior: 'Open floor plan, Gourmet kitchen, Smart home system',
      exterior: 'Private terrace, Underground parking, Swimming pool',
      community: 'Spa, Rooftop lounge, 24/7 security',
    },
    description: 'Experience luxury living in this stunning condo with panoramic sea views and top-of-the-line finishes.',
    neighborhood: 'Exclusive neighborhood with access to fine dining, boutiques, and beaches.',
    taxes: '$5,000/year',
    hoaFees: '$350/month',
    agent: {
      name: 'Jane Smith',
      phone: '(987) 654-3210',
    }
  },
  // Add more properties as needed
];

function Property() {
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [showAgentDetails, setShowAgentDetails] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchPrice, setSearchPrice] = useState('');

  const handleToggleDetails = (id) => {
    if (selectedPropertyId === id) {
      setShowAgentDetails(!showAgentDetails);
    } else {
      setSelectedPropertyId(id);
      setShowAgentDetails(false);
    }
  };

  const handleSearch = () => {
    const location = searchLocation.toLowerCase();
    const type = searchType.toLowerCase();
    const price = searchPrice.replace('$', '').replace(',', '').split('-').map(p => p.trim()).map(Number);

    return properties.filter(property => {
      const propertyLocation = property.address.toLowerCase();
      const propertyType = property.propertyType.toLowerCase();
      const propertyPrice = parseInt(property.price.replace('$', '').replace(',', ''));

      return (!location || propertyLocation.includes(location)) &&
             (!type || propertyType === type) &&
             (!price[0] || propertyPrice >= price[0]) &&
             (!price[1] || propertyPrice <= price[1]);
    });
  };

  const filteredProperties = handleSearch();

  return (
    <div className="property-container">
      <div className="property-search">
        <input 
          type="text" 
          placeholder="Location" 
          className="search-input" 
          value={searchLocation} 
          onChange={(e) => setSearchLocation(e.target.value)} 
        />
        <select 
          className="search-input" 
          value={searchType} 
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="">Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="House">House</option>
          <option value="Land">Land</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>
        <input 
          type="text" 
          placeholder="Price Range (e.g. 100000-500000)" 
          className="search-input" 
          value={searchPrice} 
          onChange={(e) => setSearchPrice(e.target.value)} 
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      <div className="property-list">
        {filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt="Property" />
            <div className="property-details">
              {selectedPropertyId === property.id && !showAgentDetails ? (
                <>
                  <h3>{property.title}</h3>
                  <p>{property.price}</p>
                  <p>{property.address}</p>
                  <p>Type: {property.propertyType}</p>
                  <p>Size: {property.size}</p>
                  <p>Bedrooms: {property.bedrooms}</p>
                  <p>Bathrooms: {property.bathrooms}</p>
                  <p>Year Built: {property.yearBuilt}</p>
                  <div className="property-features">
                    <h4>Features:</h4>
                    <p><strong>Interior:</strong> {property.features.interior}</p>
                    <p><strong>Exterior:</strong> {property.features.exterior}</p>
                    <p><strong>Community:</strong> {property.features.community}</p>
                  </div>
                  <div className="property-description">
                    <h4>Description:</h4>
                    <p>{property.description}</p>
                  </div>
                  <div className="neighborhood-description">
                    <h4>Neighborhood:</h4>
                    <p>{property.neighborhood}</p>
                  </div>
                  <div className="financial-info">
                    <h4>Financial Information:</h4>
                    <p><strong>Property Taxes:</strong> {property.taxes}</p>
                    <p><strong>HOA Fees:</strong> {property.hoaFees}</p>
                  </div>
                  <button className="btn" onClick={() => handleToggleDetails(property.id)}>
                    {showAgentDetails ? 'Show Property Details' : 'Show Agent Details'}
                  </button>
                </>
              ) : (
                <>
                  {selectedPropertyId === property.id && showAgentDetails && (
                    <div className="agent-details">
                      <h4>Agent Details:</h4>
                      <p><strong>Name:</strong> {property.agent.name}</p>
                      <p><strong>Phone:</strong> {property.agent.phone}</p>
                      <button className="btn" onClick={() => handleToggleDetails(property.id)}>
                        Show Property Details
                      </button>
                    </div>
                  )}
                  {selectedPropertyId !== property.id && (
                    <button className="btn" onClick={() => handleToggleDetails(property.id)}>
                      View Details
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Property;
