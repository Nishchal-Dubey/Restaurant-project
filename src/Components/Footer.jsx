import React from "react";
import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer-section text-light py-5 ">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo & Description */}
          <div className="col-md-3 mb-4">
            <img src="white-india.png" alt="India Restaurant" className="footer-logo mb-3" />
            <p className="footer-desc">
              India Restaurant is known for creating unforgettable food experiences. We believe that food is therapy and try to put up a smile on your face with our culinary skills.
            </p>
            <div className="social-icons mt-3">
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          {/* Addresses */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Our Addresses</h5>
            <p className="footer-desc"> 34, Karl Marx Sarani, Khidderpore,<br /> Kolkata - 700023</p>
            <p className="footer-desc">9, Kazi Nazrul Islam Avenue,<br /> Kaikhali Crossing, Kolkata - 700052</p>
          </div>

          {/* Business Hours */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Business Hours</h5>
            {[
              "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
            ].map((day) => (
              <p key={day} className="footer-desc">{day}: 11:00 AM – 11:00 PM</p>
            ))}
          </div>

          {/* Contact Details */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Contact Details</h5>
            <strong >Khidderpore</strong>
            <p className="footer-desc"><i className="bi bi-telephone-fill me-2"></i>+91 8481848484</p>
            <p className="footer-desc"><i className="bi bi-telephone-fill me-2"></i>+91 8420533005</p>
            <strong>Kaikhali</strong>
            <p className="footer-desc"><i className="bi bi-telephone-fill me-2"></i>+033 4804 9142</p>
            <p className="footer-desc"><i className="bi bi-telephone-fill me-2"></i>+91 99039 80011</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
