import React from "react";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* White Navigation Links */}
        <div className="footer-nav">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        
        {/* Copyright Text */}
        <div className="copyright text-center">
          <p className="text-white">© 2022 India Restaurant. | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;