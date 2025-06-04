import React from 'react';
import './MissionVision.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const MissionVision = () => {
  return (
    <div className="mission-vision-container py-5 mb-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Mission Card */}
          <div className="col-md-5 mb-4 mb-md-0">
            <div className="mission-card h-100 p-4 p-lg-5">
              <h2 className="section-title mb-4">Our Mission</h2>
              <p className="section-text">
                To help our customers enjoy simple edible pleasures and reach their hearts through 
                their stomachs.
              </p>
            </div>
          </div>

          {/* Center Image - only shows on medium+ screens */}
          <div className="col-md-2 d-none d-md-flex flex-column justify-content-center py-5">
            <div className="center-image-container">
              <img 
                src="vision-banner.jpg"
                alt="Food illustration"
                className="img-fluid center-image"
              />
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-md-5">
            <div className="vision-card h-100 p-4 p-lg-5">
              <h2 className="section-title mb-4">Our Vision</h2>
              <p className="section-text">
                To create an ultimate destination for every food lover in town and lead them to an 
                extraordinary food journey.
              </p>
            </div>
          </div>

          {/* Mobile Image - shows only on small screens */}
          <div className="col-12 d-md-none text-center my-5 py-3">
            <img 
              src="vision-banner.jpg" // Replace with your image path
              alt="Food illustration"
              className="img-fluid mobile-image"
              style={{maxHeight: '150px'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;