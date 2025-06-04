import React from 'react';
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center text-white py-5 ">
      <div className="overlay"></div>
      <div className="hero-content">
        <p className="subheading">We Create Delicious Memories</p>
        <h1 className="main-heading">Eat Good Feel Good</h1>
      </div>
    </section>
  );
};

export default HeroSection;
