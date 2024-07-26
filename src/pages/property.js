import React from 'react';
import './propert.css';
import property1 from '../assets/pro1.jpg';
import property2 from '../assets/pro2.jpg';
// import property3 from '../assets/property3.jpg';

const properties = [
  {
    id: 1,
    image: property1,
    price: '$500,000',
    address: '123 Main St, City, State, ZIP',
  },
  {
    id: 2,
    image: property2,
    price: '$750,000',
    address: '456 Oak Dr, City, State, ZIP',
  },
  // {
  //   id: 3,
  //   image: property3,
  //   price: '$1,200,000',
  //   address: '789 Pine Ln, City, State, ZIP',
  // },
];

function Property() {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          <img src={property.image} alt="Property" />
          <div className="property-details">
            <h3>{property.price}</h3>
            <p>{property.address}</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Property;
