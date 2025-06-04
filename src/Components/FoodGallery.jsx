import React from 'react';
import './FoodGallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
  '1 (1).jpg',
  '9.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  'IN-2.jpg',
  'IN-3.jpg',
  'IN-1.jpg'
];

const FoodGallery = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {images.map((src, index) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
            <div className="img-container">
              <img src={src} alt={`food-${index}`} className="img-fluid rounded shadow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
