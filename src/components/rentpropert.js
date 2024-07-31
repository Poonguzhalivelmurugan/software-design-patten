// src/components/PropertyDetails.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './rentpro.css'; // Ensure this CSS file is created and included

// const PropertyDetails1 = () => {
//   const { id } = useParams();

//   const properties = [
//     {
//       id: 1,
//       images: [
//         'https://wallpaperaccess.com/full/1899390.jpg',
//         'https://wallpaperaccess.com/full/1899390.jpg',
//         'https://wallpaperaccess.com/full/1899390.jpg'
//       ],
//       title: '2 BHK Villa for Rent in Narayana Swami Kalyana Mandapam',
//       price: '₹10,000',
//       otherCharges: 'See other charges',
//       size: '1200 Sq-ft',
//       address: 'Narayana Swami Kalyana Mandapam, Arakkonam',
//       description: 'Semi-Furnished, 2 Bathrooms, Bachelors preferred, Available immediately, Carpet Area: 811 sqft, West Facing, ₹12/sqft, Age Of Construction: 5 to 10 years',
//       ownerName: 'Nirmal',
//       status: 'Immediately',
//       furnishedStatus: 'Semi-Furnished',
//       ageOfConstruction: '5 to 10 years',
//       contact: 'Contact Owner',
//       mapLocation: 'https://maps.google.com/?q=Narayana+Swami+Kalyana+Mandapam,+Arakkonam'
//     },
//     {
//       id: 2,
//       images: [
//         'https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-7-1760-1000.jpg',
//         'https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-7-1760-1000.jpg',
//         'https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-7-1760-1000.jpg'
//       ],
//       title: '2 BHK Villa for Rent in SH58 Arakkonam',
//       price: '₹15,000',
//       otherCharges: 'See other charges',
//       size: '1600 Sq-ft',
//       address: 'SH58, Arakkonam',
//       description: 'Unfurnished, 2 Bathrooms, Bachelors preferred, Available immediately, Carpet Area: 1600 sqft, East Facing, Overlooking Garden/Park',
//       ownerName: 'Vinod Kumar',
//       status: 'Immediately',
//       furnishedStatus: 'Unfurnished',
//       ageOfConstruction: '5 to 10 years',
//       contact: 'Contact Owner',
//       mapLocation: 'https://maps.google.com/?q=SH58,+Arakkonam'
//     },
//     // Add more properties as needed
//   ];

//   const property = properties.find((prop) => prop.id === parseInt(id));

//   if (!property) return <p>Property not found.</p>;

//   return (
//     <div className="property-details">
//       <h1>{property.title}</h1>
//       <div className="property-images">
//         {property.images.map((img, index) => (
//           <img key={index} src={img} alt={`Property Image ${index + 1}`} />
//         ))}
//       </div>
//       <div className="property-info">
//         <p><strong>Price:</strong> {property.price}</p>
//         <p><strong>Other Charges:</strong> {property.otherCharges}</p>
//         <p><strong>Size:</strong> {property.size}</p>
//         <p><strong>Address:</strong> {property.address}</p>
//         <p><strong>Description:</strong> {property.description}</p>
//         <p><strong>Owner:</strong> {property.ownerName}</p>
//         <p><strong>Status:</strong> {property.status}</p>
//         <p><strong>Furnished Status:</strong> {property.furnishedStatus}</p>
//         <p><strong>Age of Construction:</strong> {property.ageOfConstruction}</p>
//         <p><strong>Contact:</strong> {property.contact}</p>
//       </div>
//       <div className="property-map">
//         <iframe
//           src={property.mapLocation}
//           width="600"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           title="Property Location"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails1;
