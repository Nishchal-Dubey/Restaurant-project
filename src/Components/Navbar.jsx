




import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useWishlist } from './WishlistContext';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext'; // ✅ Import useAuth

const Navbar = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const { user, logout } = useAuth(); // ✅ Access user and logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="/white-india.png" alt="Logo" className="navbar-logo" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>HOME</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>ABOUT US</NavLink></li>
            <li className="nav-item"><NavLink to="/shop" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>SHOP</NavLink></li>
            <li className="nav-item"><NavLink to="/gallery" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>GALLERY</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>CONTACT US</NavLink></li>
            <li className="nav-item"><NavLink to="/orders" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>ORDER LIST</NavLink></li>
          </ul>
        </div>

        <div className="icon-group d-flex align-items-center">
          <NavLink to="/wishlist" className="nav-icon-link me-3 position-relative" aria-label="Wishlist">
            <i className="bi bi-heart"></i>
            {wishlist.length > 0 && (
              <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                {wishlist.length}
              </span>
            )}
          </NavLink>

          <NavLink to="/cart" className="nav-icon-link me-3 position-relative" aria-label="Cart">
            <i className="bi bi-cart"></i>
            {cart.length > 0 && (
              <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                {cart.length}
              </span>
            )}
          </NavLink>

          {/* User Dropdown */}
          <div className="dropdown">
            <button className="btn nav-icon-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-person-circle"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {user ? (
                <>
                  <li><span className="dropdown-item-text">Hi, {user.name}</span></li>
                  {user.role === 'admin' && (
                    <li><NavLink className="dropdown-item" to="/admin/adminhome">Admin Panel</NavLink></li>
                  )}
                  <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                </>
              ) : (
                <>
                  <li><NavLink className="dropdown-item" to="/login">Login</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/register">Register</NavLink></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
