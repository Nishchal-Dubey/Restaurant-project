import React from "react";
import "./ExcellenceSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const ExcellenceSection = () => {
  return (
    <section className="excellence-section text-center py-5">
      <div className="container">
        <h2 className="excellence-title">Excellence</h2>
        <div className="divider mx-auto my-3"></div>
        <p className="text-muted mb-4">
          We are blessed enough to be honoured with great awards from <br />
          food critics and organizations all over the world.
        </p>
        <p className="order-now-text mb-4">Order Now</p>
        <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
          <img src="zomato-logo.png" alt="Zomato" className="brand-logo" />
          <img src="swiggy.png" alt="Swiggy" className="brand-logo" />
          <img src="Dineout-Logo.png" alt="Dineout" className="brand-logo" />
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
