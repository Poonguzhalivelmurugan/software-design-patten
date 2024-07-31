import React from 'react';
import { useParams } from 'react-router-dom';

const propertyDetails = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { propertyId } = useParams();

  // Fetch property details using the propertyId
  // For demonstration purposes, I'm using a static object.
  const property = {
    id: propertyId,
    title: 'Beautiful Family Home',
    description: 'A lovely family home located in a quiet neighborhood.',
    price: '$500,000',
    image: 'https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-7-1760-1000.jpg',
  };

  return (
    <div className="property-details">
      <h1>{property.title}</h1>
      <img src={property.image} alt={property.title} />
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
      {/* Add more property details as needed */}
    </div>
  );
};

export default propertyDetails;
