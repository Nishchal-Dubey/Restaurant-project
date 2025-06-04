// src/Components/SpecialitySection.jsx
import React from 'react';
import './SpecialitySection.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const SpecialitySection = () => {
  return (
    <section className="speciality-section py-5 ">
      <div className="text-center mb-5">
        <p className="text-warning">India Restaurant</p>
        <h2 className="special-heading">Our Speciality</h2>
        <div className=" mx-auto my-4"></div>
        <p className="text-muted w-75 mx-auto">
          We provide a wide range of cuisines and dishes to choose from so that every foodie in town has their best experience with us.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="special-card">
              <img src="MUGALI.jpg" alt="Mughlai" className="img-fluid" />
              <div className="card-title">Mughlai</div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="special-card">
              <img src="INDIAN.jpg" alt="Indian" className="img-fluid" />
              <div className="card-title">Indian</div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="special-card">
              <img src="CHINESE.jpg" alt="Chinese" className="img-fluid" />
              <div className="card-title">Chinese</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialitySection;
