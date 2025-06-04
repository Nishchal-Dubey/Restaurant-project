import React from 'react';
import './ContactSection.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactSection = () => {
  return (
    <div className="container my-5 contact-section">
      <div className="row">
        {/* Contact Info */}
        <div className="col-lg-8 mb-4">
          <p className="lead">Feel free to reach us.</p>
          <p className="mb-4">
            We are all ears for your feedback and queries. Contact us now, and we will get back to you.
          </p>
          <div className="row">
            {/* Address */}
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Our Addresses</h5>
              <p>34, Karl Marx Sarani, Khidderpore, Kolkata - 700023</p>
              <p>9, Kazi Nazrul Islam Avenue, Kaikhali Crossing, Kolkata - 700052</p>
            </div>

            {/* Email */}
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Email Id:</h5>
              <p>info@indiarestaurant.in</p>
            </div>

            {/* Call Us */}
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Call Us Now</h5>
              <p className="mb-1"><strong>Khidderpore</strong></p>
              <p><i className="bi bi-telephone-fill me-2 text-primary"></i>+91 8481848484</p>
              <p><i className="bi bi-telephone-fill me-2 text-primary"></i>+91 8420533005</p>

              <p className="mt-3 mb-1"><strong>Kaikhali</strong></p>
              <p><i className="bi bi-telephone-fill me-2 text-primary"></i>+033 4804 9142</p>
              <p><i className="bi bi-telephone-fill me-2 text-primary"></i>+91 99039 80011</p>
            </div>

            {/* Social Links */}
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Follow Us</h5>
              <div className="social-icons d-flex gap-3 mt-2">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Times (Written Style) */}
        <div className="col-lg-4">
          <div className="opening-times-box p-4 rounded shadow">
            <h5 className="fw-bold mb-4 text-center text-white">Opening Times</h5>
            <ul className="list-unstyled text-white">
              <li className="d-flex justify-content-between"><span>Mon:</span><span>11:00 AM – 11:00 PM</span></li>
              <li className="d-flex justify-content-between"><span>Tue:</span><span>11:00 AM – 11:00 PM</span></li>
              <li className="d-flex justify-content-between"><span>Wed:</span><span>11:00 AM – 11:00 PM</span></li>
              <li className="d-flex justify-content-between"><span>Thu:</span><span>11:00 AM – 11:00 PM</span></li>
              <li className="d-flex justify-content-between"><span>Fri:</span><span>11:00 AM – 11:00 PM</span></li>
              <li className="d-flex justify-content-between"><span>Sat:</span><span>11:00 AM – 11:00 PM</span></li>
              <li className="d-flex justify-content-between"><span>Sun:</span><span>11:00 AM – 11:00 PM</span></li>
            </ul>
            <div className="text-center mt-4">
              <h6 className="text-warning mb-1">Call Us Now</h6>
              <p className="fs-5 fw-bold text-primary mb-0">8481848484</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
