import React, { useEffect, useRef } from 'react';

// Make sure to replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

const GoogleMapComponent = ({ address }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => initializeMap();
      document.body.appendChild(script);
    };

    const initializeMap = () => {
      if (window.google && mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 15,
          center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
        });

        const geocoder = new window.google.maps.Geocoder();

        if (address) {
          geocoder.geocode({ address: address }, (results, status) => {
            if (status === 'OK') {
              const location = results[0].geometry.location;
              map.setCenter(location);
              new window.google.maps.Marker({
                map: map,
                position: location,
              });
            } else {
              console.error('Geocode was not successful for the following reason: ' + status);
            }
          });
        }
      }
    };

    loadGoogleMapsScript();
  }, [address]);

  return <div ref={mapRef} style={{ height: '450px', width: '100%' }} />;
};

export default GoogleMapComponent;
