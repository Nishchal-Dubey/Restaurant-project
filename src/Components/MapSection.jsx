// MapSection.js
import React from 'react';
import './MapSection.css';

const MapSection = () => {
  return (
    <div className="map-container">
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6825389436344!2d88.3238372752238!3d22.592098132611265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02779462b2e5fd%3A0xa26b2f69bfb3d615!2sIndia%20Restaurant!5e0!3m2!1sen!2sin!4v1713614697383!5m2!1sen!2sin&ui=controls=0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="India Restaurant Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;